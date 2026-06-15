require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const pool = require('./db');

const app = express();

app.use(express.json());
app.use(cors({ 
  origin: ['http://localhost:5173', 'http://localhost:5174'], 
  credentials: true 
}));
app.use(cookieParser());

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) return res.status(401).json({ error: 'Invalid credentials' });
    
    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password_hash || user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
    
    res.cookie('token', token, { httpOnly: true, sameSite: 'lax', maxAge: 3600000 });
    res.json({ authenticated: true, token });
  } catch (err) { 
    console.error("Login Error:", err);
    res.status(500).json({ error: 'Database error' }); 
  }
});

app.get('/api/kpi/dashboard-metrics', async (req, res) => {
  try {
    const targetDate = '2026-05-07'; 

    const results = await Promise.all([
      pool.query(`SELECT COALESCE(SUM(amount), 0) AS total, COUNT(*) AS count FROM transactions WHERE type ILIKE 'Purchase'`),
      pool.query(`SELECT COALESCE(SUM(amount), 0) AS total, COUNT(*) AS count FROM transactions WHERE type ILIKE 'Sales' AND transaction_date::date = $1`, [targetDate]),
      pool.query(`SELECT COALESCE(SUM(quantity), 0) AS total FROM inventory`),
      pool.query(`SELECT COALESCE(SUM(amount), 0) AS total, COUNT(DISTINCT item_code) AS count FROM transactions WHERE type ILIKE 'Purchase' AND status = 'Pending'`),
      pool.query(`SELECT COALESCE(SUM(amount), 0) AS total, COUNT(DISTINCT item_code) AS count FROM transactions WHERE type ILIKE 'Sales' AND status = 'Pending'`),
      pool.query(`SELECT COALESCE(SUM(quantity), 0) AS total, COUNT(*) AS count FROM dispatch_orders WHERE status = 'Pending'`),
      pool.query(`SELECT code as name, amount FROM transactions WHERE type ILIKE 'Purchase'`),
      pool.query(`SELECT code as name, amount FROM transactions WHERE type ILIKE 'Sales'`),
      pool.query(`SELECT name, SUM(amount) as amount FROM transactions WHERE type ILIKE 'Purchase' GROUP BY name`),
      pool.query(`SELECT name, SUM(amount) as amount FROM transactions WHERE type ILIKE 'Sales' GROUP BY name`),
      pool.query(`SELECT * FROM transactions ORDER BY transaction_date DESC LIMIT 10`)
    ]);

    res.json({
      purchaseToday: { amount: Number(results[0].rows[0].total), count: Number(results[0].rows[0].count) },
      salesToday: { amount: Number(results[1].rows[0].total), count: Number(results[1].rows[0].count) },
      currentStock: { amount: Number(results[2].rows[0].total) },
      pendingPayments: { amount: Number(results[3].rows[0].total), count: Number(results[3].rows[0].count) },
      outstandingReceivables: { amount: Number(results[4].rows[0].total), count: Number(results[4].rows[0].count) },
      dispatchPending: { amount: Number(results[5].rows[0].total), count: Number(results[5].rows[0].count) },
      purchaseHistory: results[6].rows,
      salesHistory: results[7].rows,
      purchaseGrouped: results[8].rows,
      salesGrouped: results[9].rows,
      recentTransactions: results[10].rows
    });
  } catch (err) {
    console.error("Dashboard Metrics Error:", err);
    res.status(500).json({ error: 'Failed to fetch metrics' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`ERP Server running on port ${PORT}`));
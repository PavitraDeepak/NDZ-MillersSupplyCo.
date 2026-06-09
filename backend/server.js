require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
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
    const isMatch = await bcrypt.compare(password, user.password || user.password_hash);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    res.cookie('token', token, { 
      httpOnly: true, 
      secure: false, // Set to true in production with HTTPS
      sameSite: 'lax', 
      maxAge: 3600000 
    });
    res.json({ authenticated: true, token });
  } catch (err) { 
    console.error(err);
    res.status(500).json({ error: 'Database error' }); 
  }
});



app.get('/api/kpi/total-purchase-today', async (req, res) => {
  try {
    const query=`
      SELECT COALESCE(SUM(amount),0) AS total_purchase 
      FROM transactions 
      WHERE type = $1 AND transaction_date = $2
    `;
    const values = ['Purchase', '2026-05-07'];
    const result = await pool.query(query);
    res.json({ total: result.rows[0].total_purchase});
  }catch(err){
    console.error("KPI Fetch Error:",err);
    res.status(500).json({ error: 'Failed to fetch KPI' });
  });




app.get('/api/refresh-token', (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.json({ authenticated: false });
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const newToken = jwt.sign({ userId: decoded.userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    res.cookie('token', newToken, { 
      httpOnly: true, 
      secure: false, 
      sameSite: 'lax', 
      maxAge: 3600000 
    });
    res.json({ authenticated: true, token: newToken });
  } catch (err) { 
    res.clearCookie('token'); 
    res.json({ authenticated: false }); 
  }
});

app.post('/api/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
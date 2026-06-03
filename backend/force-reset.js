const bcrypt = require('bcrypt');
const pool = require('./db');

async function reset() {
  try {
    await pool.query('DELETE FROM users');
    console.log("Database cleared.");

    const hashedPassword = await bcrypt.hash('password123', 10);

    await pool.query(   
      'INSERT INTO users (email, password) VALUES ($1, $2)',
      ['admin@erp.com', hashedPassword]
    );
    console.log("Admin user re-seeded successfully with password123");
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
}
reset();
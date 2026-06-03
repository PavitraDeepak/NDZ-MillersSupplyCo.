require("dotenv").config();
const bcrypt = require("bcrypt");
const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function seed() {
    try {    
        await client.connect();
        console.log("Connected to database");

        // 1. Create table with the correct column name 'password'
        await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY, 
                username VARCHAR(50) UNIQUE, 
                password VARCHAR(255) NOT NULL, 
                email VARCHAR(255) UNIQUE NOT NULL
            );
        `);
        console.log("Users table created");

        const hashedPassword = await bcrypt.hash("password123", 10);

        await client.query(
            'INSERT INTO users (email, password) VALUES ($1, $2) ON CONFLICT (email) DO NOTHING',
            ['admin@erp.com', hashedPassword] 
        );
        console.log("Test user 'admin@erp.com' seeded successfully");

    } catch (err) {
        console.error("Error seeding database", err);
    } finally {
        await client.end();
        console.log("Database connection closed");
    }
}

seed();
require("dotenv").config();
const bcrypt = require("bcrypt");
const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { 
        rejectUnauthorized: false, 
        requestCert: true,
        agent: false
    }
});

async function seed() {
    try {    
        await client.connect();
        
        await client.query(`
            CREATE TABLE IF NOT EXISTS transactions (
                id SERIAL PRIMARY KEY,
                code VARCHAR(50) UNIQUE NOT NULL,
                item_code VARCHAR(50) NOT NULL,
                name VARCHAR(100) NOT NULL,
                type VARCHAR(20) NOT NULL,
                unit VARCHAR(20),
                branch VARCHAR(100),
                quantity NUMERIC NOT NULL,
                amount NUMERIC NOT NULL,
                transaction_date DATE NOT NULL,
                status VARCHAR(50) NOT NULL,
                party VARCHAR(100) NOT NULL
            );
        `);

        const myTransactions = [
            { code: 'PUR-2024-001', item_code: 'ITM-001', name: 'Hard Red Spring', type: 'Sales', unit: '10', branch: 'Kochi Branch', qty: 150, amount: 45680, date: '2026-05-07', status: 'Completed', party: 'Supplier A' },
            { code: 'PUR-2024-002', item_code: 'ITM-002', name: 'Hard Red Spring', type: 'Purchase', unit: '10', branch: 'Kochi Branch', qty: 150, amount: 45680, date: '2026-05-07', status: 'Completed', party: 'Supplier B' },
            { code: 'PUR-2024-003', item_code: 'ITM-003', name: 'Hard Red Spring', type: 'Purchase', unit: '10', branch: 'Kochi Branch', qty: 150, amount: 45680, date: '2026-05-07', status: 'Pending', party: 'Supplier C' }
        ];

        for (const p of myTransactions) {
            await client.query(
                `INSERT INTO transactions (code, item_code, name, type, unit, branch, quantity, amount, transaction_date, status, party)
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
                 ON CONFLICT (code) DO NOTHING`,
                [p.code, p.item_code, p.name, p.type, p.unit, p.branch, p.qty, p.amount, p.date, p.status, p.party]
            );
        }
        console.log("Database seeded with your 3 records.");
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.end();
    }
}
seed();
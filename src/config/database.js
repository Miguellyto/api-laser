const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.on('connect', () => {
  console.log('Base Conectada!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
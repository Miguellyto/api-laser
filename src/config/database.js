const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// Conexão com a Base de Dados:
const pool = new Pool({
  "connectionLimit" : 1000,
  connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
  console.log('Base Conectada!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    message: 'API LASER Node.js + PostgreSQL',
    version: '1.0.0',
  });
});

module.exports = router;
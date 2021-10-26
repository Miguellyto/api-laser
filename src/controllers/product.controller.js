const db = require("../config/database");
//const moment = require('moment-timezone');
const Sequelize = require('sequelize');
const DataTypes = require('sequelize/lib/data-types');
//const moment = require('moment-timezone');
const moment = require('moment');

//  Lista todos os products:
exports.listAllProducts = async (req, res) => {
    const response = await db.query(
      `SELECT 
      chave, 
      ean,
      nome, 
      codigo,
      classe,   
      fabricante, 
      imagem, 
      marca, 
      prazogarantia, 
      descricaogenerica,
      altura,
      largura,
      comprimento,
      pesbruunid,
      prvenda 
      FROM RECURSO ORDER BY codigo ASC`,
      //'SELECT * FROM products ORDER BY nome DESC',
    );
    res.status(200).send(response.rows);
  };
  
  //  Seleciona Produto pelo Id:
  exports.findProductById = async (req, res) => {
    const sku = parseInt(req.params.id);
    const response = await db.query(
      `SELECT 
      chave, 
      ean,
      nome, 
      codigo,
      classe,   
      fabricante, 
      imagem, 
      marca, 
      prazogarantia, 
      descricaogenerica,
      altura,
      largura,
      comprimento,
      pesbruunid,
      prvenda
      FROM RECURSO WHERE codigo = $1`, 
      [sku],
    );
    res.status(200).send(response.rows);
  };
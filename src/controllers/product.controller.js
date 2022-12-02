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
      a.chave, 
      a.ean,
      '' as ncm,
      a.nome, 
      a.codigo,
      'QUANTIDADE' as quantidade,
      'PREÇO ESPECIAL' as preço_especial,
      b.fator as preço,
      a.descricaogenerica,
      a.marca, 
      'CUSTO' as custo,
      a.prazogarantia,
      'OBSERVAÇÃO' as observacao,
      'LINK PRODUTO' as link_produto,
      'ACESSIVEL' as acessivel,
      a.classe,   
      'TEMPO MANUSEIO' as tempo_manuseio,
      'TEMPO FABRICAÇÃO' as tempo_fabricacao,
      a.comprimento as comprimento,
      a.largura as largura,
      a.altura as altura,
      a.pesbruunid as peso,
      'ATRIBUTOS' as atributos,
      'FOTOS' as fotos,
      'TABELA PREÇO' as tabela_preco,
      'deposito' as deposito,
      'VARIAÇÕES' as variacoes
      from RECURSO a 
      join fator b
      on a.chave = b.recursoorig
      and b.tabfator = 462894
      and b.fim is null
      ORDER BY nome ASC`,
      //and b.tabfator = 5789394 "TAB ECOMMERCE" 462894
      //'SELECT * FROM products ORDER BY sku ASC',
      //'SELECT * FROM products ORDER BY nome DESC',
    );
    res.status(200).send(response.rows);
  };
  
  //  Seleciona Produto pelo Id:
  exports.findProductById = async (req, res) => {
    const sku = parseInt(req.params.id);
    const response = await db.query(
      `SELECT 
      a.chave, 
      a.ean,
      '' as ncm,
      a.nome, 
      a.codigo,
      'QUANTIDADE' as quantidade,
      'PREÇO ESPECIAL' as preço_especial,
      b.fator as preço,
      a.descricaogenerica,
      a.marca, 
      'CUSTO' as custo,
      a.prazogarantia,
      'OBSERVAÇÃO' as observacao,
      'LINK PRODUTO' as link_produto,
      'ACESSIVEL' as acessivel,
      a.classe,   
      'TEMPO MANUSEIO' as tempo_manuseio,
      'TEMPO FABRICAÇÃO' as tempo_fabricacao,
      a.comprimento as comprimento,
      a.largura as largura,
      a.altura as altura,
      a.pesbruunid as peso,
      'ATRIBUTOS' as atributos,
      'FOTOS' as fotos,
      'TABELA PREÇO' as tabela_preco,
      'DEPOSITO' as deposito,
      'VARIAÇOES' as variacoes
      from RECURSO a 
      join fator b
      on a.chave = b.recursoorig
      and b.tabfator = 462894 
      and b.fim is null
      where codigo = $1`, 
      [sku], 
    );//and b.tabfator = 5789394 "TAB ECOMMERCE" 462894
    res.status(200).send(response.rows);
  };
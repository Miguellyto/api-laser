const db = require("../config/database");
//const moment = require('moment-timezone');
const Sequelize = require('sequelize');
const DataTypes = require('sequelize/lib/data-types');
//const moment = require('moment-timezone');
const moment = require('moment');

//  Lista todos os products:
exports.listAllProducts = async (req, res) => {
    const response = await db.query(
      `select 
      a.chave, 
      a.ean,
      '' as ncm,
      a.nome, 
      a.codigo,
      'quantidade' as quantidade,
      'preço especial' as preço_especial,
      b.fator as preço,
      a.descricaogenerica,
      a.marca, 
      'custo' as custo,
      a.prazogarantia,
      'observacao' as observacao,
      'link produto' as link_produto,
      'acessivel' as acessivel,
      a.classe,   
      'tempo manuseio' as tempo_manuseio,
      'tempo fabricacao' as tempo_fabricacao,
      a.comprimento as comprimento,
      a.largura as largura,
      a.altura as altura,
      a.pesbruunid as peso,
      'atributos' as atributos,
      'fotos' as fotos,
      'tabelas de preco' as tabela_preco,
      'deposito' as deposito,
      'variacoes' as variacoes
      from RECURSO a 
      join fator b
      on a.chave = b.recursoorig
      and b.tabfator = 462894
      and b.fim is null
      `,
      //'SELECT * FROM products ORDER BY nome DESC',
    );
    res.status(200).send(response.rows);
  };
  
  //  Seleciona Produto pelo Id:
  exports.findProductById = async (req, res) => {
    const sku = parseInt(req.params.id);
    const response = await db.query(
      `select 
      a.chave, 
      a.ean,
      '' as ncm,
      a.nome, 
      a.codigo,
      'quantidade' as quantidade,
      'preço especial' as preço_especial,
      b.fator as preço,
      a.descricaogenerica,
      a.marca, 
      'custo' as custo,
      a.prazogarantia,
      'observacao' as observacao,
      'link produto' as link_produto,
      'acessivel' as acessivel,
      a.classe,   
      'tempo manuseio' as tempo_manuseio,
      'tempo fabricacao' as tempo_fabricacao,
      a.comprimento as comprimento,
      a.largura as largura,
      a.altura as altura,
      a.pesbruunid as peso,
      'atributos' as atributos,
      'fotos' as fotos,
      'tabelas de preco' as tabela_preco,
      'deposito' as deposito,
      'variacoes' as variacoes
      from RECURSO a 
      join fator b
      on a.chave = b.recursoorig
      and b.tabfator = 462894
      and b.fim is null
      where codigo = $1`, 
      [sku],
    );
    res.status(200).send(response.rows);
  };
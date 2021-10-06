const db = require("../config/database");

// cria um novo Pedido:
exports.createOrder = async (req, res) => {
  const { nome, quantidade, preco } = req.body;
  const { rows } = await db.query(
    'INSERT INTO pedidos (nome, quantidade, preco) VALUES ($1, $2, $3)',
    [nome, quantidade, preco],
  );

  res.status(201).send({
    message: 'Pedido Adicionado com Successo',
    body: {
      order: { nome, quantidade, preco }
    },
  });
};

//  Lista todos os Pedidos:
exports.listAllOrders = async (req, res) => {
    const response = await db.query(
      'SELECT * FROM pedidos ORDER BY sku ASC',
      //'SELECT * FROM pedidos ORDER BY nome DESC',
    );
    res.status(200).send(response.rows);
  };
  
  //  Seleciona Pedido pelo Id:
  exports.findOrderById = async (req, res) => {
    const sku = parseInt(req.params.id);
    const response = await db.query(
      'SELECT * FROM pedidos WHERE sku = $1',
      [sku],
    );
    res.status(200).send(response.rows);
  };
  
  //  Atualiza um Pedido pelo Id:
  exports.updateOrderById = async (req, res) => {
    const sku = parseInt(req.params.id);
    const { nome, quantidade, preco } = req.body;
  
    const response = await db.query(
      'UPDATE pedidos SET nome = $1, quantidade = $2, preco = $3 WHERE sku = $4',
      [nome, quantidade, preco, sku]
    );
  
    res.status(200).send({ message: 'Pedidos Atualizado com Successo' });
  };
  
  //  Excluí um Pedido pelo Id:
  exports.deleteOrderById = async (req, res) => {
    const sku = parseInt(req.params.id);
    await db.query('DELETE FROM pedidos WHERE sku = $1', 
    [sku]
      );
  
    res.status(200).send({ message: 'Pedido excluído com successo', sku });
  };
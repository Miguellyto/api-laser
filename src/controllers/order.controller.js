const db = require("../config/database");

////cria um novo Pedido:
exports.createOrder = async (req, res) => {
  const { id_produto, quantidade } = req.body;
  const { rows } = await db.query(
    'INSERT INTO orders (id_produto, quantidade) VALUES ($1, $2)',
    [id_produto, quantidade],
  );

  res.status(201).send({
    message: 'Pedido Adicionado com Successo',
    body: {
      order: { id_produto, quantidade }
      
    },
  });
};

//  Lista todos os order:
exports.listAllOrders = async (req, res) => {
    const response = await db.query(
      'SELECT * FROM orders ORDER BY id_order ASC',
      //'SELECT * FROM order ORDER BY nome DESC',
    );
    res.status(200).send(response.rows);
  };
  
  //  Seleciona Pedido pelo Id:
  exports.findOrderById = async (req, res) => {
    const id_order = parseInt(req.params.id);
    const response = await db.query(
      'SELECT * FROM orders WHERE id_order = $1',
      [id_order],
    );
    res.status(200).send(response.rows);
  };
  
  //  Atualiza um Pedido pelo Id: --Rota apenas para testes
  exports.updateOrderById = async (req, res) => {
    const id_order = parseInt(req.params.id);
    const { id_produto, quantidade } = req.body;
  
    const response = await db.query(
      'UPDATE orders SET id_produto = $1, quantidade = $2 WHERE id_produto = $3',
      [id_produto, quantidade, id_order]
    );
  
    res.status(200).send({ 
    message: 'Pedido Atualizado com Successo', 
    body: {
      order: { id_order, id_produto, quantidade }
    },
  });
};
  
  ////Excluí um Pedido pelo Id:
  exports.deleteOrderById = async (req, res) => {
    const id_order = parseInt(req.params.id);
    await db.query('DELETE FROM orders WHERE id_order = $1', 
    [id_order]
      );
  
    res.status(200).send({ message: 'Pedido Excluído com Successo', id_order });
  };
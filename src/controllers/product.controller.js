const db = require("../config/database");

// cria um novo Produto:
exports.createProduct = async (req, res) => {
  const { nome, quantidade, preco } = req.body;
  const { rows } = await db.query(
    'INSERT INTO products (nome, quantidade, preco) VALUES ($1, $2, $3)',
    [nome, quantidade, preco],
  );

  res.status(201).send({
    message: 'Produto Adicionado com Successo',
    body: {
      product: { nome, quantidade, preco }
    },
  });
};

//  Lista todos os products:
exports.listAllProducts = async (req, res) => {
    const response = await db.query(
      'SELECT * FROM products ORDER BY sku ASC',
      //'SELECT * FROM products ORDER BY nome DESC',
    );
    res.status(200).send(response.rows);
  };
  
  //  Seleciona Produto pelo Id:
  exports.findProductById = async (req, res) => {
    const sku = parseInt(req.params.id);
    const response = await db.query(
      'SELECT * FROM products WHERE sku = $1',
      [sku],
    );
    res.status(200).send(response.rows);
  };
  
  //  Atualiza um Produto pelo Id: --Atualizar todos as colunas do registro.
  exports.updateProductById = async (req, res) => {
    const sku = parseInt(req.params.id);
    const { nome, quantidade, preco } = req.body;
  
    const response = await db.query(
      'UPDATE products SET nome = $1, quantidade = $2, preco = $3 WHERE sku = $4',
      [nome, quantidade, preco, sku]
    );
  
  res.status(200).send({ 
    message: 'Produto Atualizado com Successo', 
    body: {
      order: { sku, nome, quantidade, preco }
    },
  });
};

  //  Excluí um Produto pelo Id:
  exports.deleteProductById = async (req, res) => {
    const sku = parseInt(req.params.id);
    await db.query('DELETE FROM products WHERE sku = $1', 
    [sku]
      );
  
    res.status(200).send({ message: 'Produto excluído com successo', sku });
  };

/*   res.status(200).send({ 
    message: 'Produto excluído com Successo', 
    body: {
      order: { sku, nome, quantidade, preco }
    },
  });
}; */
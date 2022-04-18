const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');


//  Lista todos os ProdutoS: (GET): localhost:5000/product
router.get('/product', productController.listAllProducts);

//  Seleciona Produto pelo Id: (GET): localhost:5000/product/:id
router.get('/product/:id', productController.findProductById);

/* // ==> Rota responsável por criar um novo 'Product': (POST): localhost:5000/product
router.post('/product', productController.createProduct);

//  Atualiza Produto pelo Id: (PUT): localhost:5000/product/:id
router.put('/product/:id', productController.updateProductById);

//  Excluir Produto pelo Id: (DELETE): localhost:5000/product/:id
router.delete('/product/:id', productController.deleteProductById); */

module.exports = router;
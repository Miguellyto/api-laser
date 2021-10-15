const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:4000/api/product
router.post('/product', productController.createProduct);

//  Lista todos os product: (GET): localhost:4000/api/product
router.get('/product', productController.listAllProducts);

//  Seleciona Produto pelo Id: (GET): localhost:4000/api/product/:id
router.get('/product/:id', productController.findProductById);

//  Atualiza Produto pelo Id: (PUT): localhost:4000/api/product/:id
router.put('/product/:id', productController.updateProductById);

//  Excluir Produto pelo Id: (DELETE): localhost:4000/api/product/:id
router.delete('/product/:id', productController.deleteProductById);

module.exports = router;
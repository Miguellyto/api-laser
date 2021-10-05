const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/produtos
router.post('/produtos', productController.createProduct);

//  Lista todos os Produtos: (GET): localhost:3000/api/produtos
router.get('/produtos', productController.listAllProducts);

//  Seleciona Produto pelo Id: (GET): localhost:3000/api/produtos/:id
router.get('/produtos/:id', productController.findProductById);

//  Atualiza Produto pelo Id: (PUT): localhost: 3000/api/produtos/:id
router.put('/produtos/:id', productController.updateProductById);

//  Excluir Produto pelo Id: (DELETE): localhost:3000/api/produtos/:id
router.delete('/produtos/:id', productController.deleteProductById);

module.exports = router;
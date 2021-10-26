const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');


//  Lista todos os product: (GET): localhost:5000/api/recurso
router.get('/recurso', productController.listAllProducts);

//  Seleciona Produto pelo Id: (GET): localhost:5000/api/product/:id
router.get('/recurso/:id', productController.findProductById);

/* // ==> Rota responsável por criar um novo 'Product': (POST): localhost:5000/api/product
router.post('/product', productController.createProduct);

//  Atualiza Produto pelo Id: (PUT): localhost:5000/api/product/:id
router.put('/product/:id', productController.updateProductById);

//  Excluir Produto pelo Id: (DELETE): localhost:5000/api/product/:id
router.delete('/product/:id', productController.deleteProductById); */

module.exports = router;
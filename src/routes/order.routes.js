const router = require('express-promise-router')();
const { default: axios } = require('axios');
const orderController = require('../controllers/order.controller');

//  Lista todos os orders: (GET): localhost:5000/api/order
router.get('/orders', orderController.listAllOrders);

//  Lista pedido pelo Id: (GET): localhost:5000/api/order/:id
router.get('/order/:id', orderController.findOrderById);

// ==> Rota responsável por criar um novo pedido: (POST): localhost:5000/api/order
router.post('/order', orderController.createOrder);

/* 
//  Atualiza pedido pelo Id: (PUT): localhost:5000/api/order/:id
router.put('/order/:id', orderController.updateOrderById);

////-----////
//  Excluir pedido pelo Id: (DELETE): localhost:5000/api/order/:id
router.delete('/order/:id', orderController.deleteOrderById);
 */

// module.exports = axios;
module.exports = router;
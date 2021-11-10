const router = require('express-promise-router')();
//const { default: axios } = require('axios');
const orderController = require('../controllers/order.controller');

//  Get order For Id end save on BD: (GET): localhost:5000/api/order/:id
router.get('/order/:id', orderController.findOrderById);

//  Lista todos os order: (GET): localhost:5000/api/orders
router.get('/orders', orderController.listAllOrders);

//  Lista todos os orders for BD: (GET): localhost:5000/api/order_bd
router.get('/orders_bd', orderController.listAllOrders_bd);

//  Seleciona order pelo Id BD: (GET): localhost:5000/api/order_bd/:id
router.get('/order_bd/:id', orderController.findOrderById_bd);

// ==> Rota responsável por criar um novo order: (POST): localhost:5000/api/order
// router.post('/order', orderController.createOrder);

//  Atualiza order pelo Id: (PUT): localhost:5000/api/order/:id
// router.put('/order/:id', orderController.updateOrderById);

//  Excluir order pelo Id: (DELETE): localhost:5000/api/order/:id
// router.delete('/order/:id', orderController.deleteOrderById);


// module.exports = axios;
module.exports = router;
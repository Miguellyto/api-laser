const router = require('express-promise-router')();
//const { default: axios } = require('axios');
const orderController = require('../controllers/order.controller');

//  Seleciona pedido pelo Id: (GET): localhost:4000/api/order/:id
router.get('/order/:id', orderController.findOrderById);

//  Lista todos os pedido: (GET): localhost:4000/api/order
router.get('/orders', orderController.listAllOrders);

//  Lista todos os pedido: (GET): localhost:4000/api/order
router.get('/orders_bd', orderController.listAllOrders_bd);

//  Seleciona pedido pelo Id: (GET): localhost:4000/api/order/:id
router.get('/order_bd/:id', orderController.findOrderById_bd);

// Pagamento do Pedido: (GET): localhost:4000/api/order/:id
router.get('/order/pgto/:id', orderController.findOrderPgto);

// Atualiza pedido pelo Id: (PATCH / PUT): localhost:4000/api/order/:id
router.patch('/order/:id', orderController.updateOrderById);

// Envio do Status Faturado do Pedido pelo Id: (GET): localhost:4000/api/order/:id
router.get('/order/status/:id', orderController.findOrderStatus);

// Envio do Status Despachado - Envio do Pedido: (GET): localhost:4000/api/order/:id
router.get('/order/shipping/:id', orderController.findOrderShipping);

//  ==> Rota responsável por criar um novo pedido: (POST): localhost:4000/api/order
// router.post('/order', orderController.createOrder);

//  ==> Atualiza pedido pelo Id: (PUT): localhost:4000/api/order/:id
// router.put('/order/:id', orderController.updateOrderById);

//  ==> Excluir pedido pelo Id: (DELETE): localhost:4000/api/order/:id
// router.delete('/order/:id', orderController.deleteOrderById);

// module.exports = axios;
module.exports = router;
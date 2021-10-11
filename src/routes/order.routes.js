const router = require('express-promise-router')();
const orderController = require('../controllers/order.controller');

// ==> Rota responsável por criar um novo pedido: (POST): localhost:4000/api/pedidos
router.post('/pedidos', orderController.createOrder);

//  Lista todos os pedido: (GET): localhost:4000/api/pedidos
router.get('/pedidos', orderController.listAllOrders);

//  Seleciona pedido pelo Id: (GET): localhost:4000/api/pedidos/:id
router.get('/pedidos/:id', orderController.findOrderById);

//  Atualiza pedido pelo Id: (PUT): localhost:4000/api/pedidos/:id
router.put('/pedidos/:id', orderController.updateOrderById);

//  Excluir pedido pelo Id: (DELETE): localhost:4000/api/pedidos/:id
router.delete('/pedidos/:id', orderController.deleteOrderById);

module.exports = router;
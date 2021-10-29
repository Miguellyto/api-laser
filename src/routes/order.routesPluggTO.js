const router = require('express-promise-router')();
const orderControllerPluggTO = require('../controllers/order.controllerPluggTO');

//  Lista todos os pedido: (GET): localhost:5000/api/order
router.get('/order', orderControllerPluggTO.listAllOrders);

//  Lista pedido pelo Id: (GET): localhost:5000/api/order/:id
router.get('/order/:id', orderControllerPluggTO.findOrderById);

//  Atualiza pedido pelo Id: (PUT): localhost:5000/api/order/:id
router.put('/order/:id', orderControllerPluggTO.updateOrderById);

// ==> Rota responsável por criar um novo pedido: (POST): localhost:5000/api/order
router.post('/order', orderControllerPluggTO.createOrder);

////-----////
//  Excluir pedido pelo Id: (DELETE): localhost:5000/api/order/:id
router.delete('/order/:id', orderControllerPluggTO.deleteOrderById);

module.exports = router;
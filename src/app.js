const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API:
const index = require('./routes/index');
const productRoute = require('./routes/product.routes');
const orderRoute = require('./routes/order.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//
app.use((req, res, next) => {
    //console.log("Acessou o Middleware!");
    res.header("Access-Control-Allow-Origin", "*");//http://localhost:8080
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST');
    //res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    //res.header("Access-Control-Allow-Headers", "OPTIONS,Accept,Authorization, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Header");
    app.use(cors());
    next();
});
//
app.use(express.json({ type: 'application/vnd.api+json' }));

app.use(index);
app.use('/', productRoute);
app.use('/', orderRoute);

app.use((req, res, next) => {
    const erro = new Error('Servidor Não Encontrado.');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;
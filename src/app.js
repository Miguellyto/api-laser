const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API:
const index = require('./routes/index');
const productRoute = require('./routes/product.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//
app.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin', 'http://localhost:8080/'); //Aqui onde seta o srv(endPont) espercifico no lugar do '*'. Esta API só seria acesivel deste srv.
    res.header(//propriedade de cabeçalho aceita na API
        'Acces-Control-Allow-Origin', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
     ); 

     if (req.method === 'OPTIONS'){
         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
         return res.status(200).send({});
     }

     next();
});
//
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', productRoute);

module.exports = app;
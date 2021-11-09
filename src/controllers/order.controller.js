const db = require("../config/database");
const request = require('request');
// const axios = require("axios").default;

////Get One Order For ID ---OK
exports.findOrderById = async (req, res) => {
  const { id } = req.params;
  /* const { id, title } = req.body; */

  if (!req.params.id) { 
    res.status(500); 
    res.send({"Error": "No ID"}); 
 } 

  const options = {
    method: 'GET',
    // url: `https://api.plugg.to/orders/${id}`,
    // url: "https://jsonplaceholder.typicode.com/posts/" + req.params.id, 
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer {ACCESS_TOKEN}',
      'Content-Type': 'application/json'
    }
  };

    request(options, (error, response, body) => { 

        if (!error && response.statusCode == 200) { 
            //obter dados do corpo ... por exemplo título+ID
            const data = JSON.parse(body);
            const title = data.title || '';
            const id = data.id || '';

            // Conn Postgresql
            (async () => {

              const { rows } = await db.query('INSERT INTO titles(id, title) values($1, $2)', 
              [id, title])

                  res.json({
                  message: 'Pedido Criado com Successo',
                  body: {
                    order: { id, title }
                  },
                });
                          
            })().catch(err =>
              setImmediate(() => {throw new err(err)})
            )
        } 
    }
); 
};

// Get All Orders
exports.listAllOrders = async () => {
  const options = {
  method: 'GET',
  url: 'http://jsonplaceholder.typicode.com/users',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer {ACCESS_TOKEN}',
    'Content-Type': 'application/json'
  }
};
request(options, (error, response, body) => {
  if (error) throw new Error(error);

  console.log(body);
  
});
};

////Status Update Order

////----Order receipt confirmation----////

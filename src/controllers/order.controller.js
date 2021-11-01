//const db = require("../config/database");
//const fetch = require('node-fetch');
const { default: axios } = require('axios');

// Get All Orders
exports.listAllOrders = async (req, res) => {
try {
  const { data } = await axios.get('http://jsonplaceholder.typicode.com/users');
  return res.send({ data });

} catch (error) {
  res.send({ error: error.message});
}
};

// Get One Order For ID
exports.findOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);
    return res.send({ data });

  } catch (error) {
    res.send({ error: error.message});
  }
  };

  // Create Order PluggTO on DataBase
exports.createOrder = async (req, res) => {
  const { id_produto, quantidade } = req.body;
  const { rows } = await db.query(
    'INSERT INTO orders (id_produto, quantidade) VALUES ($1, $2)',
    [id_produto, quantidade],
  );

  res.status(201).send({
    message: 'Pedido Criado com Successo',
    body: {
      order: { id_produto, quantidade }
      
    },
  });
};
///

/* export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/search",
  headers: {
    Authorization:
      "Bearer ..."
  }
}); */

/* axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.defaults.headers.authorization = `Bearer ${token}`; */

/* 
////Get All Orders
exports.listAllOrders = async (req, res) => {
  const url = 'https://api.plugg.to/orders';
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer {ACCESS_TOKEN}',
      'Content-Type': 'application/json'
    }
  };
  fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
};

////Get One Order For ID
exports.findOrderById = async (req, res) => {
//const url = 'https://api.plugg.to/orders';
const url = 'https://api.plugg.to/orders/plugg_order_id';
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer {ACCESS_TOKEN}',
    'Content-Type': 'application/json'
  }
};
  fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
}; 

////Status Update Order
exports.updateOrderById = async (req, res) => {  
  const url = 'https://api.plugg.to/orders/plugg_id';
  const options = {
    method: 'PUT',
    headers: {
    Accept: 'application/json',
    Authorization: 'Bearer {ACCESS_TOKEN}',
    'Content-Type': 'application/json'
  }
};
  fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
};


////----Order receipt confirmation----////
exports.createOrder = async (req, res) => { 
const url = 'https://api.plugg.to/orders/plugg_id_order';
const options = {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer {ACCESS_TOKEN}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({external: 'external id', ack: true})
};
  fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
};
 */
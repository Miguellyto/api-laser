const db = require("../config/database");
//const fetch = require('node-fetch');

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

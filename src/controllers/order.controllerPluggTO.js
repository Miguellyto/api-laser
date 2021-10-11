////Get One Order For ID
const fetch = require('node-fetch');

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

////Get All Orders
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

////Status Update Order  
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

////Order receipt confirmation
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

////Update invoice (Fatura)
const url = 'https://api.plugg.to/orders/pluggto_order_id';
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

////Update invoices by documents (Atualizar faturas por documentos)
const url = 'https://api.plugg.to/orders/plugg_order_id';
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

////Update Order Tracking Status (Rastreio)
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

////Get Labels
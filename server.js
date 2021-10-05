const app = require('./src/app');

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('API LASER Executando na Porta ', port);
});

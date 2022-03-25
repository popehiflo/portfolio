const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json('Hola, respondo a GET /');
});

app.listen(3000, () => {
  console.log('Server corriendo...');
});
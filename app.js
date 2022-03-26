require('dotenv').config();

const express = require('express');

const configExpress = require('./configuration/express');
const connectionDB = require('./configuration/database');
const routes = require('./routes');

const app = express();

connectionDB();
configExpress(app);
routes(app);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

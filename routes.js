/**
 * Main application routes
 */
const authLocal = require('./auth/local');
const user = require('./api/user');
const cart = require('./api/cart');
const order = require('./api/order');
const service = require('./api/service');
const speciality = require('./api/speciality');

function routes(app) {
  // Auth Routes
  app.use('/auth/local', authLocal);

  // API Routes
  app.use('/api/users', user);
  app.use('/api/carts', cart);
  app.use('/api/orders', order);
  app.use('/api/services', service);
  app.use('/api/specialities', speciality);
}

module.exports = routes;

/**
 * Main application routes
 */
const authLocal = require('./auth/local');
const user = require('./api/user');
const speciality = require('./api/speciality');

function routes(app) {
  // auth Routes
  app.use('/auth/local', authLocal);

  // API Routes
  app.use('/api/users', user);
  app.use('/api/specialities', speciality);
}

module.exports = routes;

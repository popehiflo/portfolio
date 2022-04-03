const { Router } = require('express');
const { handlerSignUpUser } = require('./local.controller');

const router = Router();

router.post('/signup', handlerSignUpUser);

module.exports = router;

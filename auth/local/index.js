const { Router } = require('express');
const { handlerRegisterUser } = require('./local.controller');

const router = Router();

router.post('/register', handlerRegisterUser);

module.exports = router;

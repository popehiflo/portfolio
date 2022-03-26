const { Router } = require('express');
const { handlerAllUser } = require('./user.controller');

const router = Router();

router.get('/', handlerAllUser);

module.exports = router;

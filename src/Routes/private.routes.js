const { Router } = require('express'),
      { private } = require('../Controllers/private.controller'),
      { checkToken } = require('../Midleware/auth.token');

const privateRoutes = Router();


privateRoutes.get('/users/:id', checkToken, private);


module.exports = { privateRoutes };
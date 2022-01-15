const { Router } = require('express'),
      { register, login } = require('../Controllers/auth.controllers'),
      { checkToken } = require('../Midleware/auth.token');

const routes = Router();

routes.post('/auth/register', register);
routes.post('/auth/login', checkToken, login);


module.exports = { routes }
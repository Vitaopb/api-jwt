const { Router } = require('express');
const { register } = require('../Controllers/auth.controllers');

const routes = Router();

routes.post('/auth/register', register);


module.exports = { routes }
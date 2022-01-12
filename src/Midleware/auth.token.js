const { Request, Response } = require('express'),
      jwt = require('jsonwebtoken'),
      { secret } = require('../Controllers/auth.controllers');


function checkToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if(!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    jwt.verify(token, secret);

    next()
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
}

module.exports = { checkToken }
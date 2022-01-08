const { Request, Response } = require('express');
const { UserModel } = require('../Models/User');



async function register(req, res) {
  const { name, email, password, confirmpassword } = req.body;

  // validations
  if(!name) {
    return res.status(422).json({
      message: 'Name is required'
    })
  }

  if(!email) {
    return res.status(422).json({
      message: 'Email is required'
    })
  }

  if(!password) {
    return res.status(422).json({
      message: 'Password is required'
    })
  }
}

module.exports = { register };
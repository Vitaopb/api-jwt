const { Request, Response } = require('express'),
      { UserModel } = require('../Models/User');

async function private(req, res) {
  const id = req.params.id

  // check if user exists
  const user = await UserModel.findById(id, '-password');
  if(!user) {
    return res.status(404).json({
      message: 'User not found'
    })
  }

  res.status(200).json({ user })
}


module.exports = { private }
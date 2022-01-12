const { Request, Response } = require('express'),
      { UserModel } = require('../Models/User'),
      bcrypt = require('bcrypt'),
      jwt = require('jsonwebtoken');

async function register(req, res) {
  const { name, email, password, confirmpassword } = req.body;

  // validations
  if(!name || !email || !password || !confirmpassword) {
    return res.status(422).json({
      message: 'All fields are required'
    })
  }

  if(password !== confirmpassword) {
    return res.status(422).json({
      message: 'Passwords do not match'
    })
  }

  // check if user already exists 
  const userExists = await UserModel.findOne({ email });
  if(userExists) {
    return res.status(422).json({
      message: 'User already exists'
    })
  }

  // create password
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create user
  const user = new UserModel({
    name,
    email,
    password: hashedPassword
  });

  try {
    await user.save();

    const secret = process.env.SECRET_ENV;
    const token = jwt.sign({
        userId: user._id
      }, secret);
    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
}


// Login user
async function login(req, res) {
  // validations
  const { email, password } = req.body;
  if(!email || !password) {
    return res.status(422).json({
      message: 'All fields are required'
    })
  }
  
  // check if user exists
  const user = await UserModel.findOne({ email });
  if(!user) {
    return res.status(422).json({
      message: 'User does not exist'
    })
  }
  else{
    // check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
      return res.status(422).json({
        message: 'Password does not match'
      })
    }
    
    try {
      
      res.status(200).json({
        message: 'Login successful'
      });
    } catch (error) {
      console.warn(error);
    }
  }

}

module.exports = { register, login, secret };
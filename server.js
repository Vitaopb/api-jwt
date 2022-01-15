require('dotenv').config();
const express = require('express'),
      { connectMongodb } = require('./src/dbconfig/mongoose.config.js'),
      { routes } = require('./src/Routes/auth.routes.js'),
      { privateRoutes } = require('./src/Routes/private.routes.js');

const app = express()

const { SERVER_PORT } = process.env;


// Config JSON response
app.use(express.json());

// Connect to MongoDB
connectMongodb()

// Routes
app.use(routes)
app.use(privateRoutes)

app.listen(SERVER_PORT, () => console.log('API started!'))

module.exports = app
 
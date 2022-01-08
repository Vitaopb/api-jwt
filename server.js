const express = require('express')
const { connectMongodb } = require('./src/dbconfig/mongoose.config.js');
const { routes } = require('./src/Routes/auth.routes.js');

const app = express()

// Config JSON response
app.use(express.json());

// Connect to MongoDB
connectMongodb()

// Routes
app.use(routes)

app.listen(3000, () => console.log('API started!'))

module.exports = app
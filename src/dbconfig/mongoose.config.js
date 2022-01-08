const { connect } = require('mongoose');
require('dotenv').config();

const dbUser = 'root';
const dbPassword = '1234';

console.log(typeof dbUser, dbPassword);

async function connectMongodb() {
  try {
    await connect(`mongodb://${dbUser}:${dbPassword}@localhost:27017`);
    console.log('MONGODB is connected');
  } catch (error) {
    console.log(`MONGODB fail connection, error: ${error}`);
  }
}

module.exports = { connectMongodb };
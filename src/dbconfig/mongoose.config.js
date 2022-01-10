const { connect } = require('mongoose');

const dbUser = 'root';
const dbPassword = '1234';

async function connectMongodb() {
  try {
    await connect(`mongodb://${dbUser}:${dbPassword}@localhost:27017`);
    console.log('MONGODB is connected');
  } catch (error) {
    console.log(`MONGODB fail connection, error: ${error}`);
  }
}

module.exports = { connectMongodb };
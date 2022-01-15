const { connect } = require('mongoose');


const { DB_USER, DB_PASS, DB_PORT } = process.env;

async function connectMongodb() {
  try {
    await connect(`mongodb://${DB_USER}:${DB_PASS}@localhost:${DB_PORT}`);
    console.log('MONGODB is connected');
  } catch (error) {
    console.log(`MONGODB fail connection, error: ${error}`);
  }
}

module.exports = { connectMongodb };
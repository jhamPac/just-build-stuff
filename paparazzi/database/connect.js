const chalk = require('chalk')
const mongoose = require('mongoose')

// set up
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
  console.log(chalk.yellow('[Success]: database connected'))
})

mongoose.connection.on('error', (error) => {
  console.log(chalk.red(`[Error]: ${error}`))
})

const connectDB = () => {
  mongoose.connect('mongodb://localhost:27017/paparazziDB', { useMongoClient: true });
}

module.exports = {
  connectDB: connectDB
}

const chalk = require('chalk')
const mongoose = require('mongoose')
const User = require('./User')

// set up
require('dotenv').config()
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
  console.log(chalk.yellow('[Success]: database connected'))
})

mongoose.connection.on('error', (error) => {
  console.log(chalk.red(`[Error]: ${error}`))
})

const connectDB = () => {
  mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, { useMongoClient: true })
}

const getAccessToken = async (username = 'sknyft') => {
  let igUser = await _getUser(username)
  let token = igUser.access_token
  return token
}

const _getUser = (username) => {
  return User.find({'username': 'sknyft'})
    .exec()
    .then((user) => user.shift())
    .catch((error) => {
      console.log(chalk.red(`Error ${error}`))
      process.exit(1)
    })
}

module.exports = {
  connectDB,
  getAccessToken
}

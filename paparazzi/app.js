// dependecies
const chalk = require('chalk')
const puppeteer = require('puppeteer')
const User = require('./database/User')
const instagramAPI = require('instagram-node').instagram()

// config
require('dotenv').config()

// database
const db = require('./database/connect')
db.connectDB(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, { useMongoClient: true })

User.find({'username': 'sknyft'}, (error, user) => {
  if (error) {
    console.log(chalk.red(`Error ${error}`))
    process.exit(1)
  }

  let igUser = user.shift()
  console.log(igUser.access_token)

})

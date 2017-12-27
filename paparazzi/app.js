// dependecies
const chalk = require('chalk')
const puppeteer = require('puppeteer')
const instagramAPI = require('instagram-node').instagram()

// config
require('dotenv').config()

// database
const db = require('./database/connect')

const fireApp = async () => {
  db.connectDB()

  let userID = await db.getUserID()
  let accessToken = await db.getAccessToken()

  instagramAPI.use({
    access_token: accessToken
  })

  instagramAPI.user_media_recent(
    userID,
    (err, result, pagination, remaining, limit) => {
      if (err) {
        console.log(chalk.red(`Error ${err}`))
        process.exit(1)
      }
      console.log(result)
    })
}

fireApp()

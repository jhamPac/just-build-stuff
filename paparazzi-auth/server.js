const express = require('express')
const morgan = require('morgan')
const chalk = require('chalk')
const db = require('./database.js')
const puppeteer = require('puppeteer')
var instagramAPI = require('instagram-node').instagram()
const app = express()

// config
require('dotenv').config()

app.use(morgan('dev'))
db.connectDB(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, { useMongoClient: true })

instagramAPI.use({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
})

app.get('/', (request, response) => {
  response.send('Server is working')
})

app.get('/login', (request, response) => {
  response.redirect(
    instagramAPI.get_authorization_url(process.env.REDIRECT_URI, { scope: ['basic'] })
  )
})

app.get('/auth', (request, response) => {
  let { code } = request.query
  instagramAPI.authorize_user(
    code,
    process.env.REDIRECT_URI,
    (error, result) => {
      if (error) response.send(error)
      console.log(result)
      process.exit(1)
    }
  )
})

app.listen(3000)
console.log(chalk.blue('Server is listening on port 3000'))

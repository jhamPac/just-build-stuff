const express = require('express')
const morgan = require('morgan')
const chalk = require('chalk')
const db = require('./database.js')
const puppeteer = require('puppeteer')
const axios = require('axios')
const app = express()

// config
require('dotenv').config()

app.use(morgan('dev'))
db.connectDB(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, { useMongoClient: true })

app.get('/', (request, response) => {
  response.send('Server is working')
})

app.get('/auth', (request, response) => {
  response.send(`Your token is ${request.query.code}`)
})

app.get('/login', (request, response) => {
  response.redirect(`${process.env.GRAM_AUTH_URL}`)
})

app.listen(3000)
console.log(chalk.blue('Server is listening on port 3000'))

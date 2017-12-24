// dependecies
const chalk = require('chalk')
const morgan = require('morgan')
const express = require('express')
const puppeteer = require('puppeteer')
const instagramAPI = require('instagram-node').instagram()

// config
require('dotenv').config()

// database
const db = require('./database/connect')
db.connectDB(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, { useMongoClient: true })

// routes
let authRoute = require('./routes/auth')
let loginRoute = require('./routes/login')

// server
const app = express()
app.use(morgan('dev'))
app.get('/', (request, response) => {
  response.send('Server is working')
})
app.use('/auth', authRoute)
app.use('/login', loginRoute)

app.listen(3000)
console.log(chalk.blue('Server is listening on port 3000'))

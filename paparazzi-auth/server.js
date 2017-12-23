const express = require('express')
const morgan = require('morgan')
const chalk = require('chalk')
const db = require('./database.js')
const app = express()

// config
require('dotenv').config()

app.use(morgan('dev'))
db.connectDB(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, { useMongoClient: true })

app.get('/', (request, response) => {
  response.send('Server is working')
})

app.listen(3000)
console.log(chalk.blue('Server is listening on port 3000'))

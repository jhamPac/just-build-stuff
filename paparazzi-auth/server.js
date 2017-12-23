const express = require('express')
const chalk = require('chalk')
const app = express()

app.get('/', (request, response) => {
  response.send('Server is working')
})

app.listen(3000)
console.log(chalk.blue('Server is listening on port 3000'))

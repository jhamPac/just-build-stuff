const express = require('express')
const morgan  = require('morgan')

const app = express()

app.use(morgan('dev'))

app.get('/', (request, response) => {
  response.send('Hello World this is great')
})

app.listen(3000)
console.log('App is listening on port 3000')

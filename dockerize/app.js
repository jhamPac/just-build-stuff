const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('Hello World this is great')
})

app.listen(3000)
console.log('App is listening on port 3000')

console.log('Starting application')

const fs = require('fs')

fs.appendFile('helloworld.txt', 'Hello Alice and Bob', (err) => {
  if (err) console.log(`Error: ${err}`)
})

console.log('Starting application')

const fs = require('fs')
const os = require('os')

let user = os.userInfo()

fs.appendFile('helloworld.txt', `Hello ${user.username}`, (err) => {
  if (err) console.log(`Error: ${err}`)
})

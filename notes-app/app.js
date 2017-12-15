console.log('Starting application')

const fs = require('fs')
const os = require('os')
const _ = require('lodash')
const notes = require('./notes.js')

let user = os.userInfo()
let sum = notes.add(5, 5)

console.log(sum)
console.log(_.isString(true))

fs.appendFile('helloworld.txt', `Hello ${user.username}`, (err) => {
  if (err) console.log(`Error: ${err}`)
})

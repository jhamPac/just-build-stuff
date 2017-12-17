const fs = require('fs')
const _ = require('lodash')
const chalk = require('chalk')

const notes = require('./notes.js')

let command = (process.argv[2] === undefined) ? null :  process.argv[2].toLowerCase()
console.log(`Command is: ${command}`)

if (command === 'add') {
  console.log('adding to list')
} else if (command === 'list') {
  console.log('displaying list')
} else if (command === 'read') {
  console.log('read what')
} else if (command === 'remove') {
  console.log('remove what')
} else {
  console.log(chalk.red(`Command: ${command} is unrecognizable`))
}

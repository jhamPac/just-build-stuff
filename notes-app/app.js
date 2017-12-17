const fs = require('fs')
const _ = require('lodash')
const chalk = require('chalk')
const yargs = require('yargs')

const notesApi = require('./notes.js')

let { _: command, title, body} = yargs.argv
command = command.shift()

if (command === 'add') {
  notesApi.addNote(title, body)
} else if (command === 'list') {
  console.log('displaying list')
} else if (command === 'read') {
  console.log('read what')
} else if (command === 'remove') {
  console.log('remove what')
} else {
  console.log(chalk.red(`Command: ${command} is unrecognizable`))
}

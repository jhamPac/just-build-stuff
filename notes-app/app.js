const fs = require('fs')
const _ = require('lodash')
const chalk = require('chalk')
const yargs = require('yargs')

const notesApi = require('./notes.js')

// config yargs
require('./yargsConfig')

let { _: command, title, body} = yargs.argv
command = command.shift()

switch (command) {
  case 'add':
    notesApi.addNote(title, body)
    break
  case 'list':
    notesApi.listNotes()
    break
  case 'read':
    notesApi.findNote(title)
    break
  case 'remove':
    notesApi.removeNote(title)
    break
  default:
    console.log(chalk.red(`Command: ${command} is unrecognizable`))
}

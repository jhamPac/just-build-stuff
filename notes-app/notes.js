const fs = require('fs')
const chalk = require('chalk')

const NOTES_FILE_NAME = 'notes-data.json'

const addNote = (title, body) => {
  let newNote = {
    title,
    body
  }

  let notes = _getNotes(NOTES_FILE_NAME)
  let updatedNotes = notes.concat(newNote)

  fs.writeFileSync(NOTES_FILE_NAME, JSON.stringify(updatedNotes))
}

_getNotes = (fileName) => {
  let notes;

  try {
    let stringData = fs.readFileSync(fileName)
    notes = JSON.parse(stringData)
  } catch (e) {
    console.log(chalk.red(`Oops no such file called: ${fileName}\nCreating now...`))
    notes = []
  }
  return notes
}

module.exports = {
  addNote
}

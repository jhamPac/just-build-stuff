const fs = require('fs')
const chalk = require('chalk')

const NOTES_FILE_NAME = 'notes-data.json'

const addNote = (title, body) => {
  let newNote = {
    title,
    body
  }

  let notes = _getNotes(NOTES_FILE_NAME)
  let isDuplicate = _checkForDuplicate(title)

  if (isDuplicate) {
    console.log(chalk.red(`Sorry the title ${title} is a duplicate please choose another title`))
    process.exit(1)
  } else {
    let updatedNotes = notes.concat(newNote)
    _saveNotes(updatedNotes)
  }
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

_checkForDuplicate = (title) => {
  let notes = _getNotes(NOTES_FILE_NAME)
  let result = notes.filter((note) => note.title === title)

  if (result.length > 0) {
    return true
  }
  return false
}

_saveNotes = (notes) => {
  fs.writeFileSync(NOTES_FILE_NAME, JSON.stringify(notes))
  console.log(chalk.blue(`Note saved successfully`))
}

module.exports = {
  addNote
}

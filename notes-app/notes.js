const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  let newNote = {
    title,
    body
  }

  let notes = _getNotes('notes-data.json')
  let updatedNotes = notes.concat(newNote)

  fs.writeFileSync('notes-data.json', JSON.stringify(updatedNotes))
}

_getNotes = (fileName) => {
  let stringData = fs.readFileSync(fileName)
  let notes = JSON.parse(stringData)
  return notes
}

module.exports = {
  addNote
}

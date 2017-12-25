const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  let note = {
    title,
    body
  }

  let noteString = fs.readFileSync('notes-data.json')
  let notes = JSON.parse(noteString)
  let updatedNotes = notes.concat(note)
  
  fs.writeFileSync('notes-data.json', JSON.stringify(updatedNotes))
}

module.exports = {
  addNote
}

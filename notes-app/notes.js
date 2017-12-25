const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  let notes = []
  let note = {
    title,
    body
  }

  let updatedNotes = notes.concat(note)
  fs.writeFileSync('notes-data.json', JSON.stringify(updatedNotes))
}

module.exports = {
  addNote
}

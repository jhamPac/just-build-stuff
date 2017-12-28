const yargs = require('yargs')

const titleOptons = {
  describe: 'The title of the note',
  demand: true
}

const bodyOptions = {
  describe: 'The body of the note',
  demand: true
}

yargs
.command(
  'add',
  'Adds a new note',
  {
    title: titleOptons,
    body: bodyOptions
  }
)
.command(
  'list',
  'Lists all notes out to standard output'
)
.command(
  'read',
  'Read note of provided title',
  {
    title: titleOptons
  }
)
.command(
  'remove',
  'Remove note of provided title',
  {
    title: titleOptons
  }
)
.help()

const chalk = require('chalk')

const addNote = (title, body) => {
  console.log(chalk.yellow(title, body))
}

module.exports = {
  addNote
}

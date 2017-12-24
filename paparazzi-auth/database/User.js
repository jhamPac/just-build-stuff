const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userBluePrint = new Schema({
  id: String,
  username: String,
  full_name: String,
  bio: String,
  website: String,
  profile_picture: String,
  access_token: String
})

module.exports = mongoose.model('User', userBluePrint)

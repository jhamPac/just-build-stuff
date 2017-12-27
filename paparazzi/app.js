// dependecies
const chalk = require('chalk')
const puppeteer = require('puppeteer')
const instagramAPI = require('instagram-node').instagram()

// config
require('dotenv').config()

// database
const db = require('./database/connect')
db.connectDB()

let accessToken = Promise.all([db.getAccessToken()]).then((r) => console.log(r))
console.log(accessToken)

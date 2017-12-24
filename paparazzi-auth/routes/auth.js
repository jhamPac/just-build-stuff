const express = require('express')
const router = express.Router()
const instagramAPI = require('instagram-node').instagram()

instagramAPI.use({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
})

router.get('/', (request, response) => {
  let { code } = request.query
  instagramAPI.authorize_user(
    code,
    process.env.REDIRECT_URI,
    (error, result) => {
      if (error) response.send(error)
      console.log(result)
      process.exit(1)
    }
  )
})

module.exports = router

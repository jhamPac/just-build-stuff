const express = require('express')
const router = express.Router()
const instagramAPI = require('instagram-node').instagram()

instagramAPI.use({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
})

router.get('/', (request, response) => {
  response.redirect(
    instagramAPI.get_authorization_url(process.env.REDIRECT_URI, { scope: ['basic'] })
  )
})

module.exports = router

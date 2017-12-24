const express = require('express')
const router = express.Router()
const instagramAPI = require('instagram-node').instagram()
const User = require('../database/User')

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

      let { access_token, user } = result
      let data = {
        id: user.id,
        username: user.username,
        full_name: user.full_name,
        bio: user.bio,
        website: user.website,
        profile_picture: user.profile_picture,
        access_token: access_token
      }

      User.create(data, (err, instance) => {
        if (err) res.send(err)
        console.log(instance)
        response.redirect('/')
      })
    }
  )
})

module.exports = router

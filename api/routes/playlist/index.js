const { Router } = require('express')
const info = require('./playlist.js')

const router = Router()

router.get('api/playlist', async (req, res) => {
  const param = req.query.link
  const playlist = await info.getInfo(param)
  res.json({ info: playlist })
})

module.exports = router

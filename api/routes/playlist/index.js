const { Router } = require('express')
const info = require('./playlist.js')

const router = Router()

router.get('/playlist', async (req, res) => {
  const param = req.query.link
  console.log(req)
  const playlist = await info.getInfo(param)
  res.json({ info: playlist })
})

module.exports = router

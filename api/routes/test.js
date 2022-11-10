const { Router } = require('express')

const router = Router()

router.get('/test', async (req, res) => {
  await res.json('Test API!')
})

module.exports = router

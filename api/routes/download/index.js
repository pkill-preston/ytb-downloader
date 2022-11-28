const { Router } = require('express')
const yt = require('yt-converter')

const router = Router()

router.get('/download', (req, res) => {
  const songID = req.query.songId
  const songTitle = req.query.songTitle
  console.log('here is title:', songTitle)
  console.log('here is id:', songID)
  yt.getInfo(`https://www.youtube.com/watch?v=${songID}`).then((info) => {
    const array = info.formats.find((element, index) => Math.max(element.audioBitrate))
    yt.convertAudio({
      url: `https://www.youtube.com/watch?v=${songID}`,
      itag: array.itag,
      directoryDownload: './songs',
      title: songTitle
    })
  })
  res.json({ id: songID, title: songTitle })
})

module.exports = router

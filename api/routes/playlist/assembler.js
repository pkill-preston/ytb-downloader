const info = require('./playlist.js')
// const video = require('./videos.js')

function urlValidator (url) {
  if (url.includes('watch')) {
    return url.match(/(?<=v=).*?(?=&)|(?<=v=).*/g)
  } else if (url.includes('v=') && url.includes('list=')) {
    return url.match(/(?<=v=).*?(?=&)|(?<=v=).*/g)
  } else {
    return url.match(/(?<=list=).*?(?=&)|(?<=list=).*/g)
  }
}

async function playlistDownloader (url) {
  const parsedUrl = urlValidator(url)
  console.log(parsedUrl)
  const playlist = info.getInfo(parsedUrl)
  for (const item of playlist.items) {
    try {
      console.log(item)
      const title = item.title
      console.log('Started downloading: ', title)
      // await video.videoConvert(item.id, `${title}`)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = playlistDownloader()

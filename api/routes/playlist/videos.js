const youtubeMp3Converter = require('youtube-mp3-converter')

exports.videoConvert = async function videoConvert (videoId, title) {
  const convertLinkToMp3 = youtubeMp3Converter('./songs/')
  await convertLinkToMp3(videoId, {
    title
  })
}

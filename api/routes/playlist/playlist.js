const axios = require('axios')

exports.getInfo = async function getInfo (playlistUrl) {
  const items = []
  const playlist = {}
  const playlistInfo = await axios(`https://youtube.googleapis.com/youtube/v3/playlists?id=${playlistUrl}&key=AIzaSyDidjizx-ASnTOJQy-mnKn-jjcmFkAYtus&part=id,snippet,contentDetails`).then((data) => {
    return { title: data.data.items[0].snippet.title, thumbnail: data.data.items[0].snippet.thumbnails.maxres.url, author: data.data.items[0].snippet.channelTitle, size: data.data.items[0].contentDetails.itemCount }
  })
  playlist.title = playlistInfo.title
  playlist.thumbnail = playlistInfo.thumbnail
  playlist.author = playlistInfo.author
  playlist.size = playlistInfo.size

  let pageToken = ''
  while (items.length !== playlistInfo.size) {
    try {
      await axios(`https://youtube.googleapis.com/youtube/v3/playlistItems?maxResults=50&playlistId=${playlistUrl}&key=AIzaSyDidjizx-ASnTOJQy-mnKn-jjcmFkAYtus&part=id,snippet,contentDetails&pageToken=${pageToken}`).then((data) => {
        data.data.items.forEach((element) => {
          const id = element.contentDetails.videoId
          const etag = element.etag
          const title = element.snippet.title
          const description = element.snippet.description
          const thumbnail = element.snippet.thumbnails.standard?.url ?? `${element.snippet.title}`
          items.push({
            title,
            description,
            thumbnail,
            id,
            etag
          })
        })
        pageToken = data.data?.nextPageToken
      })
    } catch (e) {
      console.log(e)
    }
  }
  return { items, info: playlist }
}

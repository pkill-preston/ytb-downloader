const { getInfo } = require('ytdl-getinfo');
const youtubeMp3Converter = require('youtube-mp3-converter')


async function playlistDownloader(url) {
    const convertLinkToMp3 = youtubeMp3Converter('./songs/')

    const parsedUrl = url.match(/(?<=list=).*?(?=&)|(?<=list=).*/g)
    await getInfo(url).then(info => {
        // info.partial is true for playlists
        if (info.partial) {
            info.on('video', async v => {
                try{
                    console.log('Downloading: ',v.title)
                    await convertLinkToMp3(v.webpage_url)
                }catch (e){
                    console.log(e)
                }
            })
            info.on('done', () => console.log(`Playlist contains ${info.items.length} items.`))
        }
    })
}

playlistDownloader(process.argv.slice(2)[0])



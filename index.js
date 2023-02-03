const info = require('./getInfo.js')
const yt = require('yt-converter')

function urlValidator(url){
    if(url.includes("watch")){
        return url.match(/(?<=v=).*?(?=&)|(?<=v=).*/g);
    }else if(url.includes("v=") && url.includes("list=")){
        return url.match(/(?<=v=).*?(?=&)|(?<=v=).*/g);
    }else{
        return url.match(/(?<=list=).*?(?=&)|(?<=list=).*/g);
    }
}

async function playlistDownloader(url) {
    let parsedUrl = urlValidator(url)
    playlist = await info.getInfo(parsedUrl)
    let index = 1
    for (let item of playlist.items){
        yt.getInfo(`https://www.youtube.com/watch?v=${item.id}`).then((info) => {
            const array = info.formats.find((element, index) => Math.max(element.audioBitrate))
            console.log('Downolading: ', item.title)
            console.log(`Item ${index} out of ${playlist.items.length - 1}`)
            yt.convertAudio({
                url: `https://www.youtube.com/watch?v=${item.id}`,
                itag: array.itag,
                directoryDownload: './songs',
                title: item.title
            })
            index++
        })
    }
}
playlistDownloader(process.argv.slice(2)[0])

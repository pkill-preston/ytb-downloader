const info = require('./playlist.js')
const video = require('./videos.js')

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
    console.log(parsedUrl)
    playlist = await info.getInfo(parsedUrl)
    let index = 0
    for (let item of playlist.items) {
        index++
        try{
            let title = item.title
            console.log('Started downloading: ',item.title)
            await video.videoConvert(item.id,`${item.title}`)
        }catch (e) {
            console.log(e)
        }
    }

}
playlistDownloader(process.argv.slice(2)[0])

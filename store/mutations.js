export default {
  setPlaylistInfo (state, playlistInfo) {
    state.playlistInfo = []
    const info = { ...playlistInfo }
    state.playlistInfo.push(info)
  }
}

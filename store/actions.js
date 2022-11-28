export default {
  async getPlaylistInfo ({ commit }, url) {
    const info = await this.$axios.$get(`api/playlist?link=${url}`)
    commit('setPlaylistInfo', info)
  },
  async downloadVideo ({ commit }, songInfo) {
    console.log('here', songInfo)
    const songTitle = songInfo.title
    const songID = songInfo.id
    await this.$axios.$get(`api/download?songId=${songID}&songTitle=${songTitle}`)
  }
}

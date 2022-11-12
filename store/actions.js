export default {
  async getPlaylistInfo ({ commit }, url) {
    const info = await this.$axios.$get(`api/playlist?link=${url}`)
    commit('setPlaylistInfo', info)
  }
}

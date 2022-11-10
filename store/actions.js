export default {
  async getPlaylistInfo ({ commit }, url) {
    const info = await this.$axios.$get(`/playlist?link=${url}`)
    commit('setPlaylistInfo', info)
  }
}

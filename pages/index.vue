<template>
  <div class="container">
    <HomeGreeter />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import HomeGreeter from '~/components/HomeGreeter/HomeGreeter'
export default {
  components: { HomeGreeter },
  async asyncData ({ $axios }) {
    const ip = await $axios.get('test')
    return { ip }
  },
  computed: {
    ...mapActions(['getPlaylistInfo'])
  },
  created () {
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

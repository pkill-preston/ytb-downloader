<template>
  <div class="container">
    <Logo class="logo" />
    <HomeGreeter />
  </div>
</template>

<script>
import HomeGreeter from '@/components/HomeGreeter/HomeGreeter'

export default {
  components: { HomeGreeter },
  async asyncData ({ $axios }) {
    const ip = await $axios.$get('/test')
    return { ip }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
}
.logo{
  margin: 0;
  padding: 0;
}
</style>

<template>
  <div class="container">
    <div class="cover">
      <img class="thumbnail" :src="cover" alt="">
    </div>
    <div class="info">
      <h1 class="text">Title: {{ title }}</h1>
      <h1 class="text">Videos: {{ videoAmount }}</h1>
      <h1 class="text">Author: {{ author }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    cover: String,
    title: String,
    videoAmount: String,
    author: String
  }
}
</script>

<style scoped>
.container{
  width: 80%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
}

.cover{
  width: 40%;
}

.thumbnail{
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.info{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem
}

.text{
  text-align: left;
}
</style>

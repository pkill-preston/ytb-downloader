<template>
  <button v-bind="$attrs" @click="action" >{{ text }}</button>
</template>

<script>
export default {
  name: 'DefaultButton',
  props: {
    text: String,
    action: String
  }
}
</script>

<style scoped>
button{
  background-color: #4BB3FD;
  border: 1px solid #00487C;
  border-radius: 15px;
  font-size: 1.3rem;
  padding: 1rem;
}
</style>

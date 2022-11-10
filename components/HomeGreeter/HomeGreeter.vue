<template>
  <div class="greeter wrapper">
  <FormInput v-model="event.title" label="Opa" placeholder="Insert your URL here" type="text" />
    <InfoCard cover="https://i.ytimg.com/vi/LVB2N0bOUi8/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4Ac4FgALQBYoCDAgAEAEYaSBpKGkwDw==&rs=AOn4CLBb3gSCi-tFtXSt4rOhWX77n-vmHQ" title=" SET DERRUBA BAILE 😈👽🧨🎭🍃🔥" author="Just Presto" video-amount="59"/>
    <div class="buttons wrapper">
      <DefaultButton text="Playlist" />
      <DefaultButton text="Video" />
    </div>
  </div>
</template>

<script>
import DefaultButton from '@/components/DefaultButton/DefaultButton'
import FormInput from '@/components/FormInput/FormInput'
import InfoCard from '@/components/InfoCard/InfoCard'

export default {
  name: 'HomeGreeter',
  components: {
    DefaultButton,
    InfoCard,
    FormInput
  },
  data () {
    return {
      variable: 0,
      url: '',
      event: {
        title: ''
      }
    }
  }
}
</script>

<style scoped>
.greeter{
  max-width: 81rem;
  width: 100%;
  min-height: 24rem;
  max-height: 36rem;
  height: 100%;
  background-color: #027BCE;
  border: 1px solid #00487C;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.buttons.wrapper{
  max-width: 20%;
  width: 100%;
  display: flex;
}
</style>

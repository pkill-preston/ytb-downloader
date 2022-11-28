<template>
  <div class="greeter wrapper">
    <FormInput ref="inputField" v-model="event.title" label="Opa" placeholder="Insert your URL here" type="text" />
    <InfoCard
      v-for="(item, index) in $store.state.playlistInfo[0]"
      :key="index"
      ref="playlistCard"
      :author="item.info.author"
      :cover="item.info.thumbnail"
      :title="item.info.title"
      :video-amount="item.info.size"
      class="card"
    />
    <div class="buttons wrapper">
      <DefaultButton class="button" text="Submit" :action="getURL" />
      <DefaultButton v-if="change === 1" class="button" text="Download" :action="downloadPlaylist" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
      change: 0,
      url: '',
      event: {
        title: ''
      }
    }
  },
  methods: {
    ...mapActions.getPlaylistInfo,
    getURL () {
      this.url = this.$refs.inputField.$el.value
      try {
        this.$store._actions.getPlaylistInfo[0](this.url)
        this.change = 1
      } catch (e) {
        console.log(e)
        console.log('deu ruim kkkkkkkkkkkkk')
      }
    },
    downloadPlaylist () {
      const items = this.$store.state.playlistInfo[0].info.items
      items.forEach((element) => {
        const id = element.id
        const title = element.title
        try {
          this.$store._actions.downloadVideo[0]({ title, id })
        } catch (e) {
          console.log(e)
        }
      })
    },
    created () {
      this.change = 0
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
  border: 5px solid #00487C;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.card{
  margin: 2rem 0;
}

.button{
  max-width: 60%;
  width: 100%;
}

.buttons.wrapper{
  max-width: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>

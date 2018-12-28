<template lang="pug">
  .content
    p
      img(v-bind:src="track.album.images[0].url")
    p
      strong {{ track.name }}
      small [{{ track.duration_ms }}]
    p
      audio.player(controls, v-bind:src="track.preview_url")
</template>

<script>
export default {

  data () {
    return {
      track: {}
    }
  },

  created () {
    this.$bus.$on('set-track', (track) => {
      this.track = track
    })
  }
}
</script>

<style lang="scss" scoped>
  .player {
    height: 50px;
  }
  img {
    width: 125px;
    border-radius: 50%;
  }
</style>

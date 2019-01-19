<template lang="pug">
  .content(v-if="track && track.album")
    nav.navbar.is-fixed-bottom.has-shadow
      .player
        .left
          img.logo(v-bind:src="track.album.images[1].url")
        .right
          .top
            a.song {{ track.name }}
            a.artist {{ track.artists[0].name}}
        .right
          .top
            a.muestra Demo - Preview Song
            audio(controls, v-bind:src="track.preview_url")
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
  //.navbar-item img {
    //max-height: 3.75rem;
    //border-radius: 10%;
  //}
</style>

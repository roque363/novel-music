<template lang="pug">
.nm-player-content(v-if="track && track.album")
  .row.columns.is-mobile
    .column.is-narrow
      figure.image.is-96x96
        img.logo(v-bind:src="track.album.images[1].url")
    .column.description
      a.song.cortar {{ track.name }}
      a.artist {{ track.artists[0].name}}
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
  .nm-player-content {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10;
    height: 120px;
    color: #000;
    background-color: white;
    border-top: 1.2px solid #eeeeee;
    padding: 8px;
  }

  figure {
    margin: 0;
  }

  .description {
    flex-grow:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-left:12px;
  }

  .song {
    font-size:1.2em;
    font-weight:600;
    color: #262636;
  }

  .artist {
    color: #262636;
    padding-bottom: 4px;
  }

  audio {
    height: 35px;
    width: 100%;
  }

  .cortar {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  @keyframes pop-in {
    0%, 95%{
      transform:translateY(100%);
    }
    100%{
      transform:translateY(0%);
    }
  }
</style>
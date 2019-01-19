<template lang="pug">
  .container(v-if="track && track.album")
    .columns
      .column.is-3.has-text-centered
        figure.media-left.image.is-square
          img(:src="track.album.images[0].url")
        p.button-bar
          a.button.is-medium.is-link(@click="selectedTrack")
            span.icon
              i.fas.fa-play
            span PLay Demo
      .column.is-9
        .card.radius
          .card-header
            h1.title.detail {{ track.name }}
          .card-content
            .content
              h3 Detalles
              p
                strong Artista:
                span  {{ track.artists[0].name}}
              p
                strong Duracion de la canción:
                span  {{ track.duration_ms | ms-to-mm }} min
              p
                strong Popularidad:
                span  {{ track.popularity }}
              nm-tag(v-if="track.explicit === true")
            |
            .content
              h3 Enlaces
              p.enlace
                strong Enlace de la Canción:
              a.button.is-success(v-bind:href="track.external_urls.spotify")
                span.icon
                  i.fab.fa-spotify
                span Spotify
              |
              p.enlace
                strong Enlace del Artista:
              a.button.is-info(v-bind:href="track.artists[0].external_urls.spotify")
                span.icon
                  i.fas.fa-music
                span Artista
              |
</template>

<script>
import TrackServices from '@/services/track'
import trackMixin from '@/mixins/track'
import NmTag from '@/components/shared/Tag.vue'

export default {
  mixins: [ trackMixin ],

  components: { NmTag },

  data () {
    return {
      track: {}
    }
  },

  created () {
    const id = this.$route.params.id

    TrackServices.getById(id)
      .then(res => {
        console.log(res)
        this.track = res
      })
  }
}
</script>

<style lang="scss" scoped>
  .columns {
    margin-left: 8px;
    margin-right: 8px;
    padding-bottom: 25px;
  }
  .button-bar {
    margin-top: 15px;
  }
  .color{
    color: #262636;
  }
  .title {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
  }
  .enlace {
    margin-top: 10px;
  }
</style>

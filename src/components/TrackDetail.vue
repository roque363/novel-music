<template lang="pug">
  .container
    .columns
      .column.is-3.has-text-centered
        figure.media-left
          p.image
            img(:src="track.album.images[0].url")
          p
            a.button.is-link.is-large(@click="selectedTrack")
              span.icon ▶️
      .column.is-9
        .panel
          .panel-heading
            h1.title {{ track.name }}
          .panel-block
            article.media
              .media-content
                .content
                  ul(v-for="(v, k) in track")
                    li
                      strong {{ k }}:&nbsp;
                      span {{ v }}
              nav.level
                .level-left
                  a.level-item
</template>

<script>
import TrackServices from '@/services/track'
import trackMixin from '@/mixins/track'

export default {
  mixins: [ trackMixin ],

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

<style lang="scss" scope>
  .columns {
    margin: 30px;
  }
</style>

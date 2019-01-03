<template lang="pug">
  .card(v-if="track && track.album")
    .card-image
      figure.image.is-1by1
        img(v-bind:src="track.album.images[0].url", v-on:click="goToTrack(track.id)")
    .card-content
      .media
        .media-left
          .figure.image.is-48x48
            img(v-bind:src="track.album.images[0].url")
        .media-content
          p.title.is-6
            strong {{ track.name }}
          p.subtitle.is-6 {{ track.artists[0].name}}
      .content
        small {{ track.duration_ms | ms-to-mm }}
        nav.level
          .level-left
            .buttons
              button.level-item.button.is-link(@click="selectedTrack")
                span.icon.is-small ▶️
              |
              button.level-item.button.is-warning(v-on:click="goToTrack(track.id)")
                span.icon.is-small ➕
</template>

<script>
import trackMixin from '@/mixins/track'

export default {
  mixins: [ trackMixin ],

  props: {
    track: { type: Object, require: true }
  },

  methods: {
    // El metodo SelectedTrack se movio al Mixin
    goToTrack (id) {
      if (!this.track.preview_url) { return }

      this.$router.push({ name: 'track', params: { id: id } })
    }
  }
}
</script>

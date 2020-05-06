<template lang="pug">
.card.radius(v-if="track && track.album")
  .card-image
    figure.image
      img(v-bind:src="track.album.images[0].url", alt="Music album")
  .card-content
    .media
      .media-left
        .figure.image.is-64x64
          img(v-bind:src="track.album.images[1].url", alt="Music album")
      .media-content
        p.title.is-5.cortar
          strong {{ track.name }}
        p.subtitle.is-6 {{ track.artists[0].name}}
    .content
      .detail
        small Duración: {{ track.duration_ms | ms-to-mm }}
        span.tag.is-danger(v-if="track.explicit === true")
          | Contenido explícito
      nav.level
        .level-left
          .buttons
            a.level-item.button.is-link(@click="selectedTrack")
              span.icon
                i.fas.fa-play
              span Demo
            |
            b-tooltip(label="Detalles de la canción", position="is-bottom")
              a.level-item.button.is-warning(v-on:click="goToTrack(track.id)")
                span.icon
                  i.fas.fa-info
                span Info
</template>

<script>
import trackMixin from '@/mixins/track'

import NmTag from '@/components/shared/Tag.vue'

export default {
  mixins: [ trackMixin ],

  components: { NmTag },

  props: {
    track: { type: Object, require: true }
  },

  methods: {
    // El metodo SelectedTrack se movio al Mixin
    goToTrack (id) {
      if (!this.track.preview_url) { return }
      var slugName = this.sanitizeTitle(this.track.name)

      this.$router.push({ name: 'track', params: { slug: slugName, id: id } })
    },

    sanitizeTitle: function (title) {
      var slug = ''
      // Change to lower case
      var titleLower = title.toLowerCase()
      // Letter "e"
      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e')
      // Letter "a"
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a')
      // Letter "o"
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o')
      // Letter "u"
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u')
      // Letter "d"
      slug = slug.replace(/đ/gi, 'd')
      // Trim the last whitespace
      slug = slug.replace(/\s*$/g, '')
      // Change whitespace to "-"
      slug = slug.replace(/\s+/g, '-')

      return slug
    }
  }
}
</script>

<style lang="scss" scoped>
  .cortar {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .subtitle {
    font-weight: 500;
  }
  .detail {
    font-weight: 500;
    margin-bottom: 10px;
  }
  .tag {
    margin-left: 10px;
  }

  .buttons {
    a {
      font-weight: 500;
    }
  }
</style>

<template>
  <div v-if="track && track.album" class="card radius">
    <div class="card-image">
      <figure class="image">
        <img :src="track.album.images[0].url" alt="Music album" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <div class="figure image is-64x64">
            <img :src="track.album.images[1].url" alt="Music album" />
          </div>
        </div>
        <div class="media-content">
          <p class="title is-5 cortar">
            <strong>{{ track.name }}</strong>
          </p>
          <p class="subtitle is-6">{{ track.artists[0].name }}</p>
        </div>
      </div>
      <div class="content">
        <div class="detail">
          <small>Duración: {{ $convertMsToMm(track.duration_ms) }}</small>
          <nm-tag v-if="track.explicit === true">Contenido explícito</nm-tag>
        </div>
        <nav class="level">
          <div class="level-left">
            <div class="buttons">
              <a class="level-item button is-link" @click="selectedTrack">
                <span class="icon">
                  <i class="fas fa-play"></i>
                </span>
                <span>Demo</span>
              </a>
              <b-tooltip label="Detalles de la canción" position="is-bottom">
                <a class="level-item button is-warning" @click="goToTrack(track.id)">
                  <span class="icon"> <i class="fas fa-info"></i> </span>
                  <span>Info</span>
                </a>
              </b-tooltip>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import trackMixin from '@/mixins/track';
import NmTag from '@/components/Tag.vue';

export default {
  name: 'NmTrack',
  components: { NmTag },
  mixins: [trackMixin],
  props: {
    track: { type: Object, require: true, default: null },
  },
  methods: {
    goToTrack(id) {
      if (!this.track.preview_url) {
        return;
      }
      var slugName = this.sanitizeTitle(this.track.name);

      this.$router.push({ name: 'track', params: { slug: slugName, id: id } });
    },

    sanitizeTitle: function (title) {
      var slug = '';
      // Change to lower case
      var titleLower = title.toLowerCase();
      // Letter "e"
      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
      // Letter "a"
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
      // Letter "o"
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
      // Letter "u"
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
      // Letter "d"
      slug = slug.replace(/đ/gi, 'd');
      // Trim the last whitespace
      slug = slug.replace(/\s*$/g, '');
      // Change whitespace to "-"
      slug = slug.replace(/\s+/g, '-');

      return slug;
    },
  },
};
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

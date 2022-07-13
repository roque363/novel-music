<template>
  <div v-if="track && track.album" class="nm-player-content">
    <div class="row columns is-mobile">
      <div class="column is-narrow">
        <figure class="image is-96x96">
          <img class="logo" :src="track.album.images[1].url" />
        </figure>
      </div>
      <div class="column description">
        <a class="song cortar">{{ track.name }}</a>
        <a class="artist">{{ track.artists[0].name }}</a>
        <audio controls="controls" :src="track.preview_url"></audio>
      </div>
    </div>
  </div>
</template>

<script>
import useEventsBus from '@/plugins/event-bus';
import { watch } from 'vue';

export default {
  name: 'NmPlayer',
  data() {
    return {
      track: {},
    };
  },
  created() {
    const { bus } = useEventsBus();

    watch(
      () => bus.value.get('set-track'),
      (track) => {
        // destruct the parameters
        this.track = track;
      },
    );
  },
};
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
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 12px;
}

.song {
  font-size: 1.2em;
  font-weight: 600;
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
  0%,
  95% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>

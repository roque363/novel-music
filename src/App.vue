<template lang="pug">
  #app
    nm-header
    nm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.navbar.has-shadow
        .column
          .field.has-addons.has-addons-centered
            .control
              input.input.is-large(type="text", placeholder="Buscar Canciones", v-model="searchQuery")
            .control
              button.button.is-info.is-large(v-on:click="search") Buscar
            .control
              button.button.is-danger.is-large &times;
      .container
        p
          small {{ searchMessage }}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            nm-track(v-bind:track="t")
    nm-footer
</template>

<script>
import trackService from '@/services/track.js'
import NmFooter from '@/components/layout/Footer.vue'
import NmHeader from '@/components/layout/Header.vue'
import NmTrack from '@/components/Track.vue'
import NmLoader from '@/components/shared/Loader.vue'

export default {
  name: 'app',

  components: { NmFooter, NmHeader, NmTrack, NmLoader },

  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },

  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>

<template lang="pug">
  #app
    nm-header
    section.section
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
        .columns.is-mobile.is-multiline
          .column.is-narrow(v-for="t in tracks")
            .box
              p {{ t.name }}
              p {{ t.artists[0].name }}
    nm-footer
</template>

<script>
import trackService from './services/track.js'
import NmFooter from './components/layout/Footer.vue'
import NmHeader from './components/layout/Header.vue'

export default {
  name: 'app',

  components: { NmFooter, NmHeader },

  data () {
    return {
      searchQuery: '',
      tracks: []
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
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
        })
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>

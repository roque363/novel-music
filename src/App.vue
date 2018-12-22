<template lang="pug">
  #app
    section.section
      nav.navbar.has-shadow
        .container
          input.input.is-large(type="text", placeholder="Buscar Canciones", v-model="searchQuery")
          a.button.is-info.is-large(v-on:click="search") Buscar
          a.button.is-danger.is-large &times;

      .container.results
        .columns
          .cloumn(v-for="t in tracks") {{ t.name }} - {{ t.artist }}
</template>

<script>
const tracks = [
  { name: 'Muchacha', artist: 'Luis Alberto Spinetta' },
  { name: 'Hope', artist: 'The Chainsmokers' },
  { name: 'Cemetery', artist: 'COIN' },
  { name: 'Reforget', artist: 'Lauv' }
]
export default {
  name: 'app',

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
      console.log(this.searchQuery)
      this.tracks = tracks
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>

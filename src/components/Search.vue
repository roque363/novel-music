<template lang="pug">
  main
    transition(name="move")
      nm-notification(v-show="showNotification", v-bind:isClass= "notificationClass")
        p(slot="body") {{ notification }}
    |
    transition(name="move")
      nm-loader(v-show="isLoading")
    |
    section.section(v-show="!isLoading")
      nav.navbar
        .column
          .field.has-addons.has-addons-centered
            .control
              input.input.is-large(
                type="text",
                placeholder="Buscar Canciones",
                v-model="searchQuery",
                v-on:keyup.enter="search"
              )
            .control
              button.button.is-info.is-large(v-on:click="search") Buscar
            .control
              button.button.is-danger.is-large &times;
      |
      .container
        p
          small {{ searchMessage }}
      |
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            nm-track(
              v-blur="t.preview_url"
              v-bind:class="{ 'is-active': t.id == selectedTrack }",
              v-bind:track="t",
              v-on:select="setSelectedTrack"
            )
      |
    |
</template>

<script>
import trackService from '@/services/track.js'

import NmTrack from '@/components/Track.vue'

import NmLoader from '@/components/shared/Loader.vue'
import NmNotification from '@/components/shared/Notification.vue'

export default {
  name: 'app',

  components: { NmTrack, NmLoader, NmNotification },

  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      selectedTrack: '',
      notification: '',
      notificationClass: ''
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },

  watch: {
    showNotification () {
      if (this.showNotification) {
        if (this.tracks.length > 0) {
          this.notificationClass = 'is-success'
          this.notification = `Se han encontrados: ${this.tracks.length} canciones`
        } else {
          if (this.tracks.length === 0) {
            this.notificationClass = 'is-danger'
            this.notification = `No se encontraron resultados`
          } else {
            this.notificationClass = 'is-danger'
            this.notification = `Error`
          }
        }
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },

  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(res => {
          if (res.tracks.total > 0 || res.tracks.total === 0) this.showNotification = true

          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },

    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">

</style>

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
      // START SEARCH
      .box
        .field.has-addons
          .control.is-expanded
            input.input.is-medium.has-text-centered(
              type="text",
              placeholder="» » Buscar Canciones « «",
              v-model="searchQuery",
              v-on:keyup.enter="search"
            )
          .control
            a.button.is-info.is-medium(v-on:click="search") Buscar
      // END SEARCH
      .container
        p
          small {{ searchMessage }}
      // START CARDS
      .row.columns.is-multiline.results
        .column.is-one-quarter-desktop.is-half-tablet.is-one-quarter-fullhd(v-for="t in tracks")
          nm-track(
            v-blur="t.preview_url"
            v-bind:class="{ 'is-active': t.id == selectedTrack }",
            v-bind:track="t",
            v-on:select="setSelectedTrack"
          )
      // END CARDS
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

<style lang="scss" scoped>
  .section {
    margin-left: 8px;
    margin-right: 8px;
  }
  .is-active {
      border: 3px #23d160 solid;
  }

  .results {
    margin-top: 20px
  }

  small {
    color: whitesmoke;
  }
</style>

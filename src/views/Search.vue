<template lang="pug">
  main
    //- ⚠️ Notificacion Antigua
    // transition(name="move")
      nm-notification(v-show="showNotification", v-bind:isClass="notificationClass")
        p.noti(slot="body") {{ notification }}
    transition(name="move")
      nm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      // START SEARCH
      .novel-search
        .field.has-addons
          .control.is-expanded
            b-input.has-text-centered.novel-search__input(
              size="is-medium",
              type="search",
              placeholder="Buscar Canciones...",
              icon-pack='fas',
              icon="search",
              v-model="searchQuery",
              v-on:keyup.enter.native="search"
            )
          .control
            a.button.is-link.is-medium(v-on:click="search") Buscar
      // END SEARCH
      small.search-message {{ searchMessage }}
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
      //- ⚠️ Se añade la Paginacion
      .columns(v-show="tracks.length && !pagination.hasEnd")
        .column.has-text-centered
          a.button.is-light.is-rounded(
            @click="loadNextPage()",
            :class="{ 'is-loading': pagination.isLoading }",
            :disabled="pagination.isLoading"
          ) Mostrar más
</template>

<script>
// Services
import trackService from '@/services/track.js'
// Component
import NmLoader from '@/components/Loader.vue'
import NmNotification from '@/components/Notification.vue'
import NmTrack from '@/components/Track.vue'

export default {
  name: 'search',

  components: { NmLoader, NmTrack, NmNotification },

  metaInfo () {
    return {
      title: 'Búsqueda y reproducción de canciones',
      meta: [
        { vmid: 'description', name: 'description', content: 'Página Web para la búsqueda y reproducción de canciones, mediante el uso de la api de Spotify. Aplicación realizada con Vuejs.' },
        {
          'property': 'og:title',
          'content': 'Búsqueda y reproducción de canciones',
          'template': chunk => `${chunk} | Novel Music`,
          'vmid': 'og:title'
        },
        {
          'property': 'og:url',
          'content': 'https://roque363.github.io/novel-music',
          'vmid': 'og:url'
        },
        {
          'property': 'og:site_name',
          'content': 'Novel Music',
          'vmid': 'og:site_name'
        },
        {
          'property': 'og:description',
          'content': 'Página Web para la búsqueda y reproducción de canciones, mediante el uso de la api de Spotify.',
          'vmid': 'og:description'
        }
      ]
    }
  },

  data () {
    return {
      searchQuery: '',
      tracks: [],

      isLoading: false,
      showNotification: false,

      selectedTrack: '',

      notification: '',
      notificationClass: '',

      pagination: {
        offset: 0,
        limit: 20,
        hasEnd: false,
        isLoading: false
      }
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
          // Open Toast
          this.$toast.open({
            duration: 4000,
            message: `Se han encontrados: ${this.tracks.length} canciones`,
            type: 'is-success'
          })
        } else if (this.tracks.length === 0) {
          // Open Toast
          this.$toast.open({
            duration: 4000,
            message: 'No se encontraron resultados, pruebe otra canción',
            type: 'is-warning'
          })
        } else {
          // Open Snackbar
          this.$snackbar.open({
            duration: 4000,
            message: 'Se produjo un error inesperado...',
            type: 'is-danger',
            actionText: 'Ok',
            indefinite: false
          })
        }
        setTimeout(() => { this.showNotification = false }, 4000)
      }
    },

    searchQuery () {
      this.pagination.offset = 0
      this.pagination.hasEnd = false
      this.pagination.isLoading = false
    }
  },

  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(res => {
          this.pagination.offset += this.pagination.limit // ⚠️ Incrementamos el valor de offset en base a limit
          this.pagination.total += res.tracks.total // ⚠️ Nos guardamos la verdadera cantidad de resultados encontrados

          if (res.tracks.total > 0 || res.tracks.total === 0) this.showNotification = true

          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },

    loadNextPage () {
      if (!this.searchQuery) { return }
      this.pagination.isLoading = true

      trackService.search(this.searchQuery, this.pagination.offset)
        .then(res => {
          this.pagination.offset += this.pagination.limit // ⚠️ Incrementamos el valor de offset en base a
          this.pagination.hasEnd = res.tracks.next === null // ⚠️ Checamos si hay mas resultados para obtener

          this.tracks = [...this.tracks, ...res.tracks.items] // ⚠️ Usamos el spread operator para concatenar arrays: lo que ya tenemos en tracks de paginas anteriores + lo nuevo de la siguiente página

          this.pagination.isLoading = false // ⚠️ Usamos otra propiedad isLoading para mostrar otro tipo de loader y mejorar la UX
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
    margin: 0;
    padding: 2rem 1.5rem;
  }
  .is-active {
      border: 3px #23d160 solid;
  }
  .results {
    margin-top: 20px
  }
  small, .noti {
    color: whitesmoke;
  }
  .novel-search {
    margin-bottom: 0.625rem;
    padding: 0.75rem;
    color: #4a4a4a;
    display: block;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    &__input {
      border-bottom-left-radius: 6px;
      border-top-left-radius: 6px;
    }
  }
  .search-message {
    font-weight: 500;
    margin-left: 0.5rem;
  }
</style>
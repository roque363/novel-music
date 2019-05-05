<template lang="pug">
  #app.contenido
    nm-header
    |
    router-view
    |
    nm-footer
</template>

<script>
import NmFooter from '@/components/layout/Footer.vue'
import NmHeader from '@/components/layout/Header.vue'

export default {
  name: 'app',
  components: { NmFooter, NmHeader },
  metaInfo: {
    title: 'Búsqueda y reproducción de canciones',
    titleTemplate: '%s | Novel Music',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { vmid: 'description', name: 'description', content: 'Página Web para la búsqueda y reproducción de canciones, mediante el uso de la api de Spotify. Aplicación realizada con Vuejs.' }
    ]
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>

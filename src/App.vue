<template lang="pug">
  #app.nm-root
    nm-header
    router-view.nm-layout
    nm-footer
</template>

<script>
import NmHeader from '@/components/layout/Header.vue'
import NmFooter from '@/components/layout/Footer.vue'

export default {
  name: 'app',
  components: { NmHeader, NmFooter },
  metaInfo: {
    title: 'Búsqueda y reproducción de canciones',
    titleTemplate: '%s | Escuchar en Novel Music',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { vmid: 'description', name: 'description', content: 'Página Web para la búsqueda y reproducción de canciones, mediante el uso de la api de Spotify. Aplicación realizada con Vuejs.' }
    ]
  }
}
</script>

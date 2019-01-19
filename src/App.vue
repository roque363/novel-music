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
  components: { NmFooter, NmHeader }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>

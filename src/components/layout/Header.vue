<template lang="pug">
  section.hero.is-success
    .hero-head
      .header.nav
        .container
          .nav-left
            .nav-item
              strong 📻 Novel Music
          .nav-right.nav-menu
            router-link.nav-item(:to="{ name: 'search' }") Buscar
            router-link.nav-item(to="/about") Nosotros
    .hero-body
      .container.has-text-centered
        h1.title Novel Music
        h2.subtitle Biblioteca de Spotify
        nm-player
</template>

<script>
import NmPlayer from '@/components/Player.vue'

export default {
  components: { NmPlayer }
}
</script>

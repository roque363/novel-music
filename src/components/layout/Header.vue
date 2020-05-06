<template lang="pug">
div
  // START TOP NAV
  nav.navbar.has-shadow(role="navigation" aria-label="main navigation")
    .container
      .navbar-brand
        router-link.navbar-item.logo-text(:to="{ name: 'search' }")
          strong Novel Music
        a.navbar-burger.burger(role="button", data-target="menuPrincipal")
          span(aria-hidden="true")
          span(aria-hidden="true")
          span(aria-hidden="true")
      |
      #menuPrincipal.navbar-menu
        .navbar-start
          router-link.navbar-item.spotify-search(:to="{ name: 'search' }")
            b-icon(pack="fab" icon="spotify")
            span.text.item-size Buscar
          router-link.navbar-item.item-size( :to="{ name: 'about' }" ) Nosotros
        .navbar-end
          .navbar-item
            a.button.is-link(href="https://github.com/roque363/novel-music")
              span.icon
                i.fab.fa-github
              span.item-size View Source
  // END TOP NAV
  section.hero
    .hero-body
      .container.has-text-centered
        .column.is-6.is-offset-3
          h1.title Novel Music
          h2.subtitle Búsqueda y reproducción de canciones
          h2.subtitle Biblioteca de Spotify
          //nm-player
  // START PLAYER
  nm-player-v2
  // END PLAYER
</template>

<script>
import NmPlayer from '@/components/Player.vue'
import NmPlayerV2 from '@/components/PlayerV2.vue'

export default {
  components: { NmPlayer, NmPlayerV2 },

  mounted () {
    let navbar = document.querySelector('.navbar-burger')
    navbar.addEventListener('click', function () {
      let target = navbar.dataset.target
      let $target = document.getElementById(target)
      navbar.classList.toggle('is-active')
      $target.classList.toggle('is-active')
    })
  }
}
</script>

<style lang="scss" scoped>
  .logo-text { font-size: 19px; }

  a, .fa-search{ color: #000000; }

  a:hover { color: #283593; }

  .item-size {
    font-size: 16px;
    font-weight: 500;
  }

  .spotify-search {
    .text { padding-left: 4px; }
  }

  .spotify-search:hover {
    color: #1ED761
  }

  .title {
    font-size: 38px;
    font-weight: 600;
    color: white;
  }

  .subtitle {
    color: white;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 0.5rem;
  }
</style>

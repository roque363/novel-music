<template lang="pug">
  div
    // START TOP NAV
    nav.navbar.has-shadow(role="navigation" aria-label="main navigation")
      .container
        .navbar-brand
          a.navbar-item
            router-link(:to="{ name: 'search' }")
              strong Novel Music
          a.navbar-burger.burger(role="button", data-target="menuPrincipal")
            span(aria-hidden="true")
            span(aria-hidden="true")
            span(aria-hidden="true")
        |
        #menuPrincipal.navbar-menu
          .navbar-start
            a.navbar-item
              router-link.nav-item(:to="{ name: 'search' }") Buscar
            a.navbar-item
              router-link.nav-item( :to="{ name: 'about' }" ) Nosotros
              // router-link.nav-item(to="/novel-music/about") Nosotros
          .navbar-end
            .navbar-item
              a.button.is-link(href="https://github.com/roque363/novel-music")
                span.icon
                  i.fab.fa-github
                span View Source
    // END TOP NAV
    section.hero
      .hero-body
        .container.has-text-centered
          .column.is-6.is-offset-3
            h1.title Novel Music
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
  a, .fa-search{
    color: #000000;
  }

  .title, .subtitle {
    color: whitesmoke;
  }
</style>

<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item logo-text" :to="{ name: 'search' }">
          <span> Novel Music </span>
        </router-link>
        <a class="navbar-burger burger" role="button" data-target="menuPrincipal">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="menuPrincipal" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item spotify-search" :to="{ name: 'search' }">
            <span class="icon">
              <i class="fab fa-spotify"></i>
            </span>
            <span class="text item-size">Buscar</span>
          </router-link>
          <router-link class="navbar-item item-size" :to="{ name: 'about' }">
            Nosotros
          </router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <a class="button is-link" href="https://github.com/roque363/novel-music">
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
              <span class="item-size">View Source</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <section class="hero">
    <div class="hero-body nm-hero-body">
      <div class="container has-text-centered">
        <div class="column is-6 is-offset-3">
          <h1 class="title">Novel Music</h1>
          <h2 class="subtitle">Búsqueda y reproducción de canciones</h2>
          <h2 class="subtitle">Biblioteca de Spotify</h2>
        </div>
      </div>
    </div>
  </section>
  <nm-player />
</template>

<script>
import NmPlayer from '@/components/Player.vue';

export default {
  name: 'NmHeader',
  components: { NmPlayer },
  mounted() {
    let navbar = document.querySelector('.navbar-burger');
    navbar.addEventListener('click', function () {
      let target = navbar.dataset.target;
      let $target = document.getElementById(target);
      navbar.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  },
};
</script>

<style lang="scss" scoped>
.logo-text {
  font-size: 19px;
  font-weight: 700;
}
a,
.fa-search {
  color: #000000;
}
a:hover {
  color: #283593;
}
.item-size {
  font-size: 16px;
  font-weight: 500;
}
.spotify-search {
  .text {
    padding-left: 4px;
  }
}
.spotify-search:hover {
  color: #1ed761;
}
.nm-hero-body {
  padding: 1.5rem 1rem;
  .title {
    font-size: 38px;
    font-weight: 600;
    color: white;
  }
  .subtitle {
    color: white;
    font-weight: 500;
    font-size: 18px;
  }
}
</style>

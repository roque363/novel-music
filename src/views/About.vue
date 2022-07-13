<template>
  <div>
    <div class="container has-text-centered">
      <div class="box">
        <div class="column is-half is-offset-one-quarter">
          <h1 class="title"><strong>Hola</strong><i class="em em-spock-hand"></i></h1>
          <h3 class="has-text-justified">
            Soy<strong> Roque Alarcon</strong> desarrolle esta Página Web para la búsqueda y
            reproducción de canciones, mediante el uso de la api de Spotify.<br />La diseñe como
            parte del curso de Vue.js de Platzi. Se uso Eslint, Babel, Bulma, Pug y
            Vue-router.<br />Para más información de como realizo esta pagina pueden revisar el
            repositorio de<a class="repo" href="https://github.com/roque363/novel-music">
              GitHub</a
            >.
          </h3>
          <img :src="require(`@/assets/images/Nove@1x.jpg`)" alt="roque363 - logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewAbout',

  metaInfo() {
    return {
      title: 'Información',
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 2rem 1rem;
}

.repo {
  font-weight: 600;
}

h3 {
  font-size: 22px;
  margin-bottom: 1.5rem;
}

.em-male-student {
  margin-left: 10px;
  margin-right: 10px;
}
</style>

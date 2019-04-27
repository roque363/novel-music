<template lang="pug">
  .container.has-text-centered
    .box
      .column.is-half.is-offset-one-quarter
        h1.title
          strong Hola
          i.em.em-spock-hand
        h3.has-text-justified Soy
          strong  Roque Alarcon
          |  desarrolle esta Página Web para la búsqueda y reproducción de canciones, mediante el uso de la api de Spotify.
          br
          | La diseñe como parte del curso de Vue.js de Platzi. Se uso Eslint, Babel, Bulma, Pug y Vue-router.
        img(src="https://roque363.github.io/novel-music/src/assets/img/Nove@1x.jpg")
</template>

<style lang="scss" scoped>
  .container {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 25px;
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

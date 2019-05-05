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
          br
          | Para más información de como realizo esta pagina pueden revisar el repositorio de
          a.repo(href="https://github.com/roque363/novel-music")  GitHub
          | .
        img(src="https://roque363.github.io/novel-music/src/assets/img/Nove@1x.jpg" alt="roque363 - logo")
</template>

<script>
export default {
  name: 'About',
  metaInfo () {
    return {
      title: 'Información',
      meta: [
        { vmid: 'description', name: 'description', content: 'Diseñado para el curso de Vue.js, uso de Eslint, Babel, Bulma y Vue-router.' },
        {
          'property': 'og:title',
          'content': 'Información',
          'template': chunk => `${chunk} | Novel Music`,
          'vmid': 'og:title'
        },
        {
          'property': 'og:url',
          'content': 'https://roque363.github.io/novel-music/about',
          'vmid': 'og:url'
        },
        {
          'property': 'og:site_name',
          'content': 'Novel Music',
          'vmid': 'og:site_name'
        },
        {
          'property': 'og:description',
          'content': 'Diseñado para el curso de Vue.js, uso de Eslint, Babel, Bulma y Vue-router. Para más información de como realizo esta pagina pueden revisar el repositorio de GitHub.',
          'vmid': 'og:description'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 25px;
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

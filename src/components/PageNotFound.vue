<template lang="pug">
.container.has-text-centered
  h1.title Error 404
  article
    a.subtitle La página que está buscando no puede ser Encontrada!, pero puedes
    a.subtitle(href="https://roque363.github.io/novel-music/")
      strong  volver
</template>

<style lang="scss" scoped>
  .title {
    color: white;
    font-size: 40px;
    font-weight: 600;
  }
  .subtitle  {
    color: white;
    font-weight: 500;
  }
  .container {
    margin-top: 25px;
    margin-bottom: 80px;
  }
  strong {
    color: hsl(204, 83%, 65%);
  }
</style>

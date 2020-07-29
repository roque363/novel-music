<template lang="pug">
div
  .container.has-text-centered
    .nm-not-fount-wraper
      h1.title Error 404
      article
        a.subtitle La página que está buscando no puede ser Encontrada!, pero puedes
        a.subtitle(href="https://roque363.github.io/novel-music/")
          strong  volver
</template>

<style lang="scss" scoped>
  .nm-not-fount-wraper {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
    color: white;
    font-size: 3rem;
    font-weight: 600;
    }
    .subtitle  {
      color: white;
      font-weight: 500;
    }
    strong {
      color: #e9cd2d;
    }
  }
</style>
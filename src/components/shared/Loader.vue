<template lang="pug">
  .container
    .content.has-text-centered.cargar
      h1 Cargando ...
      progress.progress.is-success(max="100") 45
</template>

<style lang="scss" scoped>
  .cargar {
    padding: 20px;
    min-height: 40vh;
  }

  h1 {
    color: whitesmoke;
  }
</style>

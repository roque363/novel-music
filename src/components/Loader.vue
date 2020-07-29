<template lang="pug">
.container
  .content.has-text-centered.cargar
    h1 Cargando ...
    progress.progress.is-primary(max="100") 45
</template>

<style lang="scss" scoped>
  .cargar {
    padding: 2.5rem 2rem;
    h1 {
      color: whitesmoke;
    }
    .progress{
      height: 0.75rem;
    }
  }
</style>
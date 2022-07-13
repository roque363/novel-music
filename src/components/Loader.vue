<template>
  <div class="container">
    <div class="content has-text-centered cargar">
      <h1>Cargando ...</h1>
      <progress class="progress is-primary" max="100">45</progress>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NmLoader',
};
</script>

<style lang="scss" scoped>
.cargar {
  padding: 2.5rem 2rem;
  h1 {
    color: whitesmoke;
  }
  .progress {
    height: 0.75rem;
  }
}
</style>

<template lang="pug">
.container
  .columns
    .column.is-5.is-offset-4
      .notification(:class="isClass")
        slot(name="body") Algo anduvo mal
</template>

<script>
export default {
  props: {
    isClass: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
  .notification {
    margin: 10px;
  }
</style>
<template lang="pug">
  .container.has-text-centered
    .box
      .column.is-half.is-offset-one-quarter
        h1.title
          strong Hola
          i.em.em-spock-hand
        h3.has-text-justified Soy
          strong  Roque Alarcon
          |  un estudiante
          i.em.em-male-student
          | de software interesado en el empredimiento
          | y en el diseño grafico
</template>

<style lang="scss" scoped>
  .container {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 25px;
  }

  h3 {
    font-size: 22px;
  }
  .em-male-student {
    margin-left: 10px;
    margin-right: 10px;
  }
</style>

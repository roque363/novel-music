<template>
  <div>
    <div class="container has-text-centered">
      <div class="nm-not-fount-wraper">
        <h1 class="title">Error 404</h1>
        <article>
          <a class="subtitle"
            >La página que está buscando no puede ser Encontrada!, pero puedes</a
          ><a class="subtitle" href="https://roque363.github.io/novel-music/"
            ><strong> volver</strong></a
          >
        </article>
      </div>
    </div>
  </div>
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
  .subtitle {
    color: white;
    font-weight: 500;
  }
  strong {
    color: #e9cd2d;
  }
}
</style>

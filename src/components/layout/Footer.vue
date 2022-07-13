<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <div class="container">
          <a href="https://github.com/roque363/novel-music">
            <i class="fab fa-github fa-2x git" aria-hidden="true"></i>
          </a>
        </div>
        <p class="text">
          with ❤️ by<a class="user" href="https://github.com/roque363"> @roque363</a>
        </p>
        <p>
          <a href="https://bulma.io/">
            <img :src="require(`@/assets/images/BulmaLogo.svg`)" />
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'NmFooter',
};
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 2rem;
  padding-bottom: 2rem;
  a {
    color: black;
  }
  .text {
    font-weight: 500;
  }
  .user {
    font-weight: 600;
  }
  .user:hover {
    color: #283593;
  }
  .git:hover {
    color: #6b6b6b;
  }
}
</style>

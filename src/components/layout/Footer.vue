<template lang="pug">
footer.footer
  .container
    .content.has-text-centered
      .container
        a(href="https://github.com/roque363/novel-music")
          i.fab.fa-github.fa-2x.git(aria-hidden="true")
      p.text with ❤️ by
        a.user(href="https://github.com/roque363")  @roque363
      p
        a(href="https://bulma.io/")
          img(src="https://bulma.io/images/made-with-bulma--semiblack.png", alt="Made with Bulma", width="148", height="34")
</template>

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
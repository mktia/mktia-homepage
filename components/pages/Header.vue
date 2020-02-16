<template lang="pug">
  header
    b-navbar.container(toggleable="lg", type="dark")
      b-navbar-brand(href="/") mktia is ...
      b-navbar-toggle(target="nav-collapse")
      b-collapse(id="nav-collapse", is-nav)
        b-navbar-nav
          b-nav-item(
            href="/product"
            :active="getCurrentURL()==='product'"
          ) Portfolio
          b-nav-item(
            href="/about"
            :active="getCurrentURL()==='about'"
          ) About
</template>

<script lang="ts">
export default {
  methods: {
    getCurrentURL() {
      if (process.browser) {
        return window.location.pathname.slice(1)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
header
  background-color: #111
  border-bottom: solid 1px #555
</style>

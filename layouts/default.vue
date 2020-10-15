<template lang="pug">
div
  Header
  nuxt
  Footer
  // Designed by mktia. (https://github.com/mktia)
</template>

<script>
import Header from '~/components/pages/Header'
import Footer from '~/components/pages/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="sass">
html
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box

body
  background-color: #fafafa
  font-family: 'Optima', 'Segoe UI', 'Noto Sans JP', -apple-system BlinkMacSystemFont, sans-serif

  .ff-yg
    font-family: 'Optima', 'Segoe UI', 'Yu Gothic', 'YuGothic', -apple-system BlinkMacSystemFont, sans-serif

  .fs-11
    font-size: 1.1rem

  .text-main
    color: #aaa

  .text-sub
    color: #333

  .text-mono-a
    color: #aaa

  .text-mono-5
    color: #555

  .text-mono-7
    color: #777

  .text-justify
    text-align: justify

  .title-mono-a
    color: #aaa
    font-size: 18px
    border-bottom: solid 1px #aaa
</style>

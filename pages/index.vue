<template lang="pug">
  div.container
    div.mt-5
      p.pb-1.title-mono-a Hello world!&#x1f424;
    div.pt-4.pb-4
      p.text-mono-5.text-justify(v-for="sentence in getTopSentences()") {{ sentence }}
</template>

<script>
import DATA from '~/static/data.json'

export default {
  head: {
    title: 'MKTIA.COM',
    meta: [{ hid: 'description', name: 'description', content: 'Home page' }]
  },
  methods: {
    getTopSentences() {
      return DATA.home.sentences
    }
  }
}
</script>

<style lang="sass" scoped></style>

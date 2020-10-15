<template lang="pug">
  .product-card
    b-img-lazy.my-3(
      fluid
      blank-src="http://placehold.jp/600x400.png?text=NO IMAGE"
      :src="imageURL"
      :alt="name"
    )

    h3.h4 {{ name }}
    p.small.text-mono-7
      span.font-weight-bold {{ appType }}
      span &#32;- {{ coding }}
    p {{ description }}
    b-link(:url='link').small.text-mono-a {{ link.split('//')[1] }}
</template>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: null
    },
    imageURL: {
      type: String,
      default: null
    },
    coding: {
      type: String,
      default: null
    },
    appType: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: null
    }
  },
  methods: {
    openLink(url) {
      if (process.browser) {
        window.open(url)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.app-type
  ::before
    content: ""
    border-top: 1px solid #333

.product-card
  img
    height: auto
</style>

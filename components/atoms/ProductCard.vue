<template lang="pug">
  b-card(
    :img-src="imageURL"
    :img-alt="null"
    :title="name"
    :sub-title="appType"
    style="max-width: 24rem;"
    @click="openLink(link)"
  )
    b-card-text.small {{ description }}
    p.mb-0.text-right.small.text-mono-a {{ link.slice(link.search('//')+2) }}
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

<style lang="sass" scoped></style>

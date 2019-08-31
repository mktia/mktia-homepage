<template lang="pug">
  b-card(
    :img-src="imageURL"
    :img-alt="null"
    :title="name"
    :sub-title="appType"
    style="max-width: 24rem;"
  )
    b-card-text.small {{ description }}
    p.mb-0.text-right
      b-link.small.text-mono-a(:href="link") {{ link.slice(link.search('//')+2) }}
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
  }
}
</script>

<style lang="sass" scoped></style>

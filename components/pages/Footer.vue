<template lang="pug">
  footer.mt-5
    p.small &copy; 2017-{{ getYear() }} mktia.
</template>

<script lang="ts">
export default {
  methods: {
    getYear() {
      const date = new Date()
      return date.getFullYear()
    }
  }
}
</script>

<style lang="sass" scoped>
footer
  color: #666
  text-align: center
</style>

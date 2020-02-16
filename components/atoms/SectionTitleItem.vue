<template lang="pug">
  div.d-flex.justify-content-center
    div.section-title
      h2.en.mb-0.pb-2.text-center {{ enUs }}
      p.text-center {{ jaJp }}
</template>

<script>
export default {
  props: {
    jaJp: {
      type: String,
      default: 'タイトル',
      require: true
    },
    enUs: {
      type: String,
      default: 'title',
      require: true
    }
  }
}
</script>

<style lang="sass" scoped>
.section-title
  width: 192px

  .en
    border-bottom: 1px solid #333
</style>

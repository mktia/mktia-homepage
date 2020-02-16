<template lang="pug">
  div.rank
    svg(
      aria-hidden="true" 
      focusable="false" 
      data-prefix="fas" 
      data-icon="bookmark"
      class="svg-inline--fa fa-bookmark fa-w-12" 
      role="img" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    )
      path(
        :fill="getColor(0)"
        d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"
      )
    div.text
      span.h3.justify-content-center {{ rank }}
      span.h6.font-weight-bold 位
</template>

<script>
export default {
  props: {
    rank: {
      type: Number,
      default: 0,
      require: true
    }
  },
  methods: {
    getColor(number) {
      switch (number) {
        case 1:
          return '#ffd700'
        case 2:
          return '#c0c0c0'
        case 3:
          return '#7a592f'
        default:
          return '#dc143c'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
$logo-size: 64px
.rank
  position: relative
  width: $logo-size

  svg
    height: $logo-size
    width: $logo-size

  .text
    $font-height: 40px
    $font-width: 33px
    position: absolute
    top: ($logo-size - $font-height) / 2 - 4
    left: ($logo-size - $font-width) / 2
    color: #eee
    font-size: 1.2em
    font-weight: bold

    span
      vertical-align: middle
</style>

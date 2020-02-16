<template lang="pug">
  div.ranking-item
    div.d-flex.align-items-center.justify-content-center
      BookmarkSymbol.mr-2(:rank="rank")
      p.h3.text-center {{ language }}
    div.d-flex.justify-content-center
      div.symbol.my-4(:is="getSymbol(language)")
</template>

<script>
import BookmarkSymbol from '@/components/atoms/BookmarkSymbol'
import JavaSVG from '@/assets/svg/java.svg'
import JavaScriptSVG from '@/assets/svg/javascript.svg'
import PythonSVG from '@/assets/svg/python.svg'

export default {
  components: {
    BookmarkSymbol,
    JavaSVG,
    JavaScriptSVG,
    PythonSVG
  },
  props: {
    rank: {
      type: Number,
      default: 3,
      require: true
    },
    language: {
      type: String,
      default: '',
      require: false
    }
  },
  data() {
    return {
      svg: {
        java: JavaSVG,
        javascript: JavaScriptSVG,
        python: PythonSVG
      }
    }
  },
  methods: {
    getSymbol(language) {
      return this.svg[language.toLowerCase()]
    }
  }
}
</script>

<style lang="sass" scoped>
.ranking-item
  $symbol-size: 128px
  // width: 300px

  .symbol
    height: $symbol-size
    width: $symbol-size
</style>

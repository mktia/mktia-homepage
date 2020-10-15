<template lang="pug">
  div
    div.py-4.source
      div.container
        span while(true) {
        br
        span.ml-2rem var isSuccess = challenge();
        br
        span.ml-2rem if(isSuccess) {
        br
        span.ml-4rem break;
        br
        span.ml-2rem }
        br
        span }
        br
  .container.my-4.py-4
    h2.mb-4 Hello world!!
    p.text-mono-5.text-justify.ff-yg.fs-11(
      v-for='sentence in getIntroduction()'
    ) {{ sentence }}
          v-for="(language, index) in getLanguage()" 
          :rank="index+1" 
          :language="language" 
          v-show="index < 3" 
          key=`lang${index}`
        )
      div.pt-4.pb-4
        p.text-mono-5.text-justify(v-for="sentence in getTopSentences()") {{ sentence }}
      div.button.text-capitalize.mx-auto
        nuxt-link.link.pl-2.py-3(to="/product")
          span portfolio
          RightArrowSVG.svg
</template>

<script>
import RightArrowSVG from '@/assets/svg/right-arrow.svg'
import RankingItem from '@/components/atoms/RankingItem'
import SectionTitleItem from '@/components/atoms/SectionTitleItem'
import DATA from '@/static/data.json'

export default {
  components: {
    RankingItem,
    RightArrowSVG,
    SectionTitleItem
  },
  head() {
    return {
      title: 'mktia is',
      meta: [{ hid: 'description', name: 'description', content: 'Home page' }]
    }
  },
  data() {
    return {
      isShow: true
    }
  },
  created() {
    setInterval(() => {
      this.isShow = !this.isShow
    }, 500)
  },
  methods: {
    getIntroduction() {
      return DATA.home.introduction
    },
    getLanguage() {
      return DATA.profile.language
    },
    getTopSentences() {
      return DATA.home.sentences
    }
  }
}
</script>

<style lang="sass" scoped>
@use "sass:map"

$breakpoints: ('sm': 'screen and (max-width: 420px)')

@mixin mq($breakpoint)
  @media #{map-get($breakpoints, $breakpoint)}
    @content

.source
  position: relative
  background-color: #222
  font-size: 1.4rem
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
  line-height: 31.5px
  white-space: pre

  *
    color: turquoise

  .ml-2rem
    margin-left: 2rem

  .ml-4rem
    margin-left: 4rem

@include mq(sm)
  .source
    font-size: 1rem

.blink-transition-enter-active
.blink-transition-leave-active
  transition: all .2s ease

.blink-transition-enter
.blink-transition-leave-to
  opacity: 0

$main-color: #444
$hover-color: turquoise
.button
  position: relative
  border: solid 1px $main-color
  font-family: Garamond
  text-decoration: none
  width: 192px

  &:hover
    border: solid 1px $hover-color

    svg
      fill: $hover-color

  svg
    position: absolute
    top: 50% - 16
    right: 8px
    height: 16px
    fill: $main-color

  .link
    display: block
    color: $main-color
    height: 100%
    width: 100%

    &:hover
      color: $hover-color
      text-decoration: none
</style>

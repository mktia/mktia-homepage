<template lang="pug">
  div.container
    SectionTitleItem.mt-4.mb-2(jaJp="私はこんな人" enUs="About Me")
    div.w-75.mx-auto.py-2
      p.text-justify(v-for="item in getIntroductionData()") {{ item }}
    SectionTitleItem.mt-5.mb-2(jaJp="スキルセット" enUs="Skillset")
    div.w-75.mx-auto.py-2
      p.mb-0(v-for="item in getDevData()") {{ item.join(' / ') }}
    SectionTitleItem.mt-5.mb-2(jaJp="各種アカウント" enUs="Social")
    div.w-75.mx-auto.py-2
      p(v-for="value, key in getSNSData()")
        font-awesome-icon(:icon="['fab', key.toLowerCase()]")
        span.social-title.ml-1 {{ key }}
        b-link.sns-link(:href="value") {{ value }}
</template>

<script>
import DATA from '~/static/data.json'
import SectionTitleItem from '@/components/atoms/SectionTitleItem'

export default {
  head() {
    return {
      title: 'About | mktia is',
      meta: [{ hid: 'description', name: 'description', content: 'About page' }]
    }
  },
  components: {
    SectionTitleItem
  },
  methods: {
    getDevData() {
      return DATA.profile.dev
    },
    getIntroductionData() {
      return DATA.profile.introduction
    },
    getSNSData() {
      return DATA.profile.sns
    }
  }
}
</script>

<style lang="sass" scoped>
.social-title
  position: absolute

.sns-link
  position: relative
  left: 64px
  border-bottom: dotted 1px #777
  color: #777

  &:hover
    border-bottom: dotted 1px turquoise
    color: turquoise
    text-decoration: none
</style>

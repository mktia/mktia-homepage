<template lang="pug">
.container
  SectionTitleItem.mt-4.mb-2(jaJp='私はこんな人', enUs='About Me')
  .w-75.mx-auto.py-2
    p.text-justify(v-for='item in getIntroductionData()') {{ item }}
  SectionTitleItem.mt-5.mb-2(jaJp='スキルセット', enUs='Skillset')
  .w-75.mx-auto.py-2
    p.text-justify.mb-0(v-for='item in getDevData()') {{ item.join(" / ") }}
  SectionTitleItem.mt-5.mb-2(jaJp='各種アカウント', enUs='Social')
  .w-75.mx-auto.py-2
    p(v-for='(value, key) in getSNSData()').text-center.text-md-left
      font-awesome-icon(:icon='["fab", key.toLowerCase()]')
      span.mx-2 {{ key }}
      b-link.sns-link(:href='value') {{ value.split('//')[1] }}
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
.sns-link
  border-bottom: dotted 1px #777
  color: #777

  &:hover
    border-bottom: none
    color: turquoise
    text-decoration: none
</style>

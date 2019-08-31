<template lang="pug">
  div.container
    h4.mt-4.mb-3.text-sub ABOUT ME
    div.text-main
      p.text-justify(v-for="item in getIntroductionData()") {{ item }}
    h4.mt-5.mb-3.text-sub SKILLSET
    div.text-main
      p.mb-0(v-for="item in getDevData()") {{ item.join(' / ') }}
    h4.mt-5.mb-3.text-sub SOCIAL
    p.text-main(v-for="value, key in getSNSData()")
      span.social-title {{ key }}
      b-link.sns-link(:href="value") {{ value }}
</template>

<script>
import DATA from '~/static/data.json'

export default {
  head: {
    title: 'About | MKTIA.COM',
    meta: [{ hid: 'description', name: 'description', content: 'About page' }]
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

  *:hover
    text-decoration: none
</style>

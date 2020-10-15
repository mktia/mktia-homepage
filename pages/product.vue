<template lang="pug">
.container
  SectionTitleItem.mt-4.mb-2(jaJp='だいたいブログ', enUs='Web site')
  .mb-5
    p.text-center(
      v-for='(sentence, index) in getWebsiteSentences()',
      :key='"website-sentence-" + index'
    ) {{ sentence }}
  .product-group.row
    product-card.col-sm-4.pb-3(
      v-for='product in getWebSiteData()',
      :key='product.name',
      :name='product.name',
      :description='product.description',
      :imageURL='require(`~/static/product-image/${product.image}`)',
      :coding='product.coding',
      :appType='product.type',
      :link='product.url'
    )
  SectionTitleItem.mt-5.mb-3(jaJp='犠牲となったアプリ', enUs='Legacy')
  .mb-5
    p.text-center(
      v-for='(sentence, index) in getLegacySentences()',
      :key='"legacy-sentence-" + index'
    ) {{ sentence }}
  .product-group.row
    product-card.col-sm-4.pb-3(
      v-for='product in getLegacyData()',
      :key='product.name',
      :name='product.name',
      :description='product.description',
      :imageURL='require(`~/static/product-image/${product.image}`)',
      :coding='product.coding',
      :appType='product.type',
      :link='product.url'
    )
</template>

<script>
import ProductCard from '~/components/atoms/ProductCard'
import SectionTitleItem from '@/components/atoms/SectionTitleItem'

import DATA from '~/static/data.json'

export default {
  head() {
    return {
      title: 'Portfolio | mktia is',
      meta: [
        { hid: 'description', name: 'description', content: 'Portfolio page' }
      ]
    }
  },
  components: {
    ProductCard,
    SectionTitleItem
  },
  methods: {
    getLegacySentences() {
      return DATA.product.legacy.sentences
    },
    getWebsiteSentences() {
      return DATA.product.website.sentences
    },
    getWebSiteData() {
      return DATA.website
    },
    getLegacyData() {
      return DATA.legacy
    }
  }
}
</script>

<style lang="sass" scoped>
.carousel-img
  width: auto
  height: 300px !important
  max-height: 300px !important
</style>

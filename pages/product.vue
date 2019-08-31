<template lang="pug">
  div.container
    //- h2 PRODUCT
    h2.mt-4.mb-3.text-sub WEBSITE
    b-card-group(
      columns
    )
      product-card(
        v-for="product in getWebSiteData()"
        :key="product.name"
        :name="product.name"
        :description="product.description"
        :imageURL="require(`~/static/product-image/${product.image}`)"
        :coding="product.coding"
        :appType="product.type"
        :link="product.url"
      )
    h2.mt-5.mb-3.text-sub LEGACY
    p.text-sub 犠牲となっていったアプリの数々
    b-card-group(
      columns
    )
      product-card(
        v-for="product in getLegacyData()"
        :key="product.name"
        :name="product.name"
        :description="product.description"
        :imageURL="require(`~/static/product-image/${product.image}`)"
        :coding="product.coding"
        :appType="product.type"
        :link="product.url"
      )
</template>

<script>
import ProductCard from '~/components/atoms/ProductCard'

import DATA from '~/static/data.json'

export default {
  head: {
    title: 'Portfolio | MKTIA.COM',
    meta: [
      { hid: 'description', name: 'description', content: 'Portfolio page' }
    ]
  },
  components: {
    ProductCard
  },
  methods: {
    getWebSiteData() {
      return DATA.website
    },
    getLegacyData() {
      return DATA.legacy
    }
  }
}
</script>

<style lang="sass" scoped></style>

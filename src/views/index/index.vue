<template>
  <div>
    <Header></Header>
    <Charts></Charts>
    <Chartstab/>
    <Banner/>
    <Recommend/>
  </div>
</template>

<script setup>
  import {ref} from 'vue'
  import Header from './header.vue'
  import Charts from './charts.vue'
  import Chartstab from './chartstab.vue';
  import Banner from './banner.vue';
  import Recommend from './recommend.vue';
</script>

<style lang='scss' scoped>

</style>
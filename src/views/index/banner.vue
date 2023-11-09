<template>
  <div class="">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="v in bannerList" :key="v.id">
        <img :src="`/src/assets/images/${v.img_url}`" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import {ref} from 'vue'

let bannerList = ref([
  {id:1,img_url:'header.jpg'},
  {id:2,img_url:'header.jpg'},
  {id:3,img_url:'header.jpg'},
  {id:4,img_url:'header.jpg'}
])
</script>

<style scoped>

</style>
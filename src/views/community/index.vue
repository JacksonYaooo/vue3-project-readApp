<template>
  <div class="community">
    <div class="community-hd">
      <div class="community-hd-item">
        <h3>推荐</h3>
      </div>
    </div>
    <div class="community-body">
      <div class="community-body-item" v-for="(v, i) in community" :key="i">
        <div class="community-item-hd">
          <img :src="`/src/assets/images/${v.hd_img}`" alt="">
          <p>{{ v.name }}</p>
          <span>{{ v.from }}</span>
          <div class="community-share">
            <i class="iconfont icon-gengduo"></i>
          </div>
        </div>
        <div class="community-item-title">
          为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?
        </div>
        <div class="community-item-img">
          <img v-for="(item,i) in v.img_url" :key="i" :src="`/src/assets/images/${item}`" alt="">
        </div>
        <div class="community-item-review">
          <span><i class="iconfont icon-fenxiangzhuanfa"></i>111</span>
          <span><i class="iconfont icon-pinglun1"></i>222</span>
          <span><i class="iconfont icon-aixin"></i>333</span>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
let community = ref([
  {
    name: '小说圈1',
    title: '为什么为什就',
    from: '作者',
    hd_img: 'h.jpg',
    img_url: ['gold.png', 'h.jpg', 'h.jpg'],
  },
  {
    name: '小说圈2',
    title: '为什么为什就',
    from: '作者',
    hd_img: 'h.jpg',
    img_url: ['h.jpg', 'h.jpg'],
  },
  {
    name: '小说圈3',
    title: '为什么为什就',
    from: '作者',
    hd_img: 'h.jpg',
    img_url: ['h.jpg'],
  },
  {
    name: '小说圈4',
    title: '为什么为什就',
    from: '作者',
    hd_img: 'h.jpg',
    img_url: [],
  },
  {
    name: '小说圈5',
    title: '为什么为什就',
    from: '作者',
    hd_img: 'h.jpg',
    img_url: ['h.jpg', 'h.jpg', 'h.jpg'],
  },
])
</script>

<style lang='scss' scoped></style>
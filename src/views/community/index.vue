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
            <van-cell class="iconfont icon-gengduo" @click="showShare = true" />
          </div>
        </div>
        <div class="community-item-title">
          为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?为什么会这样?
        </div>
        <div class="community-item-img">
          <img v-for="(item, i) in v.img_url" :key="i" :src="`/src/assets/images/${item}`" alt="">
        </div>
        <div class="community-item-review">
          <span><i class="iconfont icon-fenxiangzhuanfa"></i>111</span>
          <span><i class="iconfont icon-pinglun1"></i>222</span>
          <span><i class="iconfont icon-aixin"></i>333</span>
        </div>
      </div>
      <!-- 分享面板要写在遍历的外层 -->
      <van-share-sheet v-model:show="showShare" title="立即分享给好友" :options="options" />
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
const showShare = ref(false);
const options = [
  [
    { name: '微信', icon: 'wechat' },
    { name: '朋友圈', icon: 'wechat-moments' },
    { name: '微博', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' },
  ],
  [
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
    { name: '小程序码', icon: 'weapp-qrcode' },
  ],
];
</script>

<style lang='scss' scoped></style>
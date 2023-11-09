<template>
  <!-- 开屏广告 -->
  <div class="spread" v-show="adBack">
    <span class="jump" @click="jump">点击跳转<b>{{ n }}</b></span>
  </div>
  <div class="container">
    <Header></Header>
    <Charts></Charts>
    <Chartstab />
    <Banner />
    <Recommend />
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import Header from './header.vue'
import Charts from './charts.vue'
import Chartstab from './chartstab.vue';
import Banner from './banner.vue';
import Recommend from './recommend.vue';

let adBack = ref('true'); //开屏广告的显示与隐藏,true为显示
let n = ref(5); //默认时长
let timer = null;
function play() {
  n.value--;
  if (n.value == 0) {
    adBack.value = false
  }
}
function autoPlay(){
  timer = setInterval(play,1000); //定时器1s
}
onMounted(()=>{
  autoPlay()
})
// 点击跳转时退出开屏广告
function jump(){
  adBack.value = false;
  clearInterval(timer)
}


</script>

<style lang='scss' scoped></style>
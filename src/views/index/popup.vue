<template>
  <div>
    <van-cell title="热门分类" is-link @click="showPopup" />

    <van-popup closeable
      close-icon-position="top-left"
      v-model:show="show"
      position="right"
      :style="{ width: '70%', height: '100%' }">
      <div class="popupList">
        <h4>热门分类</h4>
        <ul>
          <li v-for="(v,i) in popupList" :key="i" :class="n==i?'active':''" @click="n=i">{{ v }}</li>
        </ul>
      </div>


    </van-popup>
  </div>
</template>

<script setup>
import { ref } from 'vue';

  const show = ref(false);
  const showPopup = () => {
    show.value = true;
  }

  const popupList = ref(['首页','都市','历史','游戏','悬疑',])
  const n = ref(0)
</script>

<style lang='scss' scoped>

</style>
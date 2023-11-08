<template>
  <div>
    <van-cell title="热门分类" is-link @click="showPopup" />

    <van-popup closeable
      close-icon-position="top-left"
      v-model:show="show"
      position="right"
      :style="{ width: '30%', height: '100%' }"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

  const show = ref(false);
  const showPopup = () => {
    show.value = true;
  }
</script>

<style lang='scss' scoped>

</style>
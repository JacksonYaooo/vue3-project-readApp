<template>
  <div class="like">
    <van-cell title="设置喜好" is-link @click="showPopup" />
    <van-popup v-model:show="show"
     round closeable close-icon-position="top-left"
     close-icon="arrow-down"
     position="bottom"
      :style="{ height: '60%' }">
      1111
    </van-popup>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false);
const showPopup = () => {
  show.value = true;
};
</script>

<style scoped></style>
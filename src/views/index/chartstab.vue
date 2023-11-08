<template>
  <div class="chartstab">
    <van-tabs v-model:active="active">
      <van-tab :title="v.title" v-for="(v,i) in chartstab" :key="i">{{ v.content }}</van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const active = ref(0);
const chartstab = ref([
  {title:'全部',content:'内容1'},
  {title:'都市',content:'内容2'},
  {title:'历史',content:'内容3'},
  {title:'科幻',content:'内容4'},
  {title:'全部',content:'内容5'},
  {title:'都市',content:'内容6'},
])
</script>

<style scoped>

</style>
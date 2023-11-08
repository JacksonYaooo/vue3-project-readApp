<template>
  <div class="chartstab">
    <van-tabs v-model:active="active">
      <van-tab :title="v.title" v-for="(v,i) in chartstab" :key="i">
        <div class="chartstab-content">
          <div class="chartstab-item">
            <div class="chartstab-list" v-for="(item,i) in v.content" :key="i">
              {{ item.name }}
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const active = ref(0);
const chartstab = ref([
  {title:'全部',content:[{name:'内容1',},{name:'内容a',},{name:'内容b',},{name:'内容1A',},{name:'内容Aa',},{name:'内容Ab',},]},
  {title:'都市',content:[{name:'内容1',},{name:'内容a',},{name:'内容b',},]},
  {title:'历史',content:[{name:'内容1',},{name:'内容a',},{name:'内容b',},]},
  {title:'科幻',content:[{name:'内容1',},{name:'内容a',},{name:'内容b',},]},
  {title:'全部',content:[{name:'内容1',},{name:'内容a',},{name:'内容b',},]},
  {title:'都市',content:[{name:'内容1',},{name:'内容a',},{name:'内容b',},]},
])
</script>

<style scoped>

</style>
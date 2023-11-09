<template>
  <div class="like">
    <van-cell title="设置喜好" is-link @click="showPopup" />
    <van-popup v-model:show="show" round closeable close-icon-position="top-left" close-icon="arrow-down"
      position="bottom" :style="{ height: '60%' }">
      <div class="like-list">
        <h4>请选择你的喜好：</h4>
        <p>请选择你喜欢的分类：(已选择 个)</p>
        <ul>
          <li v-for="(v, i) in likeList" :key="v.id" @click="v.flag=!v.flag" 
          :class=' v.flag ? "addclass" : "" '>{{ v.name }}</li>
        </ul>
      </div>
    </van-popup>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false);
const showPopup = () => {
  show.value = true;
};
const likeList = ref([
  { name: '都市', id: 1, flag: false },
  { name: '科幻', id: 2, flag: false },
  { name: '体育', id: 3, flag: false },
  { name: '历史', id: 4, flag: false },
  { name: '游戏', id: 5, flag: false },
  { name: '外卖', id: 6, flag: false },
  { name: '鉴宝', id: 7, flag: false },
  { name: '悬疑', id: 8, flag: false },
  { name: '仙侣', id: 9, flag: false },
  { name: '职场', id: 10, flag: false },
  { name: '校园', id: 11, flag: false },
  { name: '女生', id: 12, flag: false },
  { name: '男生', id: 13, flag: false }
])
const n = ref(0)

</script>

<style scoped></style>
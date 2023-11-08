<template>
  <div class="chartstab">
    <van-tabs v-model:active="active">
      <van-tab :title="v.title" v-for="(v, i) in chartstab" :key="i">
        <div class="chartstab-content">
          <div class="chartstab-item">
            <div class="chartstab-list" v-for="(item, i) in v.content" :key="i">
              <div class="chartstab-img">
                <img :src="`/src/assets/images/${item.img_url}`" alt="">
              </div>
              <div class="chartstab-title">
                <h4>{{ item.name }}</h4>
                <p>{{ item.describe }}</p>
                <p>{{ item.num }}</p>
              </div>
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
  {
    title: '全部', content:
      [
        { name: '内容1', img_url: '1.jpg', describe: '烽火戏诸侯', num: '影视·连载·1153万字' },
        { name: '内容1', img_url: '2.jpg', describe: '烽火戏诸侯', num: '影视·连载·1153万字' },
        { name: '内容1', img_url: '3.jpg', describe: '烽火戏诸侯', num: '影视·连载·1153万字' },
        { name: '内容1', img_url: '4.jpg', describe: '烽火戏诸侯', num: '影视·连载·1153万字' },
        { name: '内容1', img_url: '5.jpg', describe: '烽火戏诸侯', num: '影视·连载·1153万字' },
        { name: '内容1', img_url: '6.jpg', describe: '烽火戏诸侯', num: '影视·连载·1153万字' },
        { name: '内容1', img_url: '7.jpg', describe: '烽火戏诸侯', num: '影视·连载·1153万字' },
        { name: '内容1', img_url: '8.jpg', describe: '烽火戏诸侯', num: '影视·连载·1153万字' },
        { name: '内容1', img_url: '1.jpg', describe: '烽火戏诸侯', num: '影视·连载·1153万字' },
        { name: '内容1', img_url: '1.jpg', describe: '烽火戏诸侯', num: '影视·连载·1153万字' },
        { name: '内容1', img_url: '1.jpg', describe: '烽火戏诸侯', num: '影视·连载·1153万字' },
        { name: '内容1', img_url: '1.jpg', describe: '烽火戏诸侯', num: '影视·连载·1153万字' },
      ]
  },
  { title: '都市', content: [{ name: '内容1', }, { name: '内容a', }, { name: '内容b', },] },
  { title: '历史', content: [{ name: '内容1', }, { name: '内容a', }, { name: '内容b', },] },
  { title: '科幻', content: [{ name: '内容1', }, { name: '内容a', }, { name: '内容b', },] },
  { title: '全部', content: [{ name: '内容1', }, { name: '内容a', }, { name: '内容b', },] },
  { title: '都市', content: [{ name: '内容1', }, { name: '内容a', }, { name: '内容b', },] },
])
</script>

<style scoped></style>
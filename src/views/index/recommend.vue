<template>
  <div class="recommend">
    <div class="recommend-like">
      <h3>为你推荐</h3>
      <p>设置喜好</p>
    </div>
    <div class="recommend-list">
      <ul>
        <li v-for="(v,i) in recommmendList" :key="i">
          <div class="recommend-img">
            <img :src="`/src/assets/images/${v.img_url}`" alt="">
          </div>
          <div class="recommend-title">
            <h4>{{v.title}}</h4>
            <p class="recommend-title-author">{{v.author}}</p>
            <p class="recommend-title-desc">{{v.desc}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

let recommmendList = ref([
  {title:'剑来',img_url:'1.jpg',author:'作者名1',desc:'内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示'},
  {title:'剑来',img_url:'1.jpg',author:'作者名2',desc:'内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示'},
  {title:'剑来',img_url:'1.jpg',author:'作者名3',desc:'内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示'},
  {title:'剑来',img_url:'1.jpg',author:'作者名4',desc:'内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示'},
  {title:'剑来',img_url:'1.jpg',author:'作者名5',desc:'内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示内容展示'},
])
</script>

<styl scoped>

</styl>
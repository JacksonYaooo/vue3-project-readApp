<template>
  <div class="footer">
    <div class="footer-seat">
      <div class="footer-list">
        <ul>
          <li v-for="(item, index) in footerList" :key="index">
            <i class="iconfont" :class="item.icon"></i>
            <p>{{ item.title }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
let footerList = ref([
  { title: "书城", icon: "icon-ziliaozhongxin" },
  { title: "社区", icon: "icon-shequ-jihuo" },
  { title: "福利", icon: "icon-a-014_liwufuli" },
  { title: "我的", icon: "icon-geren" },
]);
</script>

<style lang="scss" scoped></style>

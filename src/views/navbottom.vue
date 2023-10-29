<template>
  <div class="footer">
    <div class="footer-seat">
      <div class="footer-list">
        <ul>
          <li v-for="(item, index) in footerList" :key="index">
            <router-link :to="item.path">
              <i class="iconfont" :class="item.icon"></i>
              <p>{{ item.title }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let footerList = ref([
  { title: "书城", icon: "icon-ziliaozhongxin", path: "/index" },
  { title: "社区", icon: "icon-shequ-jihuo", path: "/community" },
  { title: "福利", icon: "icon-a-014_liwufuli", path: "/welfare" },
  { title: "我的", icon: "icon-geren", path: "/my" },
]);
</script>

<style lang="scss" scoped></style>

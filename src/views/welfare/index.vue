<template>
  <div class="welfare">
    <div class="welfare-hd">
      <h3>登录后现金红包天天领</h3>
      <router-link to="/login">
        <button>登录查看</button>
      </router-link>
    </div>
    <div class="welfare-body">
      <div class="welfare-body-item1">
        <h4>做任务 赚金币</h4>
        <p class="welfare-text1">看视频赚2000金币</p>
        <p class="welfare-text2">每次得200金币,可重复</p>
        <button class="btn">去观看</button>
      </div>
      <div class="welfare-body-item2">
        <p class="welfare-text1">每日阅读任务</p>
        <p class="welfare-text2">持续阅读可得海量金币,看越多赚越多</p>
        <button class="btn2">去看书</button>
        <van-steps :active="active" active-color="#e76c3b">
          <van-step v-for="(v,i) in steps" :key="i">
            <div class="welfare-icon">
              <img src="@/assets/images/gold.png" alt="">
              <span>{{v.numm}}</span>
            </div>
            <p>{{v.name}}</p>
          </van-step>
        </van-steps>
      </div>
      <div class="welfare-body-item3">3</div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const steps = ref([
  {name:'3分钟',numm:'100'},
  {name:'5分钟',numm:'120'},
  {name:'30分钟',numm:'150'},
  {name:'120分钟',numm:'170'},
  {name:'180分钟',numm:'200'},
])
</script>

<style scoped>
</style>
<template>
  <div class="my">
    <div class="my-hd">
      <div class="my-hd-login">
        <div class="my-hd-img">
          <img src="@/assets/images/h.jpg" alt="">
        </div>
        <div class="my-hd-item">
          <div class="tourist">游客</div>
          <button>点击登录</button>
        </div>
      </div>
    </div>
    <div class="my-body">
      <div class="my-body-item1">
        <ul>
          <li>
            <i class="iconfont icon-biyan"></i>
            <p>我的金币</p>
          </li>
          <li>
            <i class="iconfont icon-biyan"></i>
            <p>我的金币</p>
          </li>
          <li>
            <i class="iconfont icon-biyan"></i>
            <p>我的金币</p>
          </li>
        </ul>
      </div>
      <div class="my-body-item2">
        <ul>
          <li v-for="(v, i) in myitem2" :key="i">
            <i class="iconfont" :class="v.icon"></i>
            <p>{{ v.title }}</p>
          </li>
        </ul>
      </div>
      <div class="my-body-item3">
        <ul>
          <li v-for="(v, i) in myitem3" :key="i">
            <i class="iconfont" :class="v.icon"></i>
            <p>{{ v.title }}</p>
          </li>
        </ul>
      </div>
      <div class="my-body-item4">
        <ul>
          <li v-for="(v, i) in myitem4" :key="i">
            <p>{{ v }}</p>
            <i class="iconfont icon-you"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let myitem2 = ref([
  { title: '阅读历史', icon: 'icon-shouye' },
  { title: '金选票', icon: 'icon-dianyingpiao' },
  { title: '书友圈', icon: 'icon-quanquanmendianb' },
  { title: '消息通知', icon: 'icon-xiaoxitongzhi' },
])
let myitem3 = ref([
  { title: '我的评论', icon: 'icon-shouye' },
  { title: '阅读喜好', icon: 'icon-dianyingpiao' },
  { title: '帮助与反馈', icon: 'icon-quanquanmendianb' },
  { title: '邀请好友', icon: 'icon-xiaoxitongzhi' },
  { title: '我的评论', icon: 'icon-shouye' },
  { title: '阅读喜好', icon: 'icon-dianyingpiao' },
  { title: '帮助与反馈', icon: 'icon-quanquanmendianb' },
  { title: '邀请好友', icon: 'icon-xiaoxitongzhi' },
])
let myitem4 = ref([
  '消息中心', '奖品中心', '已购书籍', '意见反馈'
])
</script>

<style lang='scss' scoped></style>
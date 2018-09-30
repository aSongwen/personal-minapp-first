<template>
  <div class="page">
    <header-nav></header-nav>

    <!-- 这里是需要锚点定位到的位置，来自于各个子组件，用小程序的scroll-view组件实现 -->
    <scroll-view scroll-y :scroll-into-view="toView">
      <!-- 轮播图index -->
      <swiper id="inToView-index" style="height: 210px; margin-top: 160rpx" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
        <block v-for="item in imgUrls" :key="item">
          <swiper-item>
            <image :src="item" class="slide-image" mode="widthFix " width="375" height="150"/>
          </swiper-item>
        </block>
      </swiper>
      <!-- 服务介绍server -->
      <server id="inToView-server"></server>
      <!-- 客户案例case -->
      <case-com id="inToView-case"></case-com>
      <!-- 关于我们about -->
      <about id="inToView-about"></about>
    </scroll-view>
    
    <connection></connection>
    <footer-com></footer-com>
  </div>
</template>

<script>
import headerNav from '@/components/headerNav'
import server from '@/components/server'
import caseCom from '@/components/case'
import about from '@/components/about'
import connection from '@/components/connection'
import footerCom from '@/components/footer'

export default {
  data () {
    return {
      imgUrls: [
        require('@/images/banner4.png'),
        require('@/images/banner1.jpg'),
        require('@/images/banner2.jpg'),
        require('@/images/banner3.jpg')
      ],
      toView: 'inToView-index'
    }
  },

  components: {
    headerNav,
    server,
    caseCom,
    about,
    connection,
    footerCom
  },

  methods: {},

  created () {}
}
</script>

<style lang="scss" scoped>
.page {
  background-color: #f0f0f0;
}
.slide-image {
  width: 100%;
  // height: 210px;
}
</style>


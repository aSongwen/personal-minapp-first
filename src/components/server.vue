<template>
  <div class="container server">
    <title-com :title="title" :describe="describe"></title-com>
    <div class="server-classify">
      <div class="item" v-for="item in classify" :key="item">
        <img :src="item.img">
        <p>{{item.txt}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import titleCom from './title'

export default {
  data () {
    return {
      title: '服务介绍',
      describe: '专注于视觉呈现、品牌策划、互动体验，结合了多类媒介，平台及技术。',
      classify: [{
        img: require('@/images/web.png'),
        txt: '高品质网站建设'
      }, {
        img: require('@/images/shopping.png'),
        txt: '商城网站建设'
      }, {
        img: require('@/images/design.png'),
        txt: '平面设计'
      }, {
        img: require('@/images/P2P.png'),
        txt: 'P2P内容分发'
      }, {
        img: require('@/images/weixin.png'),
        txt: '微信公众号开发'
      }, {
        img: require('@/images/app.png'),
        txt: 'App开发'
      }, {
        img: require('@/images/service.png'),
        txt: '云服务器开发'
      }, {
        img: require('@/images/system.png'),
        txt: '系统平台开发'
      }, {
        img: require('@/images/mall.png'),
        txt: '商城 / 网站装饰'
      }, {
        img: require('@/images/email.png'),
        txt: '网联天下邮'
      }]
    }
  },
  components: {
    titleCom
  }
}
</script>

<style lang="scss" scoped>
.server{
  background: #ffffff;
  text-align: center;
  .server-classify {
    .item {
      width: 50%;
      display: inline-block;
      img {
        width: 80px;
        height: 80px;
      }
    }
  }
}
</style>



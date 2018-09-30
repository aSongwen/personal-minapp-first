<template>
  <div class="case">
    <title-com :title="title" :describe="describe"></title-com>
    <div class="case-classify">
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
      title: '成功案例',
      describe: '我们相信，只有每个环节100%满意才等于客户满意，我们一直在努力！',
      classify: [{
        img: require('@/images/science.jpg'),
        txt: '网络科技公司'
      }, {
        img: require('@/images/zhinengjiaju.jpg'),
        txt: '智能家居'
      }, {
        img: require('@/images/wuliu.jpg'),
        txt: '中国物流'
      }, {
        img: require('@/images/yimeiju.jpg'),
        txt: '宜美居家具有限公司'
      }, {
        img: require('@/images/caisui.jpg'),
        txt: '财税--代理记账'
      }, {
        img: require('@/images/hunsha.jpg'),
        txt: '纽约婚纱'
      }]
    }
  },
  components: {
    titleCom
  }
}
</script>

<style lang="scss" scoped>
.case {
  text-align: center;
  background-color: #f0f0f0;
  .case-classify {
    padding: 0 15px;
    .item {
      margin-bottom: 20px;
      img {
        width: 100%;
        height: 210px;
      }
      p {
        margin: 0;
        line-height: 45px;
      }
    }
  }
}
</style>

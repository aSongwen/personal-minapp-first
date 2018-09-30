<template>
  <div class="about">
    <title-com :title="title" :describe="describe"></title-com>
    <div class="about-main">
      <h2>武汉佰讯科技</h2>
      <p>武汉佰讯，国内知名云计算技术和服务提供商。可信赖的云计算产品家族，以创新、开放、高性能的场景化云服务和大数据服务，助力产业升级。个性化行业解决方案针对行业特征及细分业务场景深度定制，一站式引领业务升级。</p>
      <p>佰讯科技有限公司采用专业标准化的网站运维外包模式,为企业提供网站托管服务，以性价比极高的方式用一流的互联网团队为企业提供持续、高品质的内容、设计、技术建站开发、网站全网营销服务和竞价托管、微信代运营等服务。</p>
      <img :src="img">
    </div>
  </div>
</template>

<script>
import titleCom from './title'
export default {
  data () {
    return {
      title: '关于我们',
      describe: '佰讯科技，掌握IT技术，创造行业精品',
      img: require('@/images/team.jpg')
    }
  },
  components: {
    titleCom
  }
}
</script>

<style lang="scss" scoped>
.about {
  text-align: center;
  background-color: #dce3eb;
  padding-bottom: 40px;
  .about-main {
    padding: 0 15px;
    h2 {
      font-size: 14px;
      font-weight: 900;
    }
    p {
      font-size: 12px;
      text-align: left;
    }
    img {
      width: 100%;
      height: 195px;
    }
  }
}
</style>


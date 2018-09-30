<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <div class="top">
          <img src="../images/logo.png">
          <button @click="collapse">
            <span v-for="item in 3" :key="item" class="icon-bar"></span>
          </button>
        </div>
        <div class="bottom" v-show="isCollapse" :animation="animationData">
          <!-- <ul>
            <li v-for="item in navItem" :key="item" @click="skip">{{item.txt}}</li>
          </ul> -->
          <!-- <scroll-view scroll-y :scroll-into-view="toView">
            <view class="item" v-for="item in navItem" :key="item" :id="'inToView-' + item.id">{{item.txt}}</view>
          </scroll-view> -->

          
          <!-- 这里是相当于自动定位，绑定各个需要定位到的id -->
          <view class="item" v-for="item in navItem" :key="item" :id="item.id">{{item.txt}}</view>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navItem: [{
        txt: '首页',
        id: 'index',
        url: ''
      }, {
        txt: '服务介绍',
        id: 'server',
        url: ''
      }, {
        txt: '成功案例',
        id: 'case',
        url: ''
      }, {
        txt: '关于我们',
        id: 'about',
        url: ''
      }],
      toView: 'index',
      isCollapse: false,
      animationData: {},
      animation: ''
    }
  },
  methods: {
    collapse () {
      this.isCollapse = !this.isCollapse
      const animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease'
      })
      this.animation = animation
      animation.height(1000)
      this.animationData = animation.export()
    },
    skip (e) {
      // wx.navigateTo({url})
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #272e36;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  .top {
    position: relative;
    img {
      width: 80px;
      height: 80px;
      padding: 0 15px;
    }
    button {
      padding: 6px 5px 0;
      margin-right: 15px;
      height: 30px;
      position: absolute;
      top: 0;
      right: 15px;
      bottom: 0;
      margin: auto;
      .icon-bar {
        background-color: #888;
        display: block;
        width: 22px;
        height: 2px;
        border-radius: 1px;
        margin-bottom: 5px;
      }
    }
  }
  .bottom {
    border-top: 1px solid #e7e7e7;
    margin: 0 -15px;
    li, .item {
      padding: 0 15px;
      color: #fff;
      font-size: 14px;
      height: 80px;
      line-height: 80px;
    }
  }
}
</style>



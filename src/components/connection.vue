<template>
  <div class="connection">
    <div class="connection-main">
      <div class="container">
        <div class="msg">
          <h1>联系我们</h1>
          <p>卓越的创意思维，为您创造出一流的品牌互联网形象！</p>
          <address>
            <p>地址:湖北省武汉市江夏区高新二路79附近</p>
            <p>联系电话：17508640221</p>
            <p>邮箱:HELLO@BAIXUNTECH.com</p>
            <p>
              <button>加入我们</button>
            </p>
          </address>
        </div>
        <div class="form">
          <form>
            <div>
              <input class="ipt" type="text" placeholder="您的姓名">
            </div>
            <div>
              <input class="ipt" type="text" placeholder="您的姓名">
            </div>
            <div>
              <input class="ipt" type="text" placeholder="您的姓名">
            </div>
            <div>
              <textarea class="textarea" id="" cols="30" rows="4" placeholder="留言内容"></textarea>
            </div>
            <div>
              <button class="form-control">提交</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
@import '../style/map.scss';
.connection {
  background-size: cover;
  .connection-main {
    padding: 90px 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
  .msg {
    color: #ffffff;
    p {
      font-size: 12px;
      button {
        color: #ffffff;
        background-color: transparent;
        border-color: #ffffff;
        font-size: 14px;
        display: inline-block;
      }
    }
  }
  .form {
    div {
      padding: 0 15px;
      input {
        border: none;
        border-radius: 0;
        height: 50px;
      }
      .ipt {
        height: 34px;
      }
      .textarea {
        height: 100px;
        width: auto;
      }
      .ipt, .textarea {
        display: block;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        margin-bottom: 20px;
      }
      .form-control {
        background: #40D2B1;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        text-align: center;
        height: 50px;
        line-height: 50px;
        border-radius: 0;
      }
    }
  }
}
</style>


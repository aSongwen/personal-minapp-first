<template>
  <div class="container">
    <h1>{{title}}</h1>
    <p>{{describe}}</p>
    <img :src="img">
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: require('@/images/segementation.png')
    }
  },
  props: ['title', 'describe']
}
</script>

<style lang="scss" scoped>
h1{
  padding: 24px 0 0;
}
img {
  height: 10px;
  width: 80px;
  margin-bottom: 20px;
}
</style>


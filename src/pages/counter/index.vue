<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <!-- <button @click="decrement">-</button> -->
    </p>

    <a href="/pages/index/main" class="home">去往首页</a>
  </div>
</template>

<script>
// Use Vuex
// import store from './store'
import store from '@/store/index'
import { mapMutations } from 'vuex'

export default {
  computed: {
    count () {
      return store.state.test.count
    }
  },
  methods: {
    ...mapMutations(['INCREASE']),
    increment () {
      // store.commit('INCREASE', { num: 1 })
      this.INCREASE({ num: 1 })
    }
    // decrement () {
    //   store.commit('decrement')
    // }
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>

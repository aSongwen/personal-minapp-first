<template>
  <div class="container">

    <picker mode="date" :value="date" start="2015-09-01" end="2025-09-01" @change="bindDateChange">
      <view class="picker">
        当前选择: {{date}}
      </view>
    </picker>

  </div>
</template>

<script>
export default {
  data () {
    return {
      date: '2018-9-27'
    }
  },
  methods: {
    bindDateChange (e) {
      console.log(e)
      this.date = e.target.value
    }
  }
}
</script>

<style>
</style>

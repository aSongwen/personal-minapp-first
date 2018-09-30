import Vue from 'vue'
import title from './title'

const titleCom = {
  install () {
    Vue.component('titleCom', title)
  }
}

export default {
  titleCom
}

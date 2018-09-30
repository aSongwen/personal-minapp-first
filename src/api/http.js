import fly from './fly'

export default class {
  // 测试
  test = () => {
    return fly.get(`../util/test.json`)
  }
}

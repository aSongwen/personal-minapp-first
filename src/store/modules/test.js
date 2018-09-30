const state = {
  count: 1
}

const mutations = {
  INCREASE (state, payload) {
    state.count += payload.num
  }
}

const actions = {
  // increaseAsync ({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       commit('INCREASE', payload)
  //       resolve()
  //     })
  //   })
  // }
}

const getters = {
  count: state => state.count
}

export default {
  state,
  mutations,
  actions,
  getters
}

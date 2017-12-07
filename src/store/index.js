import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  showComment: false,
  placeholder: '评价',
  moment: null
}

const getters = {
  moment (state) {
    return state.moment
  },
  placeholder (state) {
    return state.placeholder
  },
  showComment (state) {
    return state.showComment
  }
}

const mutations = {
  updateCommentDisplay (state, show) {
    state.showComment = show
  },
  updateCommentPlaceholder (state, placeholder) {
    state.placeholder = placeholder
  },
  updateMoment (state, moment) {
    state.moment = moment
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})

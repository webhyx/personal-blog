import Vue from 'vue'
import Vuex from 'vuex'
import cookie from './modules/cookie'
import article from './modules/article'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {cookie,article}
})

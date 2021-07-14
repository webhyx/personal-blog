import Cookies from 'js-cookie'
const state ={
    token:''
}

const mutations = {
    setToken(state,val) {
        state.token = val 
        Cookies.set('token',val)
    },
    clearToken(state) {
        state.token = ''
        Cookies.remove('token')
    },
    getToken(state) {
        state.token = Cookies.get('token')
        
      }
}

export default {
    namespaced: true, // 模块化必须要这个，否则store.commit('cookie/setToken',xxx)识别不了，报错
    state,
    mutations
}
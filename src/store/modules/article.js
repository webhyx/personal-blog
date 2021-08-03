const state = {
    articleID:0
}

const mutations = {

}

export default {
    namespaced: true, // 模块化必须要这个，否则store.commit('cookie/setToken',xxx)识别不了，报错
    state,
    mutations
}
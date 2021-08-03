// const storeLocalStore = function (state) {
//     window.localStorage.setItem("userMsg", JSON.stringify(state));
// }

const state = {
    articleID: 0
}

const mutations = {
    setArticleID(state, id) {
        state.articleID = id
        // storeLocalStore(state)
    }
}

export default {
    namespaced: true, // 模块化必须要这个，否则store.commit('cookie/setToken',xxx)识别不了，报错
    state,
    mutations,
    // storeLocalStore
}
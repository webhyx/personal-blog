// const storeLocalStore = function (state) {
//     window.localStorage.setItem("userMsg", JSON.stringify(state));
// }

const state = {
    blogID: 0,
    blogTitle:'',
    blogContent:'',
    FileList:[]
}

const mutations = {
    setBlogID(state, id) {
        state.blogID = id
        // storeLocalStore(state)
    },
    setBlogTitle(state,title){
        state.blogTitle = title
    },
    setBlogContent(state,content){
        state.blogContent = content
    },
    setFileList(state,arr) {
        state.FileList.push(arr)
    },
    clearFileList(state){
        state.FileList = []
    }
}

export default {
    namespaced: true, // 模块化必须要这个，否则store.commit('cookie/setToken',xxx)识别不了，报错
    state,
    mutations,
    // storeLocalStore
}
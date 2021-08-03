import axios from 'axios'

// 进行一些全局配置
// 公共路由(网络请求地址)
axios.defaults.baseURL = 'http://www.hhsunset.top';
// 请求响应超时时间
axios.defaults.timeout = 5000;

const get = function(path,data) {
    return new Promise((resolve,reject)=> {
        axios.get(path,{
            params:data
        })
    })
}
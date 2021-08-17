import axios from 'axios'

// 进行一些全局配置
// 公共路由(网络请求地址)
// axios.defaults.baseURL = 'https://www.hhsunset.top';
// 请求响应超时时间
// axios.defaults.timeout = 5000;

const request = axios.create({
    baseURL:'https://www.hhsunset.top',
    timeout: 5000,
})

const get = function(path='',data={}) {
    return new Promise((resolve,reject)=> {
        request.get(path,{
            params:data
        }).then((response) => {
            resolve(response)
        }).catch((error) => {
            reject(error)
        })
    })
}
// axios的post请求参数可以直接在请求地址后加在一个对象中
const post = function(path='',data={}) {
    return new Promise((resolve,reject) => {
        request.post(path,data).then((response) => {
            resolve(response)
        }).catch((error) =>{
            reject(error)
        })
    })
}
// Vue.prototype.$get = get;
// Vue.prototype.$post = post;
export default {
    get,post
}
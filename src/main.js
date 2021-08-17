import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

import './assets/fonts/iconfont.css'
import './assets/fonts/iconfont.js'

import axios from 'axios'
import VueAxios from 'vue-axios'
import request from './api/index.js'
Vue.prototype.$get = request.get
Vue.prototype.$post = request.post

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.config.productionTip = false

Vue.use(ElementUI, axios,VueAxios);

// 防止用户未登录时在url上直接输入个人相关地址
router.beforeEach((to,from,next) => {
  store.commit('cookie/getToken')
  let token = store.state.cookie.token
  //  要用()包裹或运算
  if(!token && to.name === ('PersonalHome'||'Edit'||'EditBlog'||'EditDraft')) {
      next('login')
  } else {
      next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


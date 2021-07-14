import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

Vue.config.productionTip = false

Vue.use(ElementUI);

router.beforeEach((to,from,next) => {
  store.commit('cookie/getToken')
  let token = store.state.cookie.token
  if(!token && to.name !== 'Login') {
      next('/login')
  } else {
      next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


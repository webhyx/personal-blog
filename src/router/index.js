import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path:'/personalHome',
    name:'PersonHome',
    component: () => import('../views/PersonalHome')
  },
  {
    path:'/edit',
    name:'Eidt',
    component: () => import('../views/Edit.vue')
  },
  {
    path:'/editDraft/:id',
    name:'EditDraft',
    component: () => import('../views/EditDraft.vue')
  },
  {
    path:'/editBlog/:id',
    name:'EditBlog',
    component: () => import('../views/EditBlog.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path:'/article/:id',
    name:'Article',
    component: () => import('../views/Article')
  },
  {
    path:'/test',
    name:'Test',
    component: () => import('../views/Test.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Main from '../components/Main.vue'

import DongmanManage from '../views/submenu/DongmanManage.vue'
import CommentManage from '../views/submenu/CommentManage.vue'
import AnnounceManage from '../views/submenu/AnnounceManage.vue'
import PVManage from '../views/submenu/PVManage.vue'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: Login
  // },  
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'/dongman',
        name:'dongman',
        component:DongmanManage
      },
      {
        path:'/comment',
        name:'comment',
        component:CommentManage
      },
      {
        path:'/pv',
        name:'pv',
        component:PVManage
      },
      {
        path:'/announce',
        name:'announce',
        component:AnnounceManage
      },
      // {}
    ]
    
  },
  {
    path:'/main',
    name:'main',
    component:Main,
    
  },
  // {
  //   path:'/'
  // }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

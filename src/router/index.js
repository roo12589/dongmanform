import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import v404 from '../views/404.vue'
// import Main from '../components/Main.vue'
/* 管理页面 */
import DongmanManage from '../views/submenu/DongmanManage.vue'
import CommentManage from '../views/submenu/CommentManage.vue'
import AnnounceManage from '../views/submenu/AnnounceManage.vue'
import PVManage from '../views/submenu/PVManage.vue'
import PosterManage from '../views/submenu/PosterManage.vue'
import UserManage from '../views/submenu/UserManage.vue'
/* 前台页面 */
import StartPage from '../views/front/StartPage.vue'
import DongmanDetail from '../views/front/DongmanDetail.vue'
// import NProgress from 'nprogress' // 进度条
// import 'nprogress/nprogress.css' // 进度条样式
// import { getToken } from '@/utils/auth' // 从cookie获取token
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/dongman',
        name: 'dongman',
        component: DongmanManage
      },
      {
        path: '/comment',
        name: 'comment',
        component: CommentManage
      },
      {
        path: '/pv',
        name: 'pv',
        component: PVManage
      },
      {
        path: '/announce',
        name: 'announce',
        component: AnnounceManage
      },
      {
        path: '/poster',
        name: 'poster',
        component: PosterManage
      },
      {
        path: '/User',
        name: 'user',
        component: UserManage
      },

      // {}
    ]

  },
  {
    // 组件及组件名不能全为数字，用v404代替 其他不变
    path: '/404',
    name: '404',
    component: v404
  },
  {
    path: '*',
    redirect: '/404'
  },
  /* 
  前台部分
  */
  {
    path: '/start',
    name: 'start',
    component: StartPage
  },
  {
    path:'/dongmandetail',
    name:'dongmanDetail',
    component:DongmanDetail
  }
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
router.beforeEach((to, from, next) => {
  // 登录前检查token， 不存在则进入login
  const token = localStorage.getItem("token");
  if (!token && to.path !== '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
  // 存在token则，再次登录进入home
  if (token) {
    if (to.fullPath === '/login') {
      // this.$message("您已登录，请勿重复登录")
      next({ path: '/home' })
    } else {
      /*       if (whiteList.indexOf(to.path) !== -1) {
              // 在免费登录白名单，直接去
              next()
            } else {
              // 没有访问权限的其他页面被重定向到登录页面。
              next(`/login?redirect=${to.path}`)
              // NProgress.done()
            } */
    }
  }
})
/* router.beforeEach((to, from, next) => {
  // 路由跳转前拦截
    const token = getToken()
    if (!token && to.path !== '/login') {
      next({
        name: 'login'
      })
      NProgress.done()
    } else {
      next()
      NProgress.done()
    }
// 登录之后即可获取token值
const hasToken = getToken()
console.log('.....', hasToken)
if (hasToken) {
  console.log('执行了----1', to.path)
  if (to.fullpath === '/login') {
    console.log('执行了')
    next({path: '/dashboard'})
  }
} else {
  console.log('.......')
  if (whiteList.indexOf(to.path) !== -1) {
    // 在免费登录白名单，直接去
    next()
  } else {
    // 没有访问权限的其他页面被重定向到登录页面。
    next(`/login?redirect=${to.path}`)
    // NProgress.done()
  }
}
}) */

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import Home from '../components/Home.vue'
// eslint-disable-line no-unused-vars

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: login },
    { path: '/home', component: Home }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 从哪来
  // next 是一个函数

  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  console.log(tokenStr)
  if (!tokenStr) return next('/login')
  next()
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Interceptor from './interceptor'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 防止重复跳转同一路由报错：NavigationDuplicated: {_name: 'NavigationDuplicated', name: 'NavigationDuplicated'}
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => { return err })
}

// 路由响应前拦截器
router.beforeEach(async (to, from, next) => { return Interceptor.beforeEach(to, from, next, router) })
// 路由响应后拦截器
router.afterEach(Interceptor.afterEach)

export default router

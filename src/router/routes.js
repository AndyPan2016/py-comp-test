/**
 * 路由及配置
 * @authors AndyPan (pye-mail@163.com)
 * @date    2020年7月6日13:50:17
 * @remark  所有的路由
 */

export default [
  // 根目录(重定向到主页)
  {
    path: '/',
    name: 'redirect',
    redirect: '/layout/index'
  },
  // 主框架页
  {
    path: '/layout/:pages',
    name: 'layout-frame-wrok',
    component: () => import('@/views/layout/frame-work/view.vue')
  },
  // 未找到页面(404)
  { path: '*', component: () => import('@/views/main/404/view.vue') }
]

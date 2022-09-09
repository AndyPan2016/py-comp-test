/**
 * 路由拦截器
 * @authors AndyPan (pye-mail@163.com)
 * @date    2020年7月6日16:28:29
 */
import Vue from 'vue'
import { STATUS } from '@/configs'

export default {
  /**
   * 路由响应前拦截器
   * @param {*} to
   * @param {*} from
   * @param {*} next
   */
  async beforeEach (to, from, next, router) {
    let $utils = Vue.prototype.$utils
    // 设置页面标题
    let meta = to.meta || {}
    if (meta.title) {
      $utils.setWebSiteTitle(meta.title)
    }
    next()
  },
  /**
   * 路由响应后拦截器
   * @param {*} to
   * @param {*} from
   */
  afterEach (to, from) {
    let $utils = Vue.prototype.$utils
    window.setTimeout(() => {
      $utils.setLocalStorage(STATUS.CURRENTROUTE, to.path)
    }, 200)
  }
}

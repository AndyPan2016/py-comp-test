/**
 * 创建vuex实例
 * @author AndyPan
 * @createdate 2019年8月29日11:21:38
 * @lastupdatedate 2019年8月29日11:21:46
 * @remark
 */

import Vue from 'vue'
import Vuex from 'vuex'

import ResponseStore from './modules/response'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ResponseStore
  }
})

export default store

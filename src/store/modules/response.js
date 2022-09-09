/**
 * 请求响应数据缓存store模块
 * @author AndyPan
 * @createdate 2019年9月30日16:02:33
 * @lastupdatedate 2019年9月30日16:02:38
 * @remark
 */
import Vue from 'vue'

export default {
  state: {
    responseData: {}
  },
  getters: {
    getResponseState (state) {
      return state.responseData
    }
  },
  mutations: {
    responseStoreUpdate (state, params) {
      if (params.stateKey) {
        Vue.set(state.responseData, params.stateKey, params.storeValue)
      } else {
        for (let key in params) {
          Vue.set(state.responseData, key, params[key])
        }
      }
    }
  },
  actions: {
    responseStoreUpdate (context, params) {
      context.commit('responseStoreUpdate', params)
    }
  }
}

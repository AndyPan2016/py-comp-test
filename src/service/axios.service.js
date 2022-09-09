/**
 * Axios配置
 * @authors AndyPan (pye-mail@163.com)
 * @date    2020年7月7日15:13:34
 */

import Vue from 'vue'
import Axios from 'axios'
import md5 from 'js-md5'
import utils from '@/utils'
import { LANG } from '@/configs'

// loading实例
let loadingInstance
// 请求次数，用于控制多个请求同时发送后，loading提示必须是两个请求都完成后才关闭
let requestCount = 0
// 拦截器配置参数
let globalInterceptorsConfigs = {}
// 环境变量
let nodeEnv = process.env.NODE_ENV
// 配置超时和基础url
Axios.defaults.timeout = 30000
// 如果是开发环境，就用代理配置，否则使用.env.[对应环境]的配置
Axios.defaults.baseURL = nodeEnv === 'development' ? '/' : process.env.VUE_APP_BASE_URL

// 请求拦截
Axios.interceptors.request.use(config => {
  // 请求开始
  let iConfigs = customApi.getInterceptorConfigs(config)
  customApi.requestInterceptHandle(config, iConfigs)
  if (iConfigs.isLoading !== false && iConfigs.isLoading !== 'false') {
    customApi.showLoading(iConfigs.loadingMsg || window.globalLoadingMsg || LANG.loading)
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
Axios.interceptors.response.use(response => {
  // 响应开始
  let data = response.data
  let iConfigs = customApi.getInterceptorConfigs(response.config)
  if (response.status === 200) {
    if (data.success === true) {
      customApi.hideLoading(iConfigs)
      customApi.responseInterceptHandle(response, iConfigs)
    } else {
      let dataCode = data.code
      customApi.hideLoading(iConfigs)
      // 拦截配置中排除code不显示错误提示，由外部去自定义
      let excludeCode = iConfigs.excludeCode || []
      if (iConfigs.isShowError !== false && excludeCode.join(',').indexOf(dataCode) === -1) {
        customApi.errorTip(data.detail || data.message || data.resultMessage || data.resultDetail)
      }
    }
  } else {
    customApi.hideLoading(iConfigs)
    customApi.errorTip('服务器错误，请稍后再试')
  }
  // 下一步外部函数
  customApi.nextFn(iConfigs)
  return data
}, error => {
  error = error || {}
  let response = error.response
  let iConfigs = customApi.getInterceptorConfigs((response || {}).config)
  if (error && response) {
    let status = response.status
    let responseStatus = LANG.responseStatus[status] || { message: '连接错误：' + status }
    error.message = responseStatus.message
  } else {
    error.message = error.message || '连接到服务器失败'
  }
  // 关闭loading
  customApi.hideLoading(iConfigs)
  // 错误提示
  customApi.errorTip(error.message === 'Network Error' ? '网络错误' : error.message)
  // 下一步外部函数
  customApi.nextFn(iConfigs)
  return Promise.reject(error)
})

let customApi = {
  cacheTypeFn: {
    // cookie缓存，setCookie为utils中的方法
    cookie: utils.setCookie,
    // 浏览器本地存储LocalStorage，setLocalStorage为utils中的方法
    storage: utils.setLocalStorage
  },
  /**
   * 执行下一步函数
   * @param {*} iConfigs 当前服务配置
   */
  nextFn (iConfigs) {
    let nextFn = (iConfigs || {}).nextFn
    if (nextFn && typeof (nextFn) === 'function') {
      nextFn()
    }
  },
  /**
   * 数据缓存操作
   * @param {*} fnParams 相关参数集合
   */
  dataCacheFn (fnParams) {
    // 自定义key(缓存值的key，否则则是以服务名+字段名的组合)
    let customKey = fnParams.customKey
    // 服务名称
    let serviceName = fnParams.serviceName
    // 缓存数据
    let data = fnParams.data
    // 缓存key(需要缓存字段中的哪些数据)
    let cacheKeys = fnParams.cacheKeys
    // 当前key
    let currentKey = fnParams.currentKey
    // 缓存类型（cookie、LocalStorage）
    let cacheType = fnParams.cacheType
    if (cacheKeys === true) {
      // 为true，直接缓存data
      let cacheData = data
      let cacheKey = customKey || serviceName
      if (currentKey) {
        cacheKey = currentKey
      }
      customApi.cacheTypeFn[cacheType](cacheKey, JSON.stringify(cacheData))
    } else if (typeof (cacheKeys) === 'string') {
      // 如果是字符串，缓存单个字段
      let cacheData = data[cacheKeys]
      let cacheKey = customKey || (serviceName + '_' + cacheKeys)
      if (currentKey) {
        cacheKey = currentKey + '_' + cacheKeys
      }
      customApi.cacheTypeFn[cacheType](cacheKey, JSON.stringify(cacheData))
    } else if (Object.prototype.toString.call(cacheKeys) === '[object Array]') {
      // 如果是数组，缓存多个字段
      for (let i = 0, len = cacheKeys.length; i < len; i++) {
        customApi.dataCacheFn({
          customKey: customKey,
          serviceName: serviceName,
          data: data,
          cacheKeys: cacheKeys[i],
          currentKey: currentKey || serviceName,
          cacheType: cacheType
        })
      }
    } else if (Object.prototype.toString.call(cacheKeys) === '[object Object]') {
      let keyItem
      let keyType
      for (let key in cacheKeys) {
        keyItem = cacheKeys[key]
        keyType = typeof (keyItem) === 'string'
        this.dataCacheFn({
          customKey: customKey,
          serviceName: serviceName,
          data: keyType ? data : data[key],
          cacheKeys: keyItem,
          currentKey: keyType ? (currentKey || serviceName) : ((currentKey || serviceName) + '_' + key),
          cacheType: cacheType
        })
      }
    }
  },
  /**
   * http请求拦截操作函数
   * @param {*} config 请求配置
   */
  requestInterceptHandle (config, iConfigs) { },
  /**
   * http请求响应拦截操作函数
   * @param {*} response 响应参数
   */
  responseInterceptHandle (response, iConfigs) {
    // 响应data
    let responseData = response.data || {}
    // 当前接口的服务名称key，以作为缓存key
    let serviceName = iConfigs.serviceName
    if (serviceName) {
      // cookie缓存
      let cookieCache = iConfigs.cookie
      if (cookieCache) {
        customApi.dataCacheFn({
          // 数据
          data: responseData,
          // 自定义的key
          customKey: iConfigs.cacheKey,
          // 服务名称
          serviceName,
          // 缓存的字段或集合
          cacheKeys: cookieCache,
          // 缓存类型
          cacheType: 'cookie'
        })
      }
      // LocalStorage缓存
      let storageCache = iConfigs.storage
      if (storageCache) {
        customApi.dataCacheFn({
          // 数据
          data: responseData,
          // 自定义的key
          customKey: iConfigs.cacheKey,
          // 服务名称
          serviceName,
          // 缓存的字段或集合
          cacheKeys: storageCache,
          // 缓存类型
          cacheType: 'storage'
        })
      }
      // Vuex缓存
      let vuexCache = iConfigs.vuex
      if (vuexCache) {
        // 缓存响应的数据
        let responseStoreObject = {}
        responseStoreObject[serviceName] = (vuexCache !== true && vuexCache !== 'true') ? responseData[vuexCache] : responseData
        Vue.prototype.$store.dispatch('responseStoreUpdate', JSON.parse(JSON.stringify(responseStoreObject)))
      }
    }
  },
  /**
   * 错误提示
   * @param {*} message 提示消息
   */
  errorTip (message) {
    Vue.prototype.$toast.fail(message)
  },
  /**
   * 打开loading
   * @param {*} message 提示消息
   */
  showLoading (message) {
    if (requestCount <= 0) {
      loadingInstance = Vue.prototype.$toast.loading(message)
    }
    requestCount++
  },
  /**
   * 关闭提示
   */
  hideLoading (iConfigs) {
    if (requestCount > 0) {
      requestCount--
    }
    if (requestCount <= 0 && loadingInstance) {
      if (iConfigs.isAutoClose !== false && (iConfigs.isLoading !== false && iConfigs.isLoading !== 'false')) {
        loadingInstance.hide()
      }
    }
  },
  /**
   * 通过请求url获取请求拦截配置
   * @param {*} config 响应配置
   */
  getInterceptorConfigs (config) {
    config = config || {}
    let iConfigs = {}
    let url = config.url
    if (url) {
      let urlAry = url.split('?')[0].split('/')
      let serviceName = urlAry[urlAry.length - 1].split('.')[0]
      let configData = typeof (config.data) === 'string' ? JSON.parse(config.data) : config.data
      serviceName = serviceName === 'gateway' ? configData.service : serviceName
      iConfigs = globalInterceptorsConfigs[serviceName] || {}
      iConfigs.serviceName = serviceName
    }

    return iConfigs
  },
  /**
   * GET
   * @param {String} path 接口地址
   * @param {Object} params 接口参数
   * @returns Promise对象
   */
  get: (path, params, header) => {
    path = Vue.prototype.$utils.assembleUrlParams({
      url: path,
      params
    })
    return new Promise((resolve, reject) => {
      Axios.get(path, params, header).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**
   * POST
   * @param {String} path 接口地址
   * @param {Object} params 接口参数
   * @returns Promise对象
   */
  post: (path, params, header) => {
    return new Promise((resolve, reject) => {
      Axios.post(path, params, header).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**
   * 获取当前年月日时分秒字符串
   */
  getNowTime: () => {
    var date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let date1 = date.getDate()
    let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    let second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    let milliSeconds = date.getMilliseconds()
    let currentTime = year + '' + month + '' + date1 + '' + hour + '' + minute + '' + second + '' + milliSeconds
    return currentTime
  },
  /**
   * 配置默认参数
   */
  setDefaultParams: (params, serviceName) => {
    params = params || {}
    params.service = serviceName
    params.requestNo = customApi.getNowTime()
    params.version = '1.0'
    // 用于判断前端版本，与接口、数据等均无关，与我的界面中的版本号一致
    params.appVersion = LANG.appVersion
    params.partnerId = process.env.VUE_APP_ACCESS_KEY
    params.ext = { terminal: 'WX_C' }
    return params
  },
  /**
   * 设置默认头信息
   */
  setDefaultHeader: (header, params) => {
    header = header || { headers: {} }
    header.headers['x-api-accesskey'] = process.env.VUE_APP_ACCESS_KEY
    header.headers['x-api-signType'] = 'MD5'
    header.headers['x-api-sign'] = md5(JSON.stringify(params) + process.env.VUE_APP_SECRET_KEY)
    return header
  },
  /**
   * 构建服务对象
   * @param {Object} path 服务配置组
   * @param {commonPath} params 公共路径部分
   * @returns 服务对象
   */
  structureService: (serviceGroups, commonPath) => {
    let structure = {
      all: (groups) => {
        return Promise.all(groups)
      }
    }
    let groupItem
    for (let key in serviceGroups) {
      groupItem = serviceGroups[key]
      // 构造服务[alias.别名 || service.服务名]
      structure[groupItem.alias || groupItem.service] = ((item) => {
        // 当前构建的服务名称
        let serviceName = item.service
        // 获取拦截配置并保存
        let iConfigs = item.interceptorsConfigs
        globalInterceptorsConfigs[serviceName] = iConfigs || {}
        // 构造服务请求方法
        return (params, nextFn) => {
          if (nextFn) {
            globalInterceptorsConfigs[serviceName].nextFn = nextFn
          }
          let url = (commonPath || '') + (item.suffix || 'gateway.do')
          // 设置并组合默认公共参数
          params = customApi.setDefaultParams(params, serviceName)
          // 设置头部信息
          let header = customApi.setDefaultHeader(item.header, params)
          // 发送请求
          return (customApi[item.type || 'post'] || customApi.post)(url, params, header)
        }
      })(groupItem)
    }

    return structure
  }
}

Vue.prototype.$Axios = Axios

Vue.prototype.$get = customApi.get

Vue.prototype.$post = customApi.post

Vue.prototype.$StructureService = customApi.structureService

export const Get = customApi.get

export const Post = customApi.post

export const StructureService = customApi.structureService

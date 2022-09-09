/**
 * 公共接口服务
 * @author AndyPan
 * @createdate 2020年2月24日13:40:01
 * @lastupdatedate 2020年2月24日13:40:50
 * @remark 公共接口
 */

import Vue from 'vue'
// let { StructureService } = require('./axios.service')

// let serviceGroups = [
//   {
//     service: '接口名称，也作为方法名使用',
//     alias: '别名(方法别名，默认与服务的名称相同，当服务名不适合作为方法名时，可使用别名重定义)',
//     remark: '接口描述',
//     // 头信息
//     header: {
//       // 例如
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
//     },
//     // 拦截配置
//     interceptorsConfigs: {
//       // 需要排除的code不显示错误提示，由外部去自定义
//       excludeCode: [],
//       // 加载中文本自定义，默认为'加载中'，配置于LANG.loading
//       loadingMsg: LANG.loading,
//       // 是否显示加载中，默认为true
//       isLoading: true,
//       // 是否显示错误提示，默认为true
//       isShowError: true,
//       // 是否自动关闭'加载中'提示，默认为true
//       isAutoClose: true,
//       // 使用cookie缓存数据，举例：请求响应返回data:{ a: 'a', b: { b1: 'b1' }, ... }，要缓存b1=>cookie: {b: 'b1'}，或者要缓存a,b=>cookie:['a', 'b']，或者要缓存a,b1=>cookie:['a', {b: {b1: true}}(或者{b: 'b1'})]
//       // 通常情况，你不会缓存那么复杂的数据结构，要么缓存整个data(cookie: true)，要么缓存data下某个字段(cookie: '需要缓存data下的某个字段名')
//       cookie: '',
//       // 使用LocalStorage缓存数据，举例：同cookie
//       storage: '',
//       // 使用VueX缓存数据，使用vuex缓存与cookie和storage不一样，只能缓存响应数据data中的某个字段或data整体
//       vuex: '',
//       // 当使用缓存时，默认是用服务名或加缓存的key作为当前缓存的key，该字段提供自定义缓存的key
//       cacheKey: '自定义缓存的key'
//     }
//   }
// ]

// 公共服务
let commonsServiceGroups = [
  {
    service: 'configDomainQuery', remark: '获取域名配置'
    // interceptorsConfigs: {
    //   vuex: 'htmlPortalUrl',
    //   storage: true
    // }
  }
]

export const commonsService = Vue.prototype.$StructureService(commonsServiceGroups)

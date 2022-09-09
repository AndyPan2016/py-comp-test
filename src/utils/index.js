/**
 * utils
 * @authors AndyPan (pye-mail@163.com)
 * @date    2020年7月6日15:44:16
 */

import Vue from 'vue'
import { STATUS } from '@/configs/index.js'

const PI = 3.1415926535897932384626
const a = 6378245.0
const ee = 0.00669342162296594323
/**
 * 判断是否在国内，不在国内则不做偏移
 * @param lat
 * @param lng
 * @returns {boolean}
 */
let outOfChina = (lat, lng) => {
  return (lng < 72.004 || lng > 137.8347) || ((lat < 0.8293 || lat > 55.8271) || false)
}
let transformlat = (lat, lng) => {
  var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng))
  ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0
  ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0
  ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0
  return ret
}
let transformlng = (lat, lng) => {
  var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng))
  ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0
  ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0
  ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0
  return ret
}

let utils = {
  /**
   * 拨打电话
   * @param {*} params 需要拨打的电话号码及配置
   */
  makePhoneCall (params) {
    let phoneTarget = document.createElement('a')
    phoneTarget.href = 'tel:' + params.phoneNumber
    phoneTarget.click()
  },
  /**
   * 给元素添加class
   * @param {*} target 目标元素
   * @param {*} clas 需要添加的class
   */
  addClass (target, clas) {
    if (target && clas) {
      var className = target.getAttribute('class') || target.className
      if (className.indexOf(clas) < 0) {
        target.className += ' ' + clas
      }
    }
    return this
  },
  /**
   * 删除元素上指定的class
   * @param {*} target 目标元素
   * @param {*} clas 需要删除的class
   */
  removeClass (target, clas) {
    if (target && clas) {
      var classNameAry = (target.getAttribute('class') || target.className).split(' ')
      let i = 0
      let len = classNameAry.length
      let item
      let tempClas = []
      for (; i < len; i++) {
        item = classNameAry[i]
        if (item !== clas) {
          tempClas.push(item)
        }
      }
      target.className = tempClas.join(' ')
    }
    return this
  },
  /**
   * 查找元素是否包含某个class
   * @param {*} target 目标元素
   * @param {*} clas 需要查找的class
   */
  hasClass (target, clas) {
    if (target && clas) {
      var classNameAry = (target.getAttribute('class') || target.className).split(' ')
      let i = 0
      let len = classNameAry.length
      let item
      let status = false
      for (; i < len; i++) {
        item = classNameAry[i]
        if (item === clas) {
          status = true
          break
        }
      }
      return status
    }
  },
  /**
   * 添加事件
   * @param {*} element 目标元素
   * @param {*} type 事件类型
   * @param {*} handler 事件操作函数
   * @param {*} isDoIt 是否立即执行
   */
  addHandlerEvent (element, type, handler, isDoIt, configs) {
    if (element.addEventListener) {
      // DOM2级事件处理程序
      element.addEventListener(type, handler, configs || false)
    } else if (element.attachEvent) { // IE事件处理程序
      element.attachEvent('on' + type, handler)
    } else { // 不支持以上2种的早期浏览器写法
      element['on' + type] = handler
    }
    if (isDoIt && handler) {
      handler()
    }
  },
  /**
   * 删除已绑定事件
   * @param {*} element 目标元素
   * @param {*} type 事件类型
   * @param {*} handler 事件操作函数
   */
  removeHandlerEvent (element, type, handler, configs) {
    if (element.removeEventListener) {
      // DOM2级事件处理程序
      element.removeEventListener(type, handler, configs || false)
    } else if (element.detachEvent) {
      // IE事件处理程序
      element.detachEvent('on' + type, handler)
    } else {
      // 不支持以上2种的早期浏览器写法
      element['on' + type] = null
    }
  },
  /**
   * 判断是否是微信浏览器
   */
  isWeixin () {
    return /micromessenger/.test(navigator.userAgent.toLowerCase())
  },
  /**
   * 设置站点标题
   * @param {*} title 标题
   */
  setWebSiteTitle (title) {
    if (title) {
      let websiteTarget = document.getElementById('j-website-title') || document.title
      if (websiteTarget) {
        websiteTarget.innerHTML = title
      }
    }
    return this
  },
  /**
   * 遍历数据
   * @param {*} data
   * @param {*} callBack
   */
  forEach (data, callBack) {
    let tempData = []
    if (data) {
      let item
      let cbResult
      for (let key in data) {
        item = data[key]
        if (callBack) {
          cbResult = callBack(item, key)
          if (cbResult === 'break') {
            tempData = 'break'
            break
          }
          if (cbResult) {
            tempData.push(cbResult)
          }
        }
      }
    }
    return tempData
  },
  /**
   * 异步遍历数据
   * @param {*} data
   * @param {*} cb
   * @param {*} last
   */
  asyncEach (data, cb, last) {
    if (data) {
      let i = 0
      let len = data.length
      let item
      let each = () => {
        item = data[i]
        if (cb) {
          cb(item, i)
        }
        i++
        if (i < len) {
          setTimeout(each, 0)
        } else {
          if (last) {
            last()
          }
        }
      }
      if (len) {
        each()
      } else if (last) {
        last()
      }
    }
  },
  /**
   * 异步执行
   * @param {*} callBack 异步执行函数
   * @param {*} timer 异步时间，默认为0
   */
  asyncToDo (callBack, timer) {
    window.setTimeout(callBack, timer || 0)
  },
  /**
   * 获取Url地址的参数
   * @param {*} url URL
   * @param {*} name 需要获取的参数名称
   */
  queryUrl (url, name) {
    // 获取url中"?"符后的字串
    var search = url ? url.substring(url.indexOf('?'), url.length) : location.search
    var result = null
    if (search.indexOf('?') !== -1) {
      result = {}
      var substr = search.substr(1)
      var strArray = substr.split('&')
      var i = 0
      var length = strArray.length
      var strArrayItem
      for (; i < length; i++) {
        strArrayItem = strArray[i].split('=')
        result[strArrayItem[0]] = unescape(strArrayItem[1])
      }
    }

    if (name && result) {
      result = result[name]
    }

    return result || {}
  },
  /**
   * 获取地址栏参数字符串
   */
  queryUrlStr (url) {
    var search = url ? url.substring(url.indexOf('?'), url.length) : location.search
    if (search.indexOf('?') !== -1) {
      return search.substr(1)
    }
  },
  /**
   * 获取路由参数
   * @param {String} key 参数名称，不写表示获取所有参数对象
   * @returns 获取到的参数或参数集合
   */
  params (key) {
    let path = this.$route.path
    let params = this.$route.params || {}
    window.routeParams = window.routeParams || {}
    let customParams = window.routeParams[path] || JSON.parse(this.getCookie(path) || '{}')
    if (customParams) {
      for (let key in customParams) {
        params[key] = customParams[key]
      }
    }
    let query = this.$route.query || {}
    for (let key in query) {
      params[key] = query[key]
    }
    return key ? (params[key]) : params
  },
  /**
   * 跳转路由
   * @param {String} path 跳转的路由地址
   */
  routeTo (path, params) {
    if (path) {
      params = params || {}
      if (params.params) {
        window.routeParams = window.routeParams || {}
        window.routeParams[path] = params.params
        if (params.permanent) {
          utils.setCookie(path, JSON.stringify(params.params))
        }
      }
      // 加catch捕获err，防止路由报NavigationDuplicated错误
      // 连续点击相同路由链接，控制台出现报错 { _name: "NavigationDuplicated", name: "NavigationDuplicated" }
      this.$router.push({ path, query: params.query, params: params.params }).catch(err => err)
    }
    return this
  },
  /**
   * 以window.location.href打开链接地址
   * @param {*} path 需要打开的链接地址
   * @param {*} params 需要携带的参数
   */
  openTo (path, params) {
    window.location.href = utils.assembleUrlParams({
      url: path,
      params
    })
  },
  /**
   * 获取当前的域名
   */
  getLocationHost (route) {
    let href = window.location.href
    let http = href.split('//')
    let host = http[1].split('/')[0]
    return http[0] + '//' + host + (route || '')
  },
  /**
   * 设置本地存储
   * @param {*} key 需要设置本地存储的名称
   * @param {*} value 需要设置本地存储的值
   */
  setLocalStorage (key, value) {
    window.localStorage.setItem(key, value)
  },
  /**
   * 清空所有存储数据
   */
  clearAllStorage () {
    let statusItem
    let tempStorage
    for (let key in STATUS) {
      statusItem = STATUS[key]
      tempStorage = utils.getLocalStorage(statusItem)
      if (tempStorage && tempStorage !== 'undefined') {
        utils.setLocalStorage(statusItem, '')
      }
    }
  },
  /**
   * 获取本地存储
   * @param {*} key 需要获取本地存储的名称
   */
  getLocalStorage (key) {
    return window.localStorage.getItem(key)
  },
  /**
   * 设置Cookie
   * @param {*} name 需要设置cookie的名称
   * @param {*} value 需要设置cookie的值
   */
  setCookie (name, value) {
    var Days = 30
    var exp = new Date()
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toUTCString()
  },
  /**
   * 获取Cookie
   * @param {*} name 需要获取cookie的名称
   */
  getCookie (name) {
    var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    var arr = document.cookie.match(reg)
    if (arr) {
      return unescape(arr[2])
    } else {
      return null
    }
  },
  /**
   * 删除cookies
   * @param {*} name 需要删除cookie的名称
   */
  delCookie (name) {
    var exp = new Date()
    exp.setTime(exp.getTime() - 1)
    var cval = utils.getCookie(name)
    if (cval !== null) {
      document.cookie = name + '=' + cval + ';expires=' + exp.toUTCString()
    }
  },
  /**
   * 组装URL参数
   * @param options <any> 组装参数集合
   * @returns 组装后的URL
   */
  assembleUrlParams (options) {
    // 需要拼接参数的URL
    let url = options.url || window.location.href
    // 被组装的参数对象
    let params = options.params || {}
    // 判断原url中是否已经存在参数
    let hasParams = url.indexOf('?')

    let i = 0
    // 连接符
    let connector
    // 参数字符串
    let paramsString = ''
    for (let key in params) {
      connector = (i === 0 ? (hasParams > -1 ? '&' : '?') : '&')
      paramsString += connector + key + '=' + params[key]
      i++
    }

    return (url + paramsString)
  },
  /**
   * 通过url获取host
   */
  locationHost (url) {
    var host
    if (url) {
      var urlAry = url.split('//') || []
      host = url.split('//')[1] || ''
      host = host.substring(0, host.indexOf('/'))
      return urlAry[0] + '//' + host
    } else {
      host = window.location.protocol + '//' + window.location.host
    }
    return host
  },
  /**
   * 倒计时
   * @param {Object} options 参数选项
   */
  countDown (options) {
    options = options || {}
    let defaults = {
      // 倒计时秒数
      timer: options.timer || 10,
      // 倒计时函数
      fn: options.fn,
      // 倒计时完成回调函数
      callBack: options.callBack
    }
    let stop = false

    let down = function () {
      if (defaults.fn) {
        defaults.fn(defaults.timer)
      }
      setTimeout(function () {
        if (stop) {
          return false
        }
        defaults.timer--
        if (defaults.timer === 0) {
          if (defaults.callBack) {
            defaults.callBack(defaults.timer)
          }
        } else {
          if (defaults.fn) {
            defaults.fn(defaults.timer)
          }
          down()
        }
      }, 1000)
    }
    down()

    return {
      clear () {
        stop = true
      }
    }
  },
  /**
   * 生成一个时间戳
   */
  getGid () {
    return (new Date()).getTime()
  },
  /**
   * 页面历史记录后退
   * @param {*} count 后退数
   */
  historyBack (count) {
    count = (count === '' || count === null || count === 0 || count === undefined) ? -1 : count
    let hLen = window.history.length
    if (hLen) {
      let absCount = Math.abs(count)
      if (hLen > absCount) {
        window.history.back(count)
      } else {
        window.history.back(-hLen)
      }
    }
  },
  /**
   * 随机数
   */
  generateRandom (options) {
    options = options || {}
    // 最小值
    var minNum = options.minNum || 0
    // 最大值
    var maxNum = options.maxNum || 10
    // 生成多少个数字
    var count = options.count || (maxNum - minNum + 1)
    // 是否允许重复
    var isRepeat = options.isRepeat || false

    var array = []
    var create = function () {
      var rand = utils.randomNum(minNum, maxNum)
      if (!isRepeat) {
        for (var i = 0; i < array.length; i++) {
          if (array[i] === rand) {
            rand = false
            break
          }
        }
      }
      if (rand !== false) {
        array.push(rand)
      }
      if (array.length < count) {
        create()
      }
    }
    create()
    return array
  },
  /**
   * 随机数
   * @param {*} minNum 最小值
   * @param {*} maxNum 最大值
   */
  randomNum (minNum, maxNum) {
    if (minNum && !maxNum) {
      return parseInt(Math.random() * minNum + 1, 10)
    } else if (minNum && maxNum) {
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
    } else {
      return 0
    }
  },
  /**
   * 获取终端是((IOS、Android)、MOBILE)还是PC
   */
  terminal (flag) {
    let userAgentInfo = navigator.userAgent
    let agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
    let result = 'PC'
    for (let i = 0, len = agents.length; i < len; i++) {
      if (userAgentInfo.indexOf(agents[i]) > 0) {
        result = false
        break
      }
    }
    if (!result) {
      if (flag === false) {
        result = 'MOBILE'
      } else {
        if (userAgentInfo.indexOf('Android') > -1 || userAgentInfo.indexOf('Linux') > -1) {
          result = 'ANDROID'
          /* eslint-disable */
        } else if (!!userAgentInfo.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          result = 'IOS'
        } else {
          result = 'UNKNOWN'
        }
      }
    }

    return result
  },
  /**
   * 真实终端（电脑模拟器视为PC，mobile.真实移动端 pc.电脑端 simulator.模拟器）
   */
  realTerminal: function () {
    var terminal = utils.terminal()
    var result = { terminal, type: 'mobile' }
    var maxTouchPoints = navigator.maxTouchPoints
    // 可触控点数(触摸屏的电脑触控点不准确)或者判断touchstart事件
    if (maxTouchPoints === 1 || !('ontouchstart' in window)) {
      if (terminal === 'IOS' || terminal === 'ANDROID') {
        result = { terminal: 'PC(模拟器：' + terminal + ')', type: 'simulator' }
      } else {
        result = { terminal: 'PC', type: 'pc' }
      }
    }
    return result
  },
  /**
   * 时间戳转YY-MM-DD HH:MM:SS
   */
  formatDateTime (time) {
    if (!time) return
    let date = new Date(time)
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    m = m < 10 ? ('0' + m) : m
    let d = date.getDate()
    d = d < 10 ? ('0' + d) : d
    let h = date.getHours()
    h = h < 10 ? ('0' + h) : h
    let minute = date.getMinutes()
    let second = date.getSeconds()
    minute = minute < 10 ? ('0' + minute) : minute
    second = second < 10 ? ('0' + second) : second
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
  },
  /**
   * 获取格式化日期
   * @param {*} options 参数配置
   */
  getFormatDate (options) {
    options = options || {}
    // 日期格式
    let format = options.format || 'YYYY-MM-DD hh:mm:ss'
    let date = options.date || (new Date())
    let year = date.getFullYear()
    let yearStr = year + ''
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let formatDate = format.replace(/YYYY/g, year)
      .replace(/YY/g, (yearStr).substring(yearStr.length - 3, yearStr.length - 1))
      .replace(/MM/g, month)
      .replace(/DD/g, day)
      .replace(/hh/g, hours)
      .replace(/mm/g, minutes)
      .replace(/ss/g, seconds)
    return { formatDate, year, month, day, hours, minutes, seconds }
  },
  /**
   * 百度地图BD09坐标---->中国正常GCJ02坐标
   * 腾讯地图用的也是GCJ02坐标
   * @param double $lat 纬度
   * @param double $lng 经度
   * @return array();
   */
  BD09TOGCJ02 (lat, lng) {
    var xpi = 3.14159265358979324 * 3000.0 / 180.0
    var x = lng - 0.0065
    var y = lat - 0.006
    var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * xpi)
    var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * xpi)
    var gglng = z * Math.cos(theta)
    var gglat = z * Math.sin(theta)
    return [gglat, gglng]
  },
  /**
   * WGS84转GCj02
   * @param lng
   * @param lat
   * @returns {*[]}
   */
  WGS84TOGCJ02 (lat, lng) {
    if (outOfChina(lat, lng)) {
      return [lat, lng]
    } else {
      var dlat = transformlat(lat - 35.0, lng - 105.0)
      var dlng = transformlng(lat - 35.0, lng - 105.0)
      var radlat = lat / 180.0 * PI
      var magic = Math.sin(radlat)
      magic = 1 - ee * magic * magic
      var sqrtmagic = Math.sqrt(magic)
      dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI)
      dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI)
      var mglat = lat + dlat
      var mglng = lng + dlng
      return [mglat, mglng]
    }
  },
  /**
   * 经纬度转换
   */
  lngAndLatTransform (latitude, longitude, coordinate) {
    let result = [latitude, longitude]
    if (coordinate) {
      if (coordinate === 'BD09') {
        result = utils.BD09TOGCJ02(latitude, longitude)
      } else if (coordinate === 'WGS84') {
        result = utils.WGS84TOGCJ02(latitude, longitude)
      }
    }
    return { latitude: parseFloat(result[0]), longitude: parseFloat(result[1]) }
  },
  /**
   * 获取距离指定时间还有多少天
   * @param {*} dataTime 指定时间
   */
  getDistanceSpecifiedTime (dateTime) {
    if ((dateTime + '').indexOf('-') > -1) {
      dateTime = dateTime.replace(/-/g, '/')
    }
    // 指定日期和时间
    var EndTime = new Date(dateTime)
    // 当前系统时间
    var NowTime = new Date()
    var t = EndTime.getTime() - NowTime.getTime()
    var d = Math.floor(t / 1000 / 60 / 60 / 24)
    var h = Math.floor(t / 1000 / 60 / 60 % 24)
    var m = Math.floor(t / 1000 / 60 % 60)
    var s = Math.floor(t / 1000 % 60)
    // 距离指定时间是否已结束
    var isEnd = (d > 0 || h > 0 || m > 0 || s > 0) ? false : true

    return { day: d, hour: h, minute: m, second: s, isEnd: isEnd }
  },
  /**
   * 字符串隐藏中间位数
   * @param {String} str 字符串
   */
  stringEncryption (str, options) {
    options = options || {}
    let defaults = {
      begin: options.begin || 3,
      end: options.end || 4,
      placeholder: options.placeholder || '*',
      phLength: options.phLength || 4,
      // 多少个字符加一个splitString字符，以作为分隔
      split: options.split || false,
      splitStr: options.splitStr || ' '
    }

    let result
    if (str) {
      str = str + ''
      result = str.substr(0, defaults.begin) + ' ' + (Array(defaults.phLength + 1).join(defaults.placeholder)) + ' ' + str.substr(str.length - defaults.end, str.length)
    }
    if (defaults.split) {
      let temp = ''
      let count = 0
      for (let i = 0, len = result.length; i < len; i++) {
        if (result[i] !== ' ') {
          temp += result[i]
          count++
          if (count === defaults.split) {
            count = 0
            temp += defaults.splitStr
          }
        }
      }
      result = temp
    }

    return result
  },
  /**
   * 深度拷贝
   * @param {Object} obj 需要拷贝的对象
   * @return {Object} 返回值，拷贝后的新对象
   */
  deepCopy (obj) {
    if (typeof obj !== 'object') {
      return obj
    }
    // 先定义一个新对象(数组返回[]，否则返回{})
    var newObject = (obj instanceof Array) ? [] : {}
    for (var key in obj) {
      newObject[key] = utils.deepCopy(obj[key])
    }
    return newObject
  },
  /**
   * 设置document的scale
   * @param {Object} options 参数配置
   */
  setDocumentScale (options) {
    options = options || {}
    // 基准大小   1rem为32px
    let baseSize = options.baseSize || 32
    // 设计图尺寸大小
    let designSize = options.designSize || 375
    // 设置 rem 函数
    function setRem () {
      // 当前页面宽度相对于 375 宽的缩放比例，可根据自己需要修改。
      let scale = document.documentElement.clientWidth / designSize
      // 设置页面根节点字体大小
      document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
    }
    // 初始化
    setRem()
    // 改变窗口大小时重新设置 rem
    window.onresize = function () {
      setRem()
    }
  },
  /**
   * 替换字符串中的长整型为字符串
   * @param {*} str 字符串
   */
  replaceLongInt (str) {
    let numAry = str.match(/[0-9]{19}/)
    for (let i = 0, len = numAry.length; i < len; i++) {
      str = str.replace(numAry[i], `'${numAry[i]}'`)
    }
    return str
  },
  /**
   * 排除不需要的属性
   * @param {Object} objs 需要做排除操作的对象
   * @param {Object|Array|String} keys 需要被排除的key
   * @returns 返回排除后的对象
   * @remark
   * 需要做排除操作的对象：let objs = { a: 'a', b: 'b', c: 'c', d: { d1: 'd1', d2: 'd2', d3: { d31: 'd31', d32: 'd32' } } }
   * 需要被排除的key：let keys = { c: true, d: { d2: true, d3: { d32: true } } }
   * 这里排除了objs对象下的c，objs对象下的d对象下的d2，objs对象下的d对象下的d3对象下的d32
   * 调用方法：let res = Utils.excludeKey(objs, keys)
   * 输出结果：console.info(res)
   */
  excludeKey (objs, keys) {
    let result = null
    if (keys) {
      if (typeof(keys) === 'string') {
        // 如果是字符串，直接转成JSON对象
        keys = JSON.parse('{"' + (keys.replace(/,/g, '":true,"')) + '":true}')
      } else {
        let strKeys = JSON.stringify(keys)
        let strKeyFirst = strKeys.substring(0, 1)
        if (strKeyFirst === '[') {
          // 数组，将数组转成JSON对象，方便匹配
          let temp = {}
          for (let key in keys) {
            temp[key] = true
          }
          keys = temp
        }
      }
      result = result || {}
      let tempObj
      let tempKey
      for (let key in objs) {
        // 临时的对象
        tempObj = objs[key]
        // 临时的key
        tempKey = keys[key]
        if (!tempKey) {
          // 不存在，不需要排除，直接存入result中
          result[key] = objs[key]
        } else {
          // 需要被排除的
          let strTempKey = JSON.stringify(tempKey)
          if (strTempKey.substring(0, 1) === '{') {
            // 如果key是一个对象，继续排除对象下面的key
            result[key] = Utils.excludeKey(tempObj, tempKey)
          }
        }
      }
    }
    // 如果keys不存在导致result为空，直接返回原对象
    return result || objs
  }
}

Vue.prototype.$utils = Vue.prototype.$utils || {}
for (let key in utils) {
  Vue.prototype.$utils[key] = utils[key]
  Vue.prototype[key] = utils[key]
}

export default utils

/**
 * 微信授权相关操作
 * @author AndyPan
 * @date 2020年8月26日13:48:21
 * @remark 针对微信的初始化、登录、授权、拉取用户信息等操作
 */

import Vue from 'vue'
import wx from 'weixin-js-sdk'
import sha1 from 'sha1'
import { CommonsService } from '@/service'
import { STATUS } from '@/configs'

// 辅助函数
let auxiliaryFn = {
  /**
   * 获取openId
   */
  getOpenId () {
    if (process.env.NODE_ENV === 'development') {
      // return 'oO45Hw3C5qhPpCCbd99vdN83CnH8'
      // return 'oO45HwyzdsDTqkKIDiyBXqxVhGhw'
      // return 'oO45Hw3C5qhPpCCbd99vdN83CnH8'
      // return 'oO45Hw7wYMisnchz5eDzVY8XpJWU'
      // return 'oUmu8w3DmaBOuOa5NuTa2UJWZnIQ'
      // return 'oO45Hw8RX8a_oJSrl4-gpU4HY9us'
      // return 'oceoSv8VnpHU_M1g2oCAe4zTmOMc'
      // return 'oO45Hw1BDat_DoGBUPNnA2cR1hM8'
      // return 'oO45Hw825sO7x-xc-bIM3z9Tr7xE'
      // return 'oFTJL5xNiUIL-FDXQscMXaks8_EM'
      // return 'oHEQfwN5OUi8fYcLsCnSWWPQ_p54'
      return 'oFTJL50NZ8ZW-YXrK2VeZENBGJLM'
      // return 'oFTJL5xNiUIL-FDXQscMXaks8_EM'
    } else {
      // return Vue.prototype.$utils.getLocalStorage(STATUS.OPENID)
      return window.localStorage.getItem(STATUS.OPENID)
    }
  },
  /**
   * jssdk签名
   * @param {*} data 签名数据
   */
  getJssdkSign (data) {
    let obj = auxiliaryFn.sortAscii(data)
    let waitSignString = auxiliaryFn.waitSign(obj)
    return sha1(waitSignString)
  },
  /**
   * 把对象进行ASCII码排序
   * @param {*} obj
   */
  sortAscii (obj) {
    var arr = []
    var num = 0
    for (var i in obj) {
      arr[num] = i
      num++
    }
    var sortArr = arr.sort()
    var sortObj = {}
    for (var j in sortArr) {
      sortObj[sortArr[j]] = obj[sortArr[j]]
    }
    return sortObj
  },
  /**
   * 待签名字符串
   * @param {*} data
   */
  waitSign (data) {
    var arr = []
    for (var i in data) {
      arr.push((i + '=' + data[i]))
    }
    let paramsStr = arr.join('&')
    return paramsStr
  },
  /**
   * 生成随机字符串
   * @param {*} len 需要生成随机字符串的长度
   */
  randomString (len) {
    len = len || 32
    // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
    var character = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    var maxPos = character.length
    var pwd = ''
    for (var i = 0; i < len; i++) {
      pwd += character.charAt(Math.floor(Math.random() * maxPos))
    }
    return pwd
  },
  /**
   * 检测是否是会员及激活状态
   */
  isMember (params, resolve, reject) {
    let $utils = Vue.prototype.$utils
    CommonsService.csrCustomerMemberCheck(params).then(res => {
      if (res.code === 'SUCCESS') {
        $utils.setLocalStorage(STATUS.ISMEMBER, res.isMember)
        $utils.setLocalStorage(STATUS.ISPERFECT, res.isPerfect)
        // $utils.setLocalStorage(STATUS.ISMEMBER, false)
        // $utils.setLocalStorage(STATUS.ISPERFECT, false)
        $utils.setLocalStorage(STATUS.ACTIVATIONCODE, res.activationCode)
        if (res.isMember) {
          $utils.setLocalStorage(STATUS.CUSTOMERPHONE, res.customerPhone)
          $utils.setLocalStorage(STATUS.CUSTOMERNAME, res.customerName)
          $utils.setLocalStorage(STATUS.CUSTOMERWECHATLOGO, res.wechatLogo)
          if (res.customerId) {
            $utils.setLocalStorage(STATUS.CUSTOMERID, res.customerId)
          }
        }
        resolve(res)
      } else {
        $utils.setLocalStorage(STATUS.ISMEMBER, false)
        $utils.setLocalStorage(STATUS.ISPERFECT, false)
        reject(res)
      }
    }).catch(err => {
      reject(err)
    })
  },
  /**
   * 微信支付事件绑定
   */
  wxPayBind (res, info, callBack) {
    if (typeof window.WeixinJSBridge === 'undefined') {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', function () {
          auxiliaryFn.onBridgeReady(res, info, callBack)
        }, false)
      } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', function () {
          auxiliaryFn.onBridgeReady(res, info, callBack)
        })
        document.attachEvent('onWeixinJSBridgeReady', function () {
          auxiliaryFn.onBridgeReady(res, info, callBack)
        })
      }
    } else {
      auxiliaryFn.onBridgeReady(res, info, callBack)
    }
  },
  /**
   * 微信支付
   */
  onBridgeReady (res, info, callBack) {
    window.WeixinJSBridge.invoke(
      'getBrandWCPayRequest', {
        // 公众号名称，由商户传入
        appId: res.wechatMiniAppid || info.jsAppId,
        // 随机串
        nonceStr: info.jsNonceStr,
        // 微信签名
        paySign: info.sign,
        // 微信签名方式
        signType: info.signType,
        // 时间戳，自1970年以来的秒数
        timeStamp: info.jsTimeStamp,
        package: info.jsPackage
      }, function (res) {
        let $utils = Vue.prototype.$utils
        let $toast = Vue.prototype.$toast
        if (res.err_msg === 'get_brand_wcpay_request:ok') {
          // 如果支付成功，跳首页
          $toast.success('支付成功')
          setTimeout(() => {
            $utils.openTo($utils.getLocationHost('/layout/index'))
          }, 1200)
        } else if (res.err_msg === 'get_brand_wcpay_request:cancel') {
          // 支付取消
          $toast.fail('支付已取消')
          if (callBack) {
            callBack('error')
          }
        } else {
          // 如果支付失败，回到订单页
          $toast.fail('支付失败，' + res.err_msg)
          if (callBack) {
            callBack('error')
          }
        }
      }
    )
  },
  /**
   * 商城微信支付事件绑定
   */
  wxPayBindMall (info, success, fail, cancel) {
    if (typeof window.WeixinJSBridge === 'undefined') {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', function () {
          auxiliaryFn.onBridgeReadyMall(info, success, fail, cancel)
        }, false)
      } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', function () {
          auxiliaryFn.onBridgeReadyMall(info, success, fail, cancel)
        })
        document.attachEvent('onWeixinJSBridgeReady', function () {
          auxiliaryFn.onBridgeReadyMall(info, success, fail, cancel)
        })
      }
    } else {
      auxiliaryFn.onBridgeReadyMall(info, success, fail, cancel)
    }
  },
  /**
   * 商城微信支付
   */
  onBridgeReadyMall (info, success, fail, cancel) {
    window.WeixinJSBridge.invoke(
      'getBrandWCPayRequest', {
        // 公众号名称，由商户传入
        appId: info.appId,
        // 随机串
        nonceStr: info.nonceStr,
        // 微信签名
        paySign: info.paySign,
        // 微信签名方式
        signType: info.signType,
        // 时间戳，自1970年以来的秒数
        timeStamp: info.timeStamp,
        package: info.package
      }, function (res) {
        let $toast = Vue.prototype.$toast
        if (res.err_msg === 'get_brand_wcpay_request:ok') {
          // 如果支付成功，跳首页
          $toast.success('支付成功')
          if (success) {
            setTimeout(() => {
              success()
            }, 1200)
          }
        } else if (res.err_msg === 'get_brand_wcpay_request:cancel') {
          // 支付取消
          $toast.fail('支付已取消')
          if (cancel) {
            setTimeout(() => {
              cancel()
            }, 1200)
          }
        } else {
          // 如果支付失败，回到订单页
          $toast.fail('支付失败，' + res.err_msg)
          if (fail) {
            setTimeout(() => {
              fail()
            }, 1200)
          }
        }
      }
    )
  },
  /**
   * 设置微信配置
   */
  wxConfig (options) {
    options = options || {}
    // let link = (signUrl || window.firstLocation || window.location.href)
    let link = window.location.href
    return CommonsService.customerWechatTicket().then(res => {
      // 当前时间戳
      let timestamp = (new Date()).getTime()
      // 随机字符串
      let noncestr = auxiliaryFn.randomString(16)
      // jssdk签名字符串
      let jssdkSignString = {
        noncestr: noncestr,
        jsapi_ticket: res.ticket,
        timestamp: timestamp,
        url: link
      }
      let appId = res.appid
      // 保存AppId
      Vue.prototype.$utils.setLocalStorage(STATUS.APPID, appId)
      // let loadingInstance = Vue.prototype.$toast.loading('获取微信配置...')
      // let loadingInstance = Vue.prototype.$toast.loading('加载中...')
      let signature = auxiliaryFn.getJssdkSign(jssdkSignString)
      // 微信配置
      wx.config({
        debug: false,
        appId: appId,
        timestamp: timestamp,
        signature: signature,
        nonceStr: noncestr,
        jsApiList: [
          'chooseWXPay',
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareWeibo',
          'onMenuShareQZone',
          'getLocation',
          'openLocation',
          'hideMenuItems'
        ]
      })
      // wx ready or wx error
      return new Promise((resolve, reject) => {
        wx.ready(() => {
          // 隐藏按钮 复制链接: "menuItem:copyUrl"、在QQ浏览器中打开: "menuItem:openWithQQBrowser"、在Safari中打开: "menuItem:openWithSafari"
          wx.hideMenuItems({
            menuList: ['menuItem:openWithQQBrowser', 'menuItem:openWithSafari', 'menuItem:copyUrl']
          })
          // if (loadingInstance) {
          //   loadingInstance.hide()
          // }
          resolve(wx)
        })
        wx.error((err) => {
          // console.info(err)
          // if (loadingInstance) {
          //   loadingInstance.hide()
          // }
          if (process.env.NODE_ENV === 'development') {
            resolve(wx)
          } else {
            if (options.wxError) {
              options.wxError(err)
            } else {
              let currentHref = window.location.href
              let href = currentHref.split('?')[0]
              let firstLocation = (window.firstLocation || '').split('?')[0]
              if (firstLocation !== href) {
                let reloadCount = parseInt(Vue.prototype.$utils.getLocalStorage('ReloadCount') || '0')
                if (reloadCount < 0) {
                  window.location.href = currentHref
                  Vue.prototype.$utils.setLocalStorage('ReloadCount', reloadCount + 1)
                }
              } else {
                // console.info(firstLocation + ',' + href)
                // Vue.prototype.$toast.fail('获取微信配置失败，请刷新当前页面！')
                let result = reject(err)
                if (result !== false) {
                  let reloadCount = parseInt(Vue.prototype.$utils.getLocalStorage('ReloadCount') || '0')
                  if (reloadCount < 1) {
                    window.location.reload()
                    Vue.prototype.$utils.setLocalStorage('ReloadCount', reloadCount + 1)
                  }
                }
              }
            }
          }
        })
      })
    })
  },
  /**
   * 绑定微信拉起支付事件
   */
  weixinPay (params) {
    let that = auxiliaryFn
    if (typeof window.WeixinJSBridge === 'undefined') {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', function () { that.onBridgeReadyOrderPay(params) }, false)
      } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', function () { that.onBridgeReadyOrderPay(params) })
        document.attachEvent('onWeixinJSBridgeReady', function () { that.onBridgeReadyOrderPay(params) })
      }
    } else {
      that.onBridgeReadyOrderPay(params)
    }
  },
  /**
   * 微信支付事件响应
   */
  onBridgeReadyOrderPay (params) {
    let responseErrorCallBack = params.responseErrorCallBack
    let responseSuccessCallBack = params.responseSuccessCallBack
    let JSBridgeCallBack = params.JSBridge
    window.WeixinJSBridge.invoke(
      'getBrandWCPayRequest', {
        // 公众号名称，由商户传入
        appId: params.appId,
        // 时间戳，自1970年以来的秒数
        timeStamp: params.timeStamp,
        // 随机串
        nonceStr: params.nonceStr,
        package: params.package,
        // 微信签名方式：
        signType: params.signType,
        // 微信签名
        paySign: params.paySign
      }, function (res) {
        if (JSBridgeCallBack) {
          JSBridgeCallBack(res)
        }
        if (res.err_msg === 'get_brand_wcpay_request:ok') {
          // 如果支付成功，跳转到订单列表
          // 使用以上方式判断前端返回,微信团队郑重提示：
          // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
          if (responseSuccessCallBack) {
            responseSuccessCallBack()
          }
        } else if (res.err_msg === 'get_brand_wcpay_request:cancel') {
          // 如果点击取消，则直接关闭微信支付，回到订单页（不处理 就是当前页）
          Vue.prototype.$toast.fail('支付已取消')
        } else {
          if (responseErrorCallBack) {
            responseErrorCallBack(res)
          }
        }
      }
    )
  }
}

export default {
  /**
   * 微信初始化配置并获取定位信息
   */
  wxInitAndGetLocation (options) {
    let that = this
    return new Promise((resolve, reject) => {
      // 获取缓存坐标
      // let longitude = window.localStorage.getItem(STATUS.LONGITUDE)
      // let latitude = window.localStorage.getItem(STATUS.LATITUDE)
      // if (longitude && latitude) {
      //   resolve({ longitude, latitude })
      // } else {
      // 获取位置
      // that.getLocation({
      //   success (location) {
      //     let longitude = location.longitude
      //     let latitude = location.latitude
      //     // 经纬度缓存
      //     window.localStorage.setItem(STATUS.LONGITUDE, longitude)
      //     window.localStorage.setItem(STATUS.LATITUDE, latitude)
      //     // 获取成功
      //     resolve({ longitude, latitude })
      //   },
      //   fail () {
      // 获取位置失败，再去设置配置重新获取
      that.wxInit(options).then(res => {
        that.getLocation({
          success (location) {
            let longitude = location.longitude
            let latitude = location.latitude
            // 经纬度缓存
            window.localStorage.setItem(STATUS.LONGITUDE, longitude)
            window.localStorage.setItem(STATUS.LATITUDE, latitude)
            // 获取成功
            resolve({ longitude, latitude })
          }
        })
      }).catch((err) => {
        reject(err)
      })
      //     return false
      //   }
      // })
    //   }
    })
  },
  /**
   * 微信初始化
   */
  wxInit (options) {
    let isWeChart = Vue.prototype.$utils.isWeixin()
    if (isWeChart) {
      return auxiliaryFn.wxConfig(options)
    } else {
      Vue.prototype.$toast.fail('请使用微信打开')
    }
  },
  /**
   * 微信登录
   */
  wxLogin () {
    let $utils = Vue.prototype.$utils
    let openId = auxiliaryFn.getOpenId()
    let url = decodeURI(window.location.href)
    let params = $utils.queryUrl(window.location.href) || {}
    if (openId) {
      // 已登录
      return new Promise((resolve, reject) => {
        auxiliaryFn.isMember({ openid: openId }, (res) => {
          // 是否是会员
          let isMember = $utils.getLocalStorage(STATUS.ISMEMBER)
          if (params.channel && params.channel !== 'null' && isMember === 'true') {
            if (params.code && !params.invitecode) {
              if (params.isChannel && params.isChannel !== 'null') {
                if (params.code) {
                  CommonsService.customerChannelBind({
                    channelWxOpenId: '',
                    channelWxCode: params.code,
                    channelCode: params.channel,
                    ycyOpenid: openId,
                    customerId: $utils.getLocalStorage(STATUS.CUSTOMERID)
                  }).then(res => {
                    if (res.code === 'SUCCESS') {
                      resolve(res)
                    } else {
                      reject(res)
                    }
                  })
                } else {
                  resolve(res)
                }
              } else {
                resolve(res)
              }
            } else {
              if (params.invitecode) {
                url = url.split('?')[0]
                let state = params.invitecode + '|' +
                  params.membershipno + '|' +
                  params.membershipcode + '|' +
                  params.channel + '|isChannel'
                CommonsService.customerChannelJudge({
                  htmlUrl: url,
                  state,
                  channelCode: params.channel,
                  ycyOpenid: openId,
                  customerId: $utils.getLocalStorage(STATUS.CUSTOMERID)
                }).then(res => {
                  if (res.code === 'SUCCESS') {
                    if (res.channelRedirectUrl) {
                      if (params.channelOpendId && params.channelOpendId !== 'null') {
                        CommonsService.customerChannelBind({
                          channelWxOpenId: params.channelOpendId,
                          channelWxCode: params.code,
                          channelCode: params.channel,
                          ycyOpenid: openId,
                          customerId: $utils.getLocalStorage(STATUS.CUSTOMERID)
                        }).then(res => {
                          if (res.code === 'SUCCESS') {
                            resolve(res)
                          } else {
                            reject(res)
                          }
                        })
                      } else {
                        window.location.href = res.channelRedirectUrl
                      }
                    } else {
                      resolve(res)
                    }
                  }
                })
              } else {
                resolve(res)
              }
            }
          } else {
            resolve(res)
          }
        }, reject)
      })
    } else {
      // 未登录
      // let url = decodeURI(window.location.href)
      // let params = $utils.queryUrl(window.location.href) || {}
      if (params.code) {
        // 获取用户openId
        return new Promise((resolve, reject) => {
          CommonsService.customerWechatAccessToken({
            code: params.code,
            url
          }).then(res => {
            let openId = res.openid
            $utils.setLocalStorage(STATUS.OPENID, openId)
            // 检测是否是会员及激活状态
            auxiliaryFn.isMember({ openid: openId }, (res) => {
              // 是否是会员
              let isMember = $utils.getLocalStorage(STATUS.ISMEMBER)
              if (params.channel && params.channel !== 'null' && isMember === 'true') {
                let state = params.invitecode + '|' +
                  params.membershipno + '|' +
                  params.membershipcode + '|' +
                  params.channel + '|isChannel'
                CommonsService.customerChannelJudge({
                  htmlUrl: url,
                  state,
                  channelCode: params.channel,
                  ycyOpenid: openId,
                  customerId: $utils.getLocalStorage(STATUS.CUSTOMERID)
                }).then(res => {
                  if (res.code === 'SUCCESS') {
                    if (res.channelRedirectUrl) {
                      if (params.channelOpendId && params.channelOpendId !== 'null') {
                        CommonsService.customerChannelBind({
                          channelWxOpenId: params.channelOpendId,
                          channelWxCode: params.code,
                          channelCode: params.channel,
                          ycyOpenid: openId,
                          customerId: $utils.getLocalStorage(STATUS.CUSTOMERID)
                        }).then(res => {
                          if (res.code === 'SUCCESS') {
                            resolve(res)
                          } else {
                            reject(res)
                          }
                        })
                      } else {
                        window.location.href = res.channelRedirectUrl
                      }
                    } else {
                      resolve(res)
                    }
                  }
                })
              } else {
                resolve(res)
              }
            }, reject)
          }).catch(err => {
            reject(err)
          })
        })
      } else {
        // 获取微信认证地址
        let state = params.invitecode + '|' +
          params.membershipno + '|' +
          params.membershipcode + '|' +
          params.channel + '|' +
          params.channelOpendId
        return new Promise((resolve, reject) => {
          CommonsService.customerWechatRedirectUrl({
            htmlUrl: url.split('?')[0],
            state
          }).then(res => {
            $utils.setLocalStorage(STATUS.PAGEREDIREDBEFORE, JSON.stringify(params))
            window.location.href = res.redirectUrl
          }).catch(err => {
            reject(err)
          })
        })
      }
    }
  },
  /**
   * 获取openId
   */
  getOpenId () {
    return auxiliaryFn.getOpenId()
  },
  /**
   * 获取位置信息
   * @param {*} options
   */
  getLocation (options) {
    // 成功
    let success = options.success
    // 失败
    let fail = options.fail
    // 取消
    let cancel = options.cancel
    // 判断是开发环境，直接返回默认经纬度
    if (process.env.NODE_ENV === 'development') {
      if (success) {
        success({
          longitude: '106.57837',
          latitude: '29.55956'
        })
      }
    } else {
      // let positionLoading = Vue.prototype.$toast.loading('加载中...')
      wx.getLocation({
        type: 'gcj02',
        success: function (location) {
          // if (positionLoading) {
          //   positionLoading.hide()
          // }
          if (success) {
            success(location)
          }
        },
        fail: function (err) {
          // if (positionLoading) {
          //   positionLoading.hide()
          // }
          let result
          if (fail) {
            result = fail(err)
          }
          if (result !== false) {
            let longitude = window.localStorage.getItem(STATUS.LONGITUDE)
            let latitude = window.localStorage.getItem(STATUS.LATITUDE)
            // let longitude = Vue.prototype.$utils.getLocalStorage(STATUS.LONGITUDE)
            // let latitude = Vue.prototype.$utils.getLocalStorage(STATUS.LATITUDE)
            if (longitude && latitude) {
              if (success) {
                success({
                  longitude: longitude,
                  latitude: latitude
                })
              }
            } else {
              Vue.prototype.$dialog({
                title: '提示',
                content: '有车云加油服务需要获取您的位置才能为您提供服务，请先开通定位',
                okBtnTxt: '我知道了',
                noCancelBtn: true,
                closeOnClickModal: false,
                onOkBtn  () {
                  this.close()
                }
              })
            }
          }
        },
        cancel: function (res) {
          // if (positionLoading) {
          //   positionLoading.hide()
          // }
          let result
          if (cancel) {
            result = cancel(res)
          }
          if (result !== false) {
            Vue.prototype.$toast.fail('您已拒绝授权获取地理位置')
          }
        }
      })
    }
  },
  /**
   * 打开地图
   * @param {*} options 打开地图参数选项
   */
  openLocation (options) {
    wx.openLocation(options)
  },
  /**
   * 加油订单微信支付
   */
  wxPayByOilOrder (options) {
    let params = options.params
    let callBack = options.callBack
    let priceChanged = options.priceChanged
    let oilOrderSuccessCount = options.oilOrderSuccessCount
    let stationOutOfRange = options.stationOutOfRange
    CommonsService.getOrderPayInfo(params).then(res => {
      let code = res.code
      if (code === 'SUCCESS') {
        let payHandleMode = res.payHandleMode
        if (payHandleMode === 'URL') {
          window.location.href = res.payInfoUrl
        } else if (payHandleMode === 'JSON') {
          let payInfoJson = res.payInfoJson
          if (payInfoJson) {
            auxiliaryFn.wxPayBind(res, JSON.parse(payInfoJson), callBack)
          } else {
            Vue.prototype.$toast.fail('支付信息为空：[payInfoJson]')
          }
        } else {
          Vue.prototype.$toast.fail('支付处理模式无效：[payHandleMode=' + (payHandleMode) + ']')
        }
      } else if (code === 'PRICE_CHANGED') {
        if (priceChanged) {
          priceChanged(res)
        }
        if (callBack) {
          callBack('error')
        }
      } else if (code === 'OIL_ORDER_SUCCESS_COUNT') {
        if (oilOrderSuccessCount) {
          oilOrderSuccessCount(res)
        }
        if (callBack) {
          callBack('error')
        }
      } else if (code === 'STATION_OUT_OF_RANGE') {
        if (stationOutOfRange) {
          stationOutOfRange(res)
        }
        if (callBack) {
          callBack('error')
        }
      } else {
        if (callBack) {
          callBack('error')
        }
      }
    }).catch(() => {
      if (callBack) {
        callBack('error')
      }
    })
  },
  /**
   * 初始化分享
   * @param wx
   * @param options 参数
   */
  initSharePage (data, fun) {
    const opts = {
      title: data.title,
      desc: data.desc,
      link: data.link,
      imgUrl: data.imgUrl,
      success: fun
    }
    wx.onMenuShareAppMessage(opts)
    wx.onMenuShareTimeline(opts)
    wx.onMenuShareQQ(opts)
    wx.onMenuShareWeibo(opts)
    wx.onMenuShareQZone(opts)
  },
  /**
   * 订单支付
   * @param {*} options 支付选项
   */
  tradeOrderPay (options) {
    // // 支付的订单ID
    // let orderId = options.orderId
    // // 响应回调
    // let responseCallBack = options.responseCallBack
    // // 响应错误回调
    // let responseErrorCallBack = options.responseErrorCallBack
    // // 响应成功回调
    // let responseSuccessCallBack = options.responseSuccessCallBack
    // let $utils = Vue.prototype.$utils
    // let payParams = {
    //   // 支付订单ID
    //   orderId,
    //   // 用户ip
    //   userIp: $utils.getLocalStorage(STATUS.USERIP),
    //   // 用户ID
    //   customerId: $utils.getLocalStorage(STATUS.CUSTOMERID),
    //   // 设备类型
    //   deviceType: $utils.terminal(),
    //   // 客户端类型
    //   clientType: 'H5'
    // }
    // if (options.returnUrl) {
    //   payParams.returnUrl = options.returnUrl
    // }
    // ActivationService.tradeOrderPay(payParams).then(res => {
    //   // 响应回调
    //   if (responseCallBack) {
    //     responseCallBack(res)
    //   }
    //   if (res.code === 'SUCCESS') {
    //     let payHandleMode = res.payHandleMode
    //     let wechatPublicPay = res.wechatPublicPay
    //     if (payHandleMode === 'URL') {
    //       window.location.href = wechatPublicPay.payUrl
    //     } else if (payHandleMode === 'JSON') {
    //       if (wechatPublicPay.payInfoJson) {
    //         let result = JSON.parse(wechatPublicPay.payInfoJson)
    //         let obj = {
    //           appId: result.jsAppId,
    //           timeStamp: result.jsTimeStamp,
    //           nonceStr: result.jsNonceStr,
    //           package: result.jsPackage,
    //           signType: result.signType,
    //           paySign: result.sign,
    //           JSBridgeCallBack: options.JSBridgeCallBack,
    //           responseSuccessCallBack,
    //           responseErrorCallBack
    //         }
    //         auxiliaryFn.weixinPay(obj)
    //       } else {
    //         if (responseSuccessCallBack) {
    //           responseSuccessCallBack(res)
    //         }
    //       }
    //     }
    //   }
    // }, (error) => {
    //   Vue.prototype.$toast.fail('拉取支付信息失败[' + JSON.stringify(error || '{}') + ']')
    //   // if (responseErrorCallBack) {
    //   //   responseErrorCallBack(error)
    //   // }
    // })
  }
}

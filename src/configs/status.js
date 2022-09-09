/**
 * 状态字段配置
 * @author AndyPan (pye-mail@163.com)
 * @createdate 2020年7月6日15:39:45
 * @lastupdatedate 2020年7月6日15:40:28
 * @remark 全局静态字段名称
 */

// 当前环境
const NODE_ENV = process.env.NODE_ENV

let Status = {
  // 当前用户IP
  USERIP: 'userIp',
  // 当前用户城市
  USERCITY: 'userCity',
  // 微信appID
  APPID: 'appId',
  // 微信openId
  OPENID: 'openId',
  // 客户微信头像
  CUSTOMERWECHATLOGO: 'customerWechatLogo',
  // 用户信息
  USERINFO: 'userInfo',
  // 微信登录授权前进入页面时的参数(微信登录页面丢失的参数)
  PAGEREDIREDBEFORE: 'pageRediredBefore',
  // 门店后退
  BACKPATH: 'backPath',
  // 保留上一个页面查询参数及滚动条距离
  PREVPARAMSMAINTAIN: 'prevParamsMaintain',
  // 保留上一个页面查询参数及滚动条距离
  PREVPARAMSGAS: 'prevParamsGas',
  // 当前路由
  CURRENTROUTE: 'currentRoute'
}

let thisStatus = {}
for (let key in Status) {
  // 以当前环境作为缓存key前缀，避免不同环境的缓存冲突
  thisStatus[key] = NODE_ENV + '_' + Status[key]
}

export default thisStatus

/**
 * 文本及状态配置
 * @author AndyPan (pye-mail@163.com)
 * @createdate 2020年7月6日15:37:27
 * @lastupdatedate 2020年7月6日15:38:30
 * @remark 语言配置
 */

export default {
  // app版本号
  appVersion: '1.0.0',
  // APP名称
  appName: '有车云车生活',
  // 技术支持
  technicalSupport: '重庆有车云电子商务有限公司',
  // 空占位
  placeholder: '无',
  // 加载中
  loading: '加载中',
  // 响应状态
  responseStatus: {
    400: { message: '错误请求' },
    401: { message: '未授权，请重新登录' },
    403: { message: '拒绝访问' },
    404: { message: '请求错误,未找到该资源' },
    405: { message: '请求方法未允许' },
    408: { message: '请求超时' },
    500: { message: '服务器端出错' },
    501: { message: '网络未实现' },
    502: { message: '网络错误' },
    503: { message: '服务不可用' },
    504: { message: '网络超时' },
    505: { message: 'http版本不支持该请求' }
  },
  // 属性表头
  attrHead: [
    { text: '属性', flex: 2 },
    { text: '属性名称', flex: 3 },
    { text: '类型', flex: 2 },
    { text: '属性说明', flex: 4 },
    { text: '默认值', flex: 2 },
    { text: '示例', flex: 2 }
  ],
  // 方法表头
  funHead: [
    { text: '名称', flex: 2 },
    { text: '说明', flex: 3 },
    { text: '参数', flex: 1 }
  ],
  // 参数表头
  paramHead: [
    { text: '名称', flex: 2 },
    { text: '类型', flex: 1.5 },
    { text: '说明', flex: 3 }
  ],
  // 可用值表头
  avaHead: [{ text: '可用值' }, { text: '说明' }],
  // 事件表头
  eventHead: [
    { text: '名称', flex: 2 },
    { text: '说明', flex: 3 },
    { text: '参数', flex: 1 }
  ],
  // 插槽表头
  slotHead: [
    { text: '类型', flex: 2 },
    { text: '名称', flex: 2 },
    { text: '说明', flex: 4 }
  ],
  // 插槽类型表
  slotTypeTable: {
    width: '120%',
    head: [
      { text: '类型', flex: 1 },
      { text: '说明', flex: 4 }
    ],
    body: [
      [{ text: '匿名插槽' }, { text: '不需要插槽名称，直接在组件内添加子元素', textModel: 'scroll' }],
      [{ text: '具名插槽' }, { text: '组件内固定的slot名', textModel: 'scroll' }],
      [{ text: '作用域插槽' }, { text: '由组件调用者自定义slot名，也可以叫动态的插槽', textModel: 'scroll' }]
    ]
  }
}

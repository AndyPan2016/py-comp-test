/**
 * comm-not-found文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年8月31日17:06:07
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comm-not-found',
  // 内部属性
  data () {
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '未找到页面模块(comm-not-found)文档'
        },
        {
          type: 'paragraph',
          content: '未找到页面模块'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '模块标签'
        },
        {
          type: 'code',
          content: [
            '<comm-not-found />'
          ]
        },
        {
          type: 'title',
          grade: 'p3',
          content: '相关属性'
        },
        {
          type: 'table',
          width: '200%',
          table: {
            head: LANG.attrHead,
            body: [
              [
                { text: 'text' },
                { text: '提示文字' },
                { text: 'String' },
                { text: '提示文字' },
                { text: '404' },
                { text: '文字' }
              ],
              [
                { text: 'remark' },
                { text: '提示备注' },
                { text: 'String' },
                { text: '提示备注' },
                { text: '对不起，您访问的页面不存在！', textModel: 'scroll' },
                { text: '备注' }
              ],
              [
                { text: 'backBtnText' },
                { text: '返回按钮文字' },
                { text: 'String' },
                { text: '提示备注' },
                { text: '返回首页' },
                { text: '按钮文字' }
              ],
              [
                { text: 'backRoute' },
                { text: '返回按钮要跳转的页面路由', textModel: 'scroll' },
                { text: 'String' },
                { text: '返回按钮要跳转的页面路由', textModel: 'scroll' },
                { text: '/' },
                { text: '/pages/index' }
              ]
            ]
          }
        },
        {
          type: 'title',
          grade: 'p2',
          content: '效果展示'
        }
      ]
    }
  },
  // 对外属性
  props: { },
  // 组件
  components: { },
  // 监听
  watch: { },
  // 内部方法
  methods: { },
  // 开始创建
  created () { },
  // 创建完成
  mounted () { },
  // 销毁前
  beforeDestroy () { },
  // 销毁
  destory () { }
}

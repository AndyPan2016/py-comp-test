/**
 * comm-document-paragraph文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年8月31日14:46:39
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comm-document-paragraph',
  // 内部属性
  data () {
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '文档段落模块(comm-document-paragraph)文档'
        },
        {
          type: 'paragraph',
          content: '文档段落，主要用于api文档展示，包括标题、段落、文本、代码、表格等'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '模块标签'
        },
        {
          type: 'code',
          content: [
            '<comm-document-paragraph />'
          ]
        },
        {
          type: 'title',
          grade: 'p3',
          content: '相关属性'
        },
        {
          type: 'text',
          content: '此处为模块参数对象documentParagraph下的具体属性'
        },
        {
          type: 'space'
        },
        {
          type: 'table',
          width: '200%',
          table: {
            head: LANG.attrHead,
            body: [
              [
                { text: 'type' },
                {
                  text: '文档类型',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'title' }, { text: '标题', textModel: 'scroll' }],
                      [{ text: 'paragraph' }, { text: '段落', textModel: 'scroll' }],
                      [{ text: 'text' }, { text: '纯文本', textModel: 'scroll' }],
                      [{ text: 'link' }, { text: '链接', textModel: 'scroll' }],
                      [{ text: 'route' }, { text: '(内部跳转)路由', textModel: 'scroll' }],
                      [{ text: 'code' }, { text: '代码', textModel: 'scroll' }],
                      [{ text: 'table' }, { text: '表格', textModel: 'scroll' }]
                    ]
                  }
                },
                { text: 'String' },
                { text: '文档类型' },
                { text: '无' },
                { text: 'title' }
              ],
              [
                { text: 'content' },
                { text: '显示内容', textModel: 'scroll' },
                { text: 'String|Array' },
                { text: '除table外的其他类型显示内容,支持html字符串,type为code时,content为数组', textModel: 'scroll' },
                { text: '空' },
                { text: '内容' }
              ],
              [
                { text: 'table' },
                {
                  text: '表格',
                  table: {
                    head: [{ text: '属性' }, { text: '说明' }],
                    body: [
                      [
                        { text: 'head' },
                        {
                          text: '表格头部集合',
                          table: {
                            head: [{ text: '属性' }, { text: '说明' }],
                            body: [
                              [
                                { text: 'text' },
                                { text: '表格头部列内容,支持html字符串', textModel: 'scroll' }
                              ],
                              [
                                { text: 'flex' },
                                { text: 'flex值(1,2,3...),列占比宽', textModel: 'scroll' }
                              ]
                            ]
                          }
                        }
                      ],
                      [
                        { text: 'body' },
                        {
                          text: '表格主体集合',
                          table: {
                            head: [{ text: '属性' }, { text: '说明' }],
                            body: [
                              [
                                { text: 'text' },
                                { text: '表格主体列内容,支持html字符串', textModel: 'scroll' }
                              ],
                              [
                                { text: 'textModel' },
                                { text: '文本显示模式,scroll.超出截断显示滚动条 text-overflow.超出显示省略', textModel: 'scroll' }
                              ]
                            ]
                          }
                        }
                      ]
                    ]
                  }
                },
                { text: 'Object' },
                { text: '表格' },
                { text: '无' },
                { text: '{ head: [...], body: [...] }', textModel: 'scroll' }
              ],
              [
                { text: 'grade' },
                {
                  text: '标题等级',
                  textModel: 'scroll',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'p1' }, { text: '等级一' }],
                      [{ text: 'p2' }, { text: '等级二' }],
                      [{ text: 'p3' }, { text: '等级三' }],
                      [{ text: 'p4' }, { text: '等级四' }],
                      [{ text: 'p5' }, { text: '等级五' }],
                      [{ text: 'p6' }, { text: '等级六' }]
                    ]
                  }
                },
                { text: 'String' },
                { text: '标题等级(仅当type为title时有效)' },
                { text: 'p6' },
                { text: 'p6' }
              ],
              [
                { text: 'link' },
                { text: '链接字符串' },
                { text: 'String' },
                { text: '链接字符串(仅当type为link时有效)', textModel: 'scroll' },
                { text: '无' },
                { text: 'https://www.xxxx.com/', textModel: 'scroll' }
              ],
              [
                { text: 'route' },
                { text: '路由字符串' },
                { text: 'String' },
                { text: '路由字符串(仅当type为route时有效)', textModel: 'scroll' },
                { text: '无' },
                { text: '/page/index?param=1', textModel: 'scroll' }
              ],
              [
                { text: 'target' },
                {
                  text: '(路由|链接)打开方式',
                  textModel: 'scroll',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'self' }, { text: '当前页打开' }],
                      [{ text: 'blank' }, { text: '新页面打开' }]
                    ]
                  }
                },
                { text: 'String' },
                { text: '(路由|链接)打开方式(仅当type为route|link时有效)' },
                { text: '无' },
                { text: 'blank' }
              ],
              [
                { text: 'query' },
                { text: '路由参数对象' },
                { text: 'Object' },
                { text: '路由参数对象(仅当type为roue时有效)', textModel: 'scroll' },
                { text: '无' },
                { text: '{params: 1,...}', textModel: 'scroll' }
              ],
              [
                { text: 'fn' },
                { text: '路由|链接点击操作函数', textModel: 'scroll' },
                { text: 'Function' },
                { text: '路由|链接点击操作函数,自定义去如何打开(仅当type为roue|link时有效)', textModel: 'scroll' },
                { text: '无' },
                { text: '无' }
              ],
              [
                { text: 'width' },
                { text: '表格宽度' },
                { text: 'String' },
                { text: '表格宽度,带单位(仅当type为table时有效)', textModel: 'scroll' },
                { text: '无' },
                { text: '80%或者1024px', textModel: 'scroll' }
              ]
            ]
          }
        },
        {
          type: 'title',
          grade: 'p3',
          content: '插槽'
        },
        {
          type: 'table',
          width: '120%',
          table: {
            head: LANG.slotHead,
            body: [
              [{ text: '匿名插槽', table: LANG.slotTypeTable }, { text: '无' }, { text: '自定义文档内容，使用时，不需要插槽名称', textModel: 'scroll' }]
            ]
          }
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

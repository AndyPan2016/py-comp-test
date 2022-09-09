/**
 * comm-document-table文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月3日11:20:23
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comm-document-table',
  // 内部属性
  data () {
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '文档表格模块(comm-document-table)文档'
        },
        {
          type: 'paragraph',
          content: '文档表格，用于api文档展示，包括表头和内容，内容中可以再嵌弹窗表格，并且弹窗表格可以无限极嵌套'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '模块标签'
        },
        {
          type: 'code',
          content: [
            '<comm-document-table />'
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
                { text: 'table' },
                {
                  text: '表格',
                  table: {
                    width: '150%',
                    head: LANG.attrHead,
                    body: [
                      [
                        { text: 'head' },
                        {
                          text: '表头',
                          table: {
                            width: '150%',
                            head: LANG.attrHead,
                            body: [
                              [
                                { text: 'text' },
                                { text: '表头列文本' },
                                { text: 'String' },
                                { text: '表格头部列内容,支持html字符串', textModel: 'scroll' },
                                { text: '无' },
                                { text: '表头' }
                              ],
                              [
                                { text: 'flex' },
                                { text: '表头列宽比例' },
                                { text: 'Number' },
                                { text: 'flex值(1,2,3...),列占比宽', textModel: 'scroll' },
                                { text: '无' },
                                { text: '2' }
                              ]
                            ]
                          }
                        },
                        { text: 'Array' },
                        { text: '表格头部数据集合', textModel: 'scroll' },
                        { text: '无' },
                        { text: '[{...},...]', textModel: 'scroll' }
                      ],
                      [
                        { text: 'body' },
                        {
                          text: '表格主体',
                          table: {
                            width: '150%',
                            head: LANG.attrHead,
                            body: [
                              [
                                { text: '[]' },
                                {
                                  text: '行',
                                  table: {
                                    width: '150%',
                                    head: LANG.attrHead,
                                    body: [
                                      [
                                        { text: 'text' },
                                        { text: '列内容' },
                                        { text: 'String' },
                                        { text: '表格主体每一行的列内容,支持html字符串', textModel: 'scroll' },
                                        { text: '无' },
                                        { text: '内容' }
                                      ],
                                      [
                                        { text: 'textModel' },
                                        {
                                          text: '显示模式',
                                          table: {
                                            head: LANG.avaHead,
                                            body: [
                                              [
                                                { text: 'scroll' },
                                                { text: '超出截断显示滚动条' }
                                              ],
                                              [
                                                { text: 'text-overflow' },
                                                { text: '超出显示省略' }
                                              ]
                                            ]
                                          }
                                        },
                                        { text: 'String' },
                                        { text: '内容文本显示模式', textModel: 'scroll' },
                                        { text: 'text-overflow', textModel: 'scroll' },
                                        { text: 'scroll' }
                                      ]
                                    ]
                                  }
                                },
                                { text: 'Array' },
                                { text: 'body下的行' },
                                { text: '无' },
                                { text: '[{...},...]' }
                              ]
                            ]
                          }
                        },
                        { text: 'Array' },
                        { text: '表格主体数据集合', textModel: 'scroll' },
                        { text: '无' },
                        { text: '[[{...},...],...]', textModel: 'scroll' }
                      ]
                    ]
                  }
                },
                { text: 'Object' },
                { text: '表格参数对象', textModel: 'scroll' },
                { text: '无' },
                { text: '{ head: [...], body: [...] }', textModel: 'scroll' }
              ],
              [
                { text: 'contentWidth' },
                { text: '表格内容宽度' },
                { text: 'String' },
                { text: '表格内容宽度，默认宽度是与父容器宽度一致，如果设置内容宽度超过100%，就会产生滚动条', textModel: 'scroll' },
                { text: '100%' },
                { text: '200%' }
              ]
            ]
          }
        },
        {
          type: 'title',
          grade: 'p3',
          content: '事件'
        },
        {
          type: 'table',
          width: '120%',
          table: {
            head: LANG.eventHead,
            body: [
              [
                { text: 'columnClick' },
                { text: '列点击事件' },
                {
                  text: '详情',
                  table: {
                    head: LANG.paramHead,
                    body: [
                      [
                        { text: 'e' },
                        { text: 'Event' },
                        { text: 'Event对象' }
                      ],
                      [
                        { text: 'column' },
                        { text: 'Object' },
                        { text: '当前点击列对象', textModel: 'scroll' }
                      ],
                      [
                        { text: 'bidx' },
                        { text: 'Number' },
                        { text: '当前行的索引', textModel: 'scroll' }
                      ],
                      [
                        { text: 'hidx' },
                        { text: 'Number' },
                        { text: '当前列的索引', textModel: 'scroll' }
                      ]
                    ]
                  }
                }
              ]
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

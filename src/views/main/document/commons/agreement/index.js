/**
 * comm-agreement文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月2日12:00:39
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comm-agreement',
  // 内部属性
  data () {
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '协议标签模块(comm-agreement)文档'
        },
        {
          type: 'paragraph',
          content: '协议标签，用于展示一段"请阅读并同意《***协议》"'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '模块标签'
        },
        {
          type: 'code',
          content: [
            '<comm-agreement />'
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
                { text: 'preText' },
                { text: '协议文字', textModel: 'scroll' },
                { text: 'String' },
                { text: '协议项前面的文字', textModel: 'scroll' },
                { text: '无' },
                { text: '请阅读协议' }
              ],
              [
                { text: 'afterText' },
                { text: '协议文字', textModel: 'scroll' },
                { text: 'String' },
                { text: '协议项后面的文字', textModel: 'scroll' },
                { text: '无' },
                { text: '协议' }
              ],
              [
                { text: 'dataList' },
                {
                  text: '协议列表',
                  textModel: 'scroll',
                  table: {
                    width: '200%',
                    head: LANG.attrHead,
                    body: [
                      [
                        { text: 'link' },
                        { text: '链接字符串' },
                        { text: 'String' },
                        { text: '链接字符串', textModel: 'scroll' },
                        { text: '无' },
                        { text: 'https://www.xxxx.com/', textModel: 'scroll' }
                      ],
                      [
                        { text: 'route' },
                        { text: '路由字符串' },
                        { text: 'String' },
                        { text: '路由字符串，可以跳转内部页面', textModel: 'scroll' },
                        { text: '无' },
                        { text: '/page/agreement?param=1', textModel: 'scroll' }
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
                        { text: '(路由|链接)打开方式(仅当type为route|link时有效)', textModel: 'scroll' },
                        { text: '无' },
                        { text: 'blank' }
                      ],
                      [
                        { text: 'query' },
                        { text: '路由参数对象' },
                        { text: 'Object' },
                        { text: '路由参数对象(仅对roue有效)', textModel: 'scroll' },
                        { text: '无' },
                        { text: '{params: 1,...}', textModel: 'scroll' }
                      ],
                      [
                        { text: 'content' },
                        { text: '协议项的文本', textModel: 'scroll' },
                        { text: 'String' },
                        { text: '协议项的文本', textModel: 'scroll' },
                        { text: '无' },
                        { text: '用户协议' }
                      ]
                    ]
                  }
                },
                { text: 'Array' },
                { text: '协议列表' },
                { text: '无' },
                { text: '[{},...]' }
              ],
              [
                { text: 'splitText' },
                { text: '分割字符' },
                { text: 'String' },
                { text: '(多条协议时)协议项分割字符', textModel: 'scroll' },
                { text: '、' },
                { text: ',' }
              ],
              [
                { text: 'showCheckbox' },
                {
                  text: '是否需要选择框',
                  textModel: 'scroll',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'true' }, { text: '需要选择框' }],
                      [{ text: 'false' }, { text: '不需要选择框' }]
                    ]
                  }
                },
                { text: 'Boolean' },
                { text: '是否需要选择框', textModel: 'scroll' },
                { text: 'true' },
                { text: '协议' }
              ],
              [
                { text: 'format' },
                { text: '协议格式' },
                { text: 'String' },
                { text: '协议格式，默认为《agreement》。名号为格式，"agreement"表示要显示的协议名称', textModel: 'scroll' },
                { text: '《agreement》' },
                { text: '(agreement)' }
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
                { text: 'agreementClick' },
                { text: '协议项点击事件' },
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
                        { text: 'agreementItem' },
                        { text: 'Object' },
                        { text: '当前点击的协议项对象', textModel: 'scroll' }
                      ]
                    ]
                  }
                }
              ],
              [
                { text: 'checkboxStausChange' },
                { text: '协议选择框状态改变' },
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
                        { text: 'status' },
                        { text: 'Boolean' },
                        { text: '协议当前选中状态，true.选中 false.未选中', textModel: 'scroll' }
                      ]
                    ]
                  }
                }
              ]
            ]
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '带选择框的协议标签'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'JavaScript:'
        },
        {
          type: 'code',
          content: [
            'export default {',
            '  data () {',
            '    // 协议列表',
            '    agreementList: [',
            '      { content: "第一协议" },',
            '      { content: "第二协议" },',
            '      { content: "第三协议" }',
            '    ]',
            '  }',
            '}'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comm-agreement',
            '  preText="请认真阅读"',
            '  :dataList="agreementList"',
            '  afterText="，并同意"',
            '  />'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '效果展示',
          slotP: 'slot-display-effect1'
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '不带选择框的协议标签'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'JavaScript:'
        },
        {
          type: 'code',
          content: [
            'export default {',
            '  data () {',
            '    // 协议列表',
            '    agreementList: [',
            '      { content: "第一协议" },',
            '      { content: "第二协议" },',
            '      { content: "第三协议" }',
            '    ]',
            '  }',
            '}'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comm-agreement',
            '  preText="请认真阅读"',
            '  :dataList="agreementList"',
            '  :showCheckbox="false"',
            '  afterText="，并同意"',
            '  />'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '效果展示',
          slotP: 'slot-display-effect2'
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '自定义属性'
        },
        {
          type: 'text',
          content: '自定义要打开的页面方式和链接(路由)，自定义协议格式，自定义协议项分割符，协议勾选事件'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'JavaScript:'
        },
        {
          type: 'code',
          content: [
            'export default {',
            '  data () {',
            '    // 协议列表',
            '    agreementList: [',
            '      { content: "去首页", route: "/layout/index" },',
            '      { content: "打开百度", link: "http://www.baidu.com/" }',
            '    ]',
            '  }',
            '  methods: {',
            '    // 协议选择框状态改变事件',
            '    checkboxStausChange (e, status) {',
            '      this.$toast.msg(status ? "协议选中" : "协议未选中")',
            '    }',
            '  }',
            '}'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comm-agreement',
            '  preText="请认真阅读"',
            '  :dataList="agreementList"',
            '  afterText="，并同意"',
            '  format="(agreement)"',
            '  splitText=","',
            '  @checkboxStausChange="checkboxStausChange"',
            '  />'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '效果展示',
          slotP: 'slot-display-effect3'
        }
      ],
      // 协议列表
      agreementList: [
        { content: '第一协议' },
        { content: '第二协议' },
        { content: '第三协议' }
      ],
      agreementList1: [
        { content: '去首页', route: '/layout/index' },
        { content: '打开百度', link: 'http://www.baidu.com/' }
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
  methods: {
    /**
     * 协议选择框状态改变事件
     * @param {*} e Event
     * @param {*} status 状态
     */
    checkboxStausChange (e, status) {
      this.$toast.msg(status ? '协议选中' : '协议未选中')
    }
  },
  // 开始创建
  created () { },
  // 创建完成
  mounted () { },
  // 销毁前
  beforeDestroy () { },
  // 销毁
  destory () { }
}

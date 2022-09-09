/**
 * comm-icon文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月4日09:37:17
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comm-icon',
  // 内部属性
  data () {
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '图标模块(comm-icon)文档'
        },
        {
          type: 'paragraph',
          content: '通过图片自定义图标，展示图标和文字，分为上下结构和左右结构'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '模块标签'
        },
        {
          type: 'code',
          content: [
            '<comm-icon></comm-icon>'
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
                { text: 'icon' },
                { text: '图标' },
                { text: 'Object' },
                { text: '图标对象' },
                { text: '无' },
                { text: 'require("icon.png")', textModel: 'scroll' }
              ],
              [
                { text: 'text' },
                { text: '文字' },
                { text: 'String' },
                { text: '图标文字' },
                { text: '无' },
                { text: '图标文字' }
              ],
              [
                { text: 'size' },
                { text: '图标大小' },
                { text: 'Array' },
                { text: '图标大小，数组格式：[宽, 高]，不带参数', textModel: 'scroll' },
                { text: '[32, 32]' },
                { text: '[50, 50]' }
              ],
              [
                { text: 'structure' },
                {
                  text: '结构',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [
                        { text: 'up-down' },
                        { text: '图标和文字上下结构', textModel: 'scroll' }
                      ],
                      [
                        { text: 'left-right' },
                        { text: '图标和文字左右结构', textModel: 'scroll' }
                      ]
                    ]
                  }
                },
                { text: 'String' },
                { text: '图标和文字的结构' },
                { text: 'up-down' },
                { text: 'left-right' }
              ],
              [
                { text: 'link' },
                { text: '图标链接' },
                { text: 'String' },
                { text: '图标链接(点击需要打开的链接url)' },
                { text: '无' },
                { text: 'http://www.***.com/', textModel: 'scroll' }
              ],
              [
                { text: 'route' },
                { text: '图标路由' },
                { text: 'String' },
                { text: '图标路由(点击需要打开的路由path)' },
                { text: '无' },
                { text: '/page/index', textModel: 'scroll' }
              ],
              [
                { text: 'target' },
                {
                  text: '打开方式',
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
                { text: '(路由|链接)打开方式' },
                { text: '无' },
                { text: 'blank' }
              ],
              [
                { text: 'query' },
                { text: '路由参数对象' },
                { text: 'Object' },
                { text: '路由参数对象', textModel: 'scroll' },
                { text: '无' },
                { text: '{params: 1,...}', textModel: 'scroll' }
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
          width: '150%',
          table: {
            head: LANG.eventHead,
            body: [
              [
                { text: 'iconClick' },
                { text: '图标点击事件', textModel: 'scroll' },
                {
                  text: '详情',
                  table: {
                    head: LANG.paramHead,
                    body: [
                      [
                        { text: 'e' },
                        { text: 'Event' },
                        { text: 'Event对象' }
                      ]
                    ]
                  }
                }
              ]
            ]
          }
        },
        {
          type: 'title',
          grade: 'p2',
          content: '图文图标'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comm-icon :icon="require("icon-test.png")" text="图文图标" />'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '效果展示',
          slotP: 'slot-display-effect1'
        },
        {
          type: 'title',
          grade: 'p2',
          content: '左右结构'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comm-icon',
            '  :icon="require("icon-test.png")"',
            '  structure="left-right"',
            '  text="左右结构" />'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '效果展示',
          slotP: 'slot-display-effect2'
        },
        {
          type: 'title',
          grade: 'p2',
          content: '自定义大小'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comm-icon',
            '  :icon="require("icon-test.png")"',
            '  :size="[50,50]"',
            '  text="自定义大小(50*50)" />'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '效果展示',
          slotP: 'slot-display-effect3'
        },
        {
          type: 'title',
          grade: 'p2',
          content: '没得文字'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comm-icon :icon="require("icon-test.png")" />'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '效果展示',
          slotP: 'slot-display-effect4'
        },
        {
          type: 'title',
          grade: 'p2',
          content: '点击事件'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comm-icon',
            '  :icon="require("icon-test.png")"',
            '  :size="[50,50]"',
            '  text="自定义大小(50*50)"',
            '  @iconClick="iconClick" />'
          ]
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
            '  methods: {',
            '    // 图标点击事件',
            '    iconClick () {',
            '      this.$modal.alert("点击了图标")',
            '    }',
            '  }',
            '}'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '效果展示',
          slotP: 'slot-display-effect5'
        },
        {
          type: 'title',
          grade: 'p2',
          content: '链接和路由'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comm-icon',
            '  :icon="require("icon-test.png")"',
            '  :size="[50,50]"',
            '  text="百度',
            '  link="https://www.baidu.com/" />',
            '<comm-icon',
            '  :icon="require("icon-test.png")"',
            '  :size="[50,50]"',
            '  text="首页',
            '  route="/layout/index" />'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '效果展示',
          slotP: 'slot-display-effect6'
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
  methods: {
    /**
     * 图标点击事件
     */
    iconClick (e) {
      this.$modal.alert('点击了图标')
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

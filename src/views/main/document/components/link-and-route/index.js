/**
 * comp-link-and-route文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月7日08:47:49
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comp-link-and-route',
  // 内部属性
  data () {
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '链接和路由组件(comp-link-and-route)文档'
        },
        {
          type: 'paragraph',
          content: '链接和路由。'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '组件标签'
        },
        {
          type: 'code',
          content: [
            '<comp-link-and-route></comp-link-and-route>'
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
                { text: 'link' },
                { text: '链接地址' },
                { text: 'String' },
                { text: '链接地址，可带参数' },
                { text: '无' },
                { text: 'http://www.***.com/?a=1', textModel: 'scroll' }
              ],
              [
                { text: 'route' },
                { text: '路由地址' },
                { text: 'String' },
                { text: '路由地址(相对路径)，可带参数', textModel: 'scroll' },
                { text: '无' },
                { text: '/pages/index?a=1', textModel: 'scroll' }
              ],
              [
                { text: 'query' },
                { text: '参数对象' },
                { text: 'Object' },
                { text: '(链接或路由)参数对象', textModel: 'scroll' },
                { text: '无' },
                { text: '{ a: 1, b: 2, ... }', textModel: 'scroll' }
              ],
              [
                { text: 'target' },
                {
                  text: '打开目标',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'slef' }, { text: '当前页面打开' }],
                      [{ text: 'blank' }, { text: '新页面打开' }]
                    ]
                  }
                },
                { text: 'String' },
                { text: '链接或路由的打开目标', textModel: 'scroll' },
                { text: 'slef' },
                { text: 'blank' }
              ],
              [
                { text: 'content' },
                { text: '内容' },
                { text: 'String' },
                { text: '显示内容,支持html字符串，也可直接使用插槽', textModel: 'scroll' },
                { text: '无' },
                { text: '链接' }
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
                { text: 'targetClick' },
                { text: '元素点击' },
                {
                  text: '详情',
                  table: {
                    head: LANG.paramHead,
                    body: [
                      [
                        { text: 'e' },
                        { text: 'Event' },
                        { text: 'Event事件对象', textModel: 'scroll' }
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
          grade: 'p4',
          content: '链接'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comp-link-and-route',
            '  link="http://www.baidu.com/"',
            '  >链接</comp-link-and-route>'
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
          grade: 'p4',
          content: '路由'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comp-link-and-route',
            '  route="/layout/index"',
            '  >路由，打开内部页面-首页</comp-link-and-route>'
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
          grade: 'p4',
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
            '<comp-link-and-route',
            '  @targetClick="targetClick"',
            '  >点击事件</comp-link-and-route>'
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
            '    // 点击事件',
            '    targetClick () {',
            '      this.$modal.alert("点击事件")',
            '    }',
            '  }',
            '}'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '效果展示',
          slotP: 'slot-display-effect3'
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
    targetClick () {
      this.$modal.alert('点击事件')
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

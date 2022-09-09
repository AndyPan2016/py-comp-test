/**
 * comm-icon-group文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月4日09:37:17
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comm-icon-group',
  // 内部属性
  data () {
    let icon = require('./images/icon-test.png')
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '图标组模块(comm-icon-group)文档'
        },
        {
          type: 'paragraph',
          content: '图标集合'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '模块标签'
        },
        {
          type: 'code',
          content: [
            '<comm-icon-group></comm-icon-group>'
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
                { text: 'size' },
                { text: '图标大小' },
                { text: 'Array' },
                { text: '组内统一图标大小，数组格式：[宽, 高]，不带参数，也可以通过iconList单独设置', textModel: 'scroll' },
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
                { text: '组内统一图标和文字的结构，也可以通过iconList单独设置' },
                { text: 'up-down' },
                { text: 'left-right' }
              ],
              [
                { text: 'groupSize' },
                { text: '分组大小' },
                { text: 'Number' },
                { text: '每组几个图标，默认为4个', textModel: 'scroll' },
                { text: '4' },
                { text: '4' }
              ],
              [
                { text: 'isReplace' },
                { text: '是否替换' },
                { text: 'Boolean' },
                { text: '如果最后一组不满groupSize个图标时，是否需要按照groupSize的个数排列(是否需要有空位占位)', textModel: 'scroll' },
                { text: 'true' },
                { text: 'true' }
              ],
              [
                { text: 'iconList' },
                { text: '图标列表' },
                { text: 'Array' },
                { text: '分组的图标列表，图标参数具体参考comm-icon', textModel: 'scroll' },
                { text: '无' },
                { text: '[{...},...]', textModel: 'scroll' }
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
                      ],
                      [
                        { text: 'icon' },
                        { text: 'Object' },
                        { text: '当前点击的图标项数据', textModel: 'scroll' }
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
          content: '一组图标'
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
            '  data() {',
            '    return {',
            '      // 图标数据',
            '      iconList1: [',
            '        { icon: require("icon.png"), text: "图标组1" },',
            '        { icon: require("icon.png"), text: "图标组2" },',
            '        { icon: require("icon.png"), text: "图标组3" },',
            '        { icon: require("icon.png"), text: "图标组4" },',
            '        { icon: require("icon.png"), text: "图标组5" }',
            '      ]',
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
            '<comm-icon-group :iconList="iconList" />'
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
          content: '每组三个图标'
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
            '  data() {',
            '    return {',
            '      // 图标数据',
            '      iconList1: [',
            '        { icon: require("icon.png"), text: "图标组1" },',
            '        { icon: require("icon.png"), text: "图标组2" },',
            '        { icon: require("icon.png"), text: "图标组3" },',
            '        { icon: require("icon.png"), text: "图标组4" },',
            '        { icon: require("icon.png"), text: "图标组5" }',
            '      ]',
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
            '<comm-icon-group :iconList="iconList" groupSize="3" @iconClick="iconClick" />'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '效果展示',
          slotP: 'slot-display-effect2'
        }
      ],
      // 图标数据
      iconList1: [
        { icon, text: '图标组1' },
        { icon, text: '图标组2' },
        { icon, text: '图标组3' },
        { icon, text: '图标组4' },
        { icon, text: '图标组5' }
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
    iconClick (e, item) {
      this.$modal.alert('点击了图标:' + item.text)
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

/**
 * comm-content-block文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月2日19:14:19
 */

import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comm-content-block',
  // 内部属性
  data () {
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '内容块模块(comm-content-block)文档'
        },
        {
          type: 'paragraph',
          content: '内容块，由标题+内容组成'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '模块标签'
        },
        {
          type: 'code',
          content: [
            '<comm-content-block />'
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
                { text: 'max' },
                {
                  text: '大号标题',
                  textModel: 'scroll',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'true' }, { text: '大号标题' }],
                      [{ text: 'false' }, { text: '默认标题' }]
                    ]
                  }
                },
                { text: 'Boolean' },
                { text: '是否显示大号标题' },
                { text: 'false' },
                { text: 'false' }
              ],
              [
                { text: 'transparent' },
                {
                  text: '透明',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'true' }, { text: '透明' }],
                      [{ text: 'false' }, { text: '不透明' }]
                    ]
                  }
                },
                { text: 'Boolean' },
                { text: '块容器是否透明，没有阴影和背景颜色', textModel: 'scroll' },
                { text: 'false' },
                { text: 'false' }
              ],
              [
                { text: 'title' },
                { text: '标题' },
                { text: 'String' },
                { text: '标题文本', textModel: 'scroll' },
                { text: '无' },
                { text: '标题' }
              ],
              [
                { text: 'titleIcon' },
                { text: '标题图标' },
                { text: 'Object' },
                { text: '图片对象', textModel: 'scroll' },
                { text: '无' },
                { text: 'require("./icon.png")', textModel: 'scroll' }
              ],
              [
                { text: 'titleSlot' },
                { text: '标题插槽名' },
                { text: 'String' },
                { text: '自定义标题插槽(名称)', textModel: 'scroll' },
                { text: '无' },
                { text: '' }
              ],
              [
                { text: 'secondTitle' },
                { text: '二级标题' },
                { text: 'String' },
                { text: '二级标题', textModel: 'scroll' },
                { text: '无' },
                { text: '' }
              ],
              [
                { text: 'remark' },
                { text: '备注' },
                { text: 'String' },
                { text: '备注', textModel: 'scroll' },
                { text: '无' },
                { text: '' }
              ],
              [
                { text: 'text' },
                { text: '文本' },
                { text: 'String' },
                { text: '文本', textModel: 'scroll' },
                { text: '无' },
                { text: '' }
              ],
              [
                { text: 'content' },
                { text: '内容' },
                { text: 'String' },
                { text: '内容', textModel: 'scroll' },
                { text: '无' },
                { text: '' }
              ],
              [
                { text: 'contentSlot' },
                { text: '内容插槽名' },
                { text: 'String' },
                { text: '自定义内容插槽名', textModel: 'scroll' },
                { text: '无' },
                { text: '' }
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
                { text: 'titleClick' },
                { text: '标题点击事件' },
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
              ],
              [
                { text: 'remarkClick' },
                { text: '备注点击事件' },
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
          grade: 'p3',
          content: '插槽'
        },
        {
          type: 'table',
          width: '120%',
          table: {
            head: LANG.slotHead,
            body: [
              [{ text: '作用域插槽', table: LANG.slotTypeTable }, { text: '自定义' }, { text: '通过属性titleSlot自定义标题插槽名称', textModel: 'scroll' }],
              [{ text: '作用域插槽', table: LANG.slotTypeTable }, { text: '自定义' }, { text: '通过属性contentSlot自定义内容插槽名称', textModel: 'scroll' }]
            ]
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '内容块'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comm-content-block title="标题" content="内容" />'
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
          content: '内容块-插槽标题和插槽内容'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comm-content-block',
            '  titleSlot="slot-cb-title"',
            '  contentSlot="slot-cb-content">',
            '  <!-- 插槽标题 -->',
            '  <div slot="slot-cb-title">插槽标题</div>',
            '  <!-- 插槽内容 -->',
            '  <div slot="slot-cb-content">插槽内容</div>',
            '</comm-content-block>'
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
          content: '内容块-大号标题'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comm-content-block title="大号标题" :max="true" content="内容" />'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '效果展示',
          slotP: 'slot-display-effect3'
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '内容块-点击事件'
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
            '  },',
            '  method: {',
            '    // 更多',
            '    remarkClick (e) {',
            '      this.$toast.msg("更多")',
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
            '<comm-content-block',
            '  :titleIcon="require("icon.png")"',
            '  title="点击更多"',
            '  remark="更多"',
            '  content="内容"',
            '  @remarkClick="remarkClick">',
            '</comm-content-block>'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '效果展示',
          slotP: 'slot-display-effect4'
        },
        { type: 'space' }
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
     * 备注点击事件
     */
    remarkClick (e) {
      this.$toast.msg('更多')
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

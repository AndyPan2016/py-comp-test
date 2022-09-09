/**
 * comp-action-views文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年8月30日16:40:00
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comp-action-views',
  // 内部属性
  data () {
    let that = this
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '动作视图组件(comp-action-views)文档'
        },
        {
          type: 'paragraph',
          content: '从底部弹出内容。'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '组件标签'
        },
        {
          type: 'code',
          content: [
            '<comp-action-views></comp-action-views>'
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
                { text: 'borderRadius' },
                {
                  text: '边框圆角',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'top' }, { text: '只显示左上和右上的圆角', textModel: 'scroll' }],
                      [{ text: 'all' }, { text: '左上、右上、左下、右下都显示圆角', textModel: 'scroll' }],
                      [{ text: 'none' }, { text: '左上、右上、左下、右下都不显示圆角', textModel: 'scroll' }]
                    ],
                    remark: '只可设置显示或不显示，不能设置圆角大小；如需设置圆角大小，可设置不显示，通过自定义内容去自行设置圆角大小'
                  }
                },
                { text: 'String' },
                { text: '内容容器边框圆角', textModel: 'scroll' },
                { text: 'top' },
                { text: 'top' }
              ],
              [
                { text: 'clickMaskClose' },
                {
                  text: '点击背景遮罩层是否关闭',
                  textModel: 'scroll',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'true' }, { text: '点击背景遮罩层关闭', textModel: 'scroll' }],
                      [{ text: 'false' }, { text: '点击背景遮罩层不用关闭', textModel: 'scroll' }]
                    ]
                  }
                },
                { text: 'Boolean' },
                { text: '点击背景遮罩层是否关闭', textModel: 'scroll' },
                { text: 'false' },
                { text: 'false' }
              ],
              [
                { text: 'mainCapacity' },
                {
                  text: '内容容量',
                  textModel: 'scroll',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'percent-80' }, { text: '最大高度为屏幕的80%(默认)', textModel: 'scroll' }],
                      [{ text: 'percent-90' }, { text: '最大高度为屏幕的90%', textModel: 'scroll' }],
                      [{ text: 'percent-full' }, { text: '最大高度为屏幕的100%', textModel: 'scroll' }]
                    ]
                  }
                },
                { text: 'String' },
                { text: '内容容量', textModel: 'scroll' },
                { text: 'percent-80' },
                { text: 'percent-90' }
              ],
              [
                { text: 'transparent' },
                {
                  text: '容器是否透明',
                  textModel: 'scroll',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'true' }, { text: '透明' }],
                      [{ text: 'false' }, { text: '不透明，保持白色背景', textModel: 'scroll' }]
                    ]
                  }
                },
                { text: 'Boolean' },
                { text: '内容容器是否透明，默认是有白色背景的', textModel: 'scroll' },
                { text: 'false' },
                { text: 'false' }
              ]
            ]
          }
        },
        {
          type: 'title',
          grade: 'p3',
          content: '方法'
        },
        {
          type: 'table',
          width: '120%',
          table: {
            head: LANG.funHead,
            body: [
              [
                { text: 'open' },
                { text: '打开组件' },
                {
                  text: '详情',
                  table: {
                    head: LANG.paramHead,
                    body: [
                      [
                        { text: 'callBack' },
                        { text: 'Function' },
                        { text: '打开后的回调,同open事件', textModel: 'scroll' }
                      ]
                    ]
                  }
                }
              ],
              [
                { text: 'close' },
                { text: '关闭组件' },
                {
                  text: '详情',
                  table: {
                    head: LANG.paramHead,
                    body: [
                      [
                        { text: 'callBack' },
                        { text: 'Function' },
                        { text: '关闭后的回调,同close事件', textModel: 'scroll' }
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
          content: '事件'
        },
        {
          type: 'table',
          width: '120%',
          table: {
            head: LANG.eventHead,
            body: [
              [
                { text: 'open' },
                { text: '打开' },
                { text: '无' }
              ],
              [
                { text: 'close' },
                { text: '关闭' },
                { text: '无' }
              ],
              [
                { text: 'maskClickClose' },
                { text: '遮罩层点击关闭' },
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
              [{ text: '匿名插槽', table: LANG.slotTypeTable }, { text: '无' }, { text: '弹窗视图自定义内容，使用时，不需要插槽名称', textModel: 'scroll' }]
            ]
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '打开一个动作视图'
        },
        {
          type: 'text',
          content: '默认配置，纯内容展示。自定义关闭。'
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
            '  data () { }',
            '  methods: {',
            '    // 打开action views',
            '    openActionViews () {',
            '      this.$refs["ref-action-views"].open()',
            '    },',
            '    // 关闭action views',
            '    closeActionViews () {',
            '      this.$refs["ref-action-views"].close()',
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
            '<comp-action-views',
            '  ref="ref-action-views">',
            '  <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>',
            '  <div class="action-view-test-btn" @click="closeActionDefault">点此关闭</div>',
            '</comp-action-views>'
          ]
        },
        {
          type: 'link',
          content: '效果展示',
          fn: () => {
            that.openActionDefault()
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '自定义属性'
        },
        {
          type: 'text',
          content: '使用属性"visible"，控制显示，内容高度撑满(默认)。点击背景遮罩关闭。'
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
            '    // 可见状态，用于打开或关闭 true.打开 false.关闭',
            '    viewVisible: false',
            '  }',
            '  methods: {',
            '    // 打开action views',
            '    openActionViews () {',
            '      this.viewVisible = true',
            '    },',
            '    // 关闭action views事件，还原可见状态',
            '    onClose () {',
            '      this.viewVisible = false',
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
            '<comp-action-views',
            '  :visible="viewVisible"',
            '  :clickMaskClose="true"',
            '  @close="onClose">',
            '  <div class="action-view-test-cont">这是一个动作视图组件</div>',
            '  <div class="action-view-test-cont">这是一个动作视图组件</div>',
            '  <div class="action-view-test-cont">这是一个动作视图组件</div>',
            '  ...',
            '</comp-action-views>'
          ]
        },
        {
          type: 'link',
          content: '效果展示',
          fn: () => {
            that.openAction1()
          }
        }
      ],
      // 可见状态，用于打开或关闭 true.打开 false.关闭
      viewVisible1: false
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
     * 打开默认
     */
    openActionDefault () {
      this.$refs['ref-action-views-default'].open()
    },
    /**
     * 关闭默认
     */
    closeActionDefault () {
      this.$refs['ref-action-views-default'].close()
    },
    /**
     * 打开
     */
    openAction1 () {
      this.viewVisible1 = true
    },
    /**
     * 关闭，还原状态
     */
    onClose1 () {
      this.viewVisible1 = false
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

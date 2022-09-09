/**
 * comp-action-bars文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年8月30日16:44:38
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comp-action-bars',
  // 内部属性
  data () {
    let that = this
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '操作栏组件(comp-action-bars)文档'
        },
        {
          type: 'paragraph',
          content: '从底部弹出可操作按钮栏。'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '组件标签'
        },
        {
          type: 'code',
          content: [
            '<comp-action-bars></comp-action-bars>'
          ]
        },
        {
          type: 'title',
          grade: 'p3',
          content: '属性'
        },
        {
          type: 'table',
          width: '200%',
          table: {
            head: LANG.attrHead,
            body: [
              [
                { text: 'title' },
                { text: '标题' },
                { text: 'String' },
                { text: '标题，为空则不显示', textModel: 'scroll' },
                { text: '无' },
                { text: '标题' }
              ],
              [
                { text: 'remark' },
                { text: '备注' },
                { text: 'String' },
                { text: '标题下面的备注，为空则不显示', textModel: 'scroll' },
                { text: '无' },
                { text: '备注' }
              ],
              [
                { text: 'visible' },
                {
                  text: '可见状态',
                  textModel: 'scroll',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'true' }, { text: '打开' }],
                      [{ text: 'false' }, { text: '关闭' }]
                    ],
                    remark: '用于控制组件打开或关闭，也可调用组件的open、close方法来控制组件打开和关闭'
                  }
                },
                { text: 'Boolean' },
                { text: '可见状态' },
                { text: 'false' },
                { text: 'true' }
              ],
              [
                { text: 'space' },
                { text: '左右间隙' },
                { text: 'String' },
                { text: '操作栏左右间隙(具体数值+单位)', textModel: 'scroll' },
                { text: '15px' },
                { text: '5%' }
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
                { text: 'barsContent' },
                { text: '文本内容' },
                { text: 'String' },
                { text: '(操作栏)文本内容', textModel: 'scroll' },
                { text: '无' },
                { text: '内容' }
              ],
              [
                { text: 'barsList' },
                {
                  text: '列表',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'text' }, { text: '操作栏项的文本', textModel: 'scroll' }],
                      [
                        { text: 'type' },
                        {
                          text: '文本样式',
                          table: {
                            head: LANG.avaHead,
                            body: [
                              [{ text: 'fail' }, { text: '红色' }],
                              [{ text: 'normal' }, { text: '蓝色' }],
                              [{ text: 'success' }, { text: '绿色' }],
                              [{ text: 'warn' }, { text: '橙色' }],
                              [{ text: 'disabled' }, { text: '灰色，且该项不可点击', textModel: 'scroll' }],
                              [{ text: 'default' }, { text: '黑色(默认)' }]
                            ]
                          }
                        }
                      ],
                      [
                        { text: 'fn' },
                        {
                          text: '每一项独立的点击函数',
                          textModel: 'scroll',
                          table: {
                            head: LANG.paramHead,
                            body: [
                              [
                                { text: 'e' },
                                { text: 'Event' },
                                { text: 'Event对象' }
                              ],
                              [
                                { text: 'bar' },
                                { text: 'Object' },
                                { text: '当前点击的数据对象', textModel: 'scroll' }
                              ],
                              [
                                { text: 'close' },
                                { text: 'Function' },
                                { text: '组件关闭函数', textModel: 'scroll' }
                              ]
                            ],
                            remark: '注：该函数返回三个参数，其中close为当前组件关闭函数，fn函数返回值可返回false阻止默认的点击选项关闭，然后在需要关闭时自行调用close关闭',
                            remarkType: 'warn'
                          }
                        }
                      ]
                    ]
                  }
                },
                { text: 'Array' },
                { text: '操作栏列表' },
                { text: '无' },
                { text: '-' }
              ],
              [
                { text: 'isShowSure' },
                {
                  text: '是否显示确定按钮',
                  textModel: 'scroll',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'true' }, { text: '显示' }],
                      [{ text: 'false' }, { text: '不显示' }]
                    ]
                  }
                },
                { text: 'Boolean' },
                { text: '是否显示确定按钮', textModel: 'scroll' },
                { text: 'false' },
                { text: 'false' }
              ],
              [
                { text: 'sureText' },
                { text: '确定按钮文本', textModel: 'scroll' },
                { text: 'String' },
                { text: '确定按钮文本', textModel: 'scroll' },
                { text: '确定' },
                { text: '确定' }
              ],
              [
                { text: 'isShowCancel' },
                {
                  text: '是否显示取消按钮',
                  textModel: 'scroll',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'true' }, { text: '显示' }],
                      [{ text: 'false' }, { text: '不显示' }]
                    ]
                  }
                },
                { text: 'Boolean' },
                { text: '是否显示取消按钮', textModel: 'scroll' },
                { text: 'true' },
                { text: 'true' }
              ],
              [
                { text: 'cancelText' },
                { text: '取消按钮文本', textModel: 'scroll' },
                { text: 'String' },
                { text: '取消按钮文本', textModel: 'scroll' },
                { text: '取消' },
                { text: '取消' }
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
                { text: 'barItemChoose' },
                { text: '每一项选择' },
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
                        { text: 'bar' },
                        { text: 'Object' },
                        { text: '当前点击的数据对象', textModel: 'scroll' }
                      ]
                    ]
                  }
                }
              ],
              [
                { text: 'sure' },
                { text: '确定按钮点击' },
                {
                  text: '详情',
                  table: {
                    head: [
                      { text: '名称', flex: 2 },
                      { text: '类型', flex: 1.5 },
                      { text: '说明', flex: 3 }
                    ],
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
                { text: 'cancel' },
                { text: '取消按钮点击' },
                {
                  text: '详情',
                  table: {
                    head: [
                      { text: '名称', flex: 2 },
                      { text: '类型', flex: 1.5 },
                      { text: '说明', flex: 3 }
                    ],
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
              [
                { text: '具名插槽', table: LANG.slotTypeTable },
                { text: 'slot-action-bars-head-before', textModel: 'scroll' },
                { text: '操作栏头部前面部分插槽', textModel: 'scroll' }
              ],
              [
                { text: '具名插槽', table: LANG.slotTypeTable },
                { text: 'slot-action-bars-head-after', textModel: 'scroll' },
                { text: '操作栏头部后面部分插槽', textModel: 'scroll' }
              ]
            ]
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '不同类型按钮展示'
        },
        {
          type: 'text',
          content: '所有类型的按钮展示，使用组件open方法打开，带标题和标题备注'
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
            '    // bars列表',
            '    actionBarsList: [',
            '      { text: "红色", type: "fail" },',
            '      { text: "蓝色", type: "normal" },',
            '      { text: "绿色", type: "success" },',
            '      { text: "橙色", type: "warn" },',
            '      { text: "灰色(禁用)", type: "disabled" },',
            '      { text: "黑色(默认)", type: "fail" },',
            '    ]',
            '  }',
            '  methods: {',
            '    // 打开action bars',
            '    openActionBars () {',
            '      this.$refs["ref-action-bars"].open()',
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
            '<comp-action-bars',
            '  ref="ref-action-bars"',
            '  title="操作栏"',
            '  remark="不同类型按钮"',
            '  :barsList="actionBarsList"',
            '  />'
          ]
        },
        {
          type: 'link',
          content: '效果展示',
          fn: () => {
            that.$refs['ref-action-bars'].open()
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '删除提示'
        },
        {
          type: 'text',
          content: '模拟一个删除内容的提示，并且使用"visible"来控制组件打开，监听组件关闭事件，还原visible状态，点击删除按钮后，执行删除操作。'
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
            '    // bars列表',
            '    actionBarsList: [',
            '      { text: "确认删除", type: "fail", key: "delete" }',
            '    ],',
            '    // 可见状态，用于打开或关闭 true.打开 false.关闭',
            '    barsVisible: false',
            '  }',
            '  methods: {',
            '    // 打开action bars',
            '    openActionBars () {',
            '      this.barsVisible = true',
            '    },',
            '    // 组件关闭事件，还原barsVisible状态',
            '    actionBarsClose () {',
            '      this.barsVisible = false',
            '    },',
            '    // 按钮点击事件(判断删除操作)',
            '    barItemChoose (e, bar) {',
            '      if (bar.key === "delete") {',
            '        this.$toast.success("删除成功")',
            '      }',
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
            '<comp-action-bars',
            '  :visible="deleteBarsVisible"',
            '  title="提示"',
            '  remark="数据将被删除"',
            '  :barsList="actionBarsList"',
            '  @close="actionBarsClose"',
            '  @barItemChoose="barItemChoose"',
            '  />'
          ]
        },
        {
          type: 'link',
          content: '效果展示',
          fn: () => {
            that.deleteBarsVisible = true
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '内容提示'
        },
        {
          type: 'text',
          content: '从底部弹窗的普通内容提示，不需要按钮列表，并且设置点击背景遮罩可关闭。'
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
            '    barsVisible: false',
            '  }',
            '  methods: {',
            '    // 打开action bars',
            '    openActionBars () {',
            '      this.barsVisible = true',
            '    },',
            '    // 组件关闭事件，还原barsVisible状态',
            '    actionBarsClose () {',
            '      this.barsVisible = false',
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
            '<comp-action-bars',
            '  :clickMaskClose="true"',
            '  title="提示"',
            '  remark="这是一个简单的底部弹窗提示"',
            '  barsContent="点击背景遮罩可关闭"',
            '  @close="actionBarsClose"',
            '  />'
          ]
        },
        {
          type: 'link',
          content: '效果展示',
          fn: () => {
            that.simpleBarsVisible = true
          }
        }
      ],
      // bars列表
      actionBarsList: [
        { text: '红色', type: 'fail' },
        { text: '蓝色', type: 'normal' },
        { text: '绿色', type: 'success' },
        { text: '橙色', type: 'warn' },
        { text: '灰色(禁用)', type: 'disabled' },
        { text: '黑色(默认)' }
      ],
      // bars列表
      deleteBarsList: [
        { text: '确认删除', type: 'fail', key: 'delete' }
      ],
      // 可见状态，用于打开或关闭 true.打开 false.关闭
      deleteBarsVisible: false,
      simpleBarsVisible: false
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
     * 关闭
     */
    deleteBarsClose () {
      this.deleteBarsVisible = false
    },
    /**
     * 每一项的点击事件
     * @param {*} e Event事件
     * @param {*} bar 当前点击项
     */
    deleteBarItemClick (e, bar) {
      if (bar.key === 'delete') {
        this.$toast.success('删除成功')
      }
    },
    /**
     * 关闭
     */
    simpleBarsClose () {
      this.simpleBarsVisible = false
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

/**
 * comp-action-sheets文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月6日09:09:49
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comp-action-sheets',
  // 内部属性
  data () {
    let that = this
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '操作卡片组件(comp-action-sheets)文档'
        },
        {
          type: 'paragraph',
          content: '从底部弹出可操作卡片。'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '组件标签'
        },
        {
          type: 'code',
          content: [
            '<comp-action-sheets></comp-action-sheets>'
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
                { text: '操作卡片标题，支持html字符串，为空则不显示', textModel: 'scroll' },
                { text: '无' },
                { text: '标题' }
              ],
              [
                { text: 'remark' },
                { text: '备注' },
                { text: 'String' },
                { text: '操作卡片备注，支持html字符串，为空则不显示', textModel: 'scroll' },
                { text: '无' },
                { text: '备注' }
              ],
              [
                { text: 'content' },
                { text: '内容' },
                { text: 'String' },
                { text: '操作卡片内容，支持html字符串，为空则不显示，也可使用插槽自定义内容结构', textModel: 'scroll' },
                { text: '无' },
                { text: '内容' }
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
                { text: 'true' },
                { text: 'false' }
              ],
              [
                { text: 'backOffClose' },
                {
                  text: '点击后退关闭',
                  textModel: 'scroll',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'true' }, { text: '使用点击后退关闭', textModel: 'scroll' }],
                      [{ text: 'false' }, { text: '不使用点击后退关闭', textModel: 'scroll' }]
                    ]
                  }
                },
                { text: 'Boolean' },
                { text: '点击后退关闭', textModel: 'scroll' },
                { text: 'false' },
                { text: 'false' }
              ],
              [
                { text: 'buttonType' },
                {
                  text: '按钮类型',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'close' }, { text: '只显示一个关闭按钮', textModel: 'scroll' }],
                      [{ text: 'button' }, { text: '显示确定和取消按钮组合', textModel: 'scroll' }],
                      [{ text: 'none' }, { text: '都不显示' }]
                    ]
                  }
                },
                { text: 'String' },
                { text: '操作卡片按钮类型' },
                { text: 'close' },
                { text: 'button' }
              ],
              [
                { text: 'selfCloseSure' },
                {
                  text: '确定按钮，自己控制关闭',
                  textModel: 'scroll',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'true' }, { text: '事件返回关闭函数，自己控制关闭', textModel: 'scroll' }],
                      [{ text: 'false' }, { text: '不控制，按钮点击后由内部直接被关闭', textModel: 'scroll' }]
                    ]
                  }
                },
                { text: 'Boolean' },
                { text: '自己控制确认按钮点击后的关闭', textModel: 'scroll' },
                { text: 'false' },
                { text: 'false' }
              ],
              [
                { text: 'isShowSure' },
                {
                  text: '是否显示确定按钮',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'true' }, { text: '显示' }],
                      [{ text: 'false' }, { text: '不显示' }]
                    ]
                  }
                },
                { text: 'Boolean' },
                { text: '是否显示确定按钮' },
                { text: 'true' },
                { text: 'false' }
              ],
              [
                { text: 'sureText' },
                { text: '确定按钮文本' },
                { text: 'String' },
                { text: '确定按钮文本' },
                { text: '确定' },
                { text: '确定' }
              ],
              [
                { text: 'sureDisabled' },
                {
                  text: '确定按钮是否禁用',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'true' }, { text: '禁用' }],
                      [{ text: 'false' }, { text: '不禁用' }]
                    ]
                  }
                },
                { text: 'Boolean' },
                { text: '确定按钮是否禁用，禁用按钮不可点击', textModel: 'scroll' },
                { text: 'false' },
                { text: 'true' }
              ],
              [
                { text: 'sureType' },
                {
                  text: '确定按钮类型',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'sure' }, { text: '确定按钮样式' }],
                      [{ text: 'cancel' }, { text: '取消按钮样式' }]
                    ]
                  }
                },
                { text: 'String' },
                { text: '确定按钮类型，确定按钮可以设置成取消按钮的样式', textModel: 'scroll' },
                { text: 'sure' },
                { text: 'sure' }
              ],
              [
                { text: 'selfCloseCancel' },
                {
                  text: '取消按钮，自己控制关闭',
                  textModel: 'scroll',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'true' }, { text: '事件返回关闭函数，自己控制关闭', textModel: 'scroll' }],
                      [{ text: 'false' }, { text: '不控制，按钮点击后由内部直接被关闭', textModel: 'scroll' }]
                    ]
                  }
                },
                { text: 'Boolean' },
                { text: '自己控制取消按钮点击后的关闭', textModel: 'scroll' },
                { text: 'false' },
                { text: 'false' }
              ],
              [
                { text: 'isShowCancel' },
                {
                  text: '是否显示取消按钮',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'true' }, { text: '显示' }],
                      [{ text: 'false' }, { text: '不显示' }]
                    ]
                  }
                },
                { text: 'Boolean' },
                { text: '是否显示取消按钮' },
                { text: 'true' },
                { text: 'false' }
              ],
              [
                { text: 'cancelText' },
                { text: '取消按钮文本' },
                { text: 'String' },
                { text: '取消按钮文本' },
                { text: '取消' },
                { text: '取消' }
              ],
              [
                { text: 'cancelDisabled' },
                {
                  text: '取消按钮是否禁用',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'true' }, { text: '禁用' }],
                      [{ text: 'false' }, { text: '不禁用' }]
                    ]
                  }
                },
                { text: 'Boolean' },
                { text: '取消按钮是否禁用，禁用按钮不可点击', textModel: 'scroll' },
                { text: 'false' },
                { text: 'true' }
              ],
              [
                { text: 'cancelType' },
                {
                  text: '取消按钮类型',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'sure' }, { text: '确定按钮样式' }],
                      [{ text: 'cancel' }, { text: '取消按钮样式' }]
                    ]
                  }
                },
                { text: 'String' },
                { text: '取消按钮类型，取消按钮可以设置成确定按钮的样式', textModel: 'scroll' },
                { text: 'cancel' },
                { text: 'cancel' }
              ],
              [
                { text: 'onClose' },
                { text: '关闭' },
                { text: 'Function' },
                { text: '操作卡片关闭事件，同close事件，用于控制是否直接关闭', textModel: 'scroll' },
                { text: '无' },
                { text: '-' }
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
                { text: 'sure' },
                { text: '确定' },
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
                        { text: 'close' },
                        { text: 'Function' },
                        { text: '关闭操作卡片函数', textModel: 'scroll' }
                      ]
                    ]
                  }
                }
              ],
              [
                { text: 'cancel' },
                { text: '取消' },
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
                        { text: 'close' },
                        { text: 'Function' },
                        { text: '关闭操作卡片函数', textModel: 'scroll' }
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
                { text: '匿名插槽', table: LANG.slotTypeTable },
                { text: '无' },
                { text: '操作卡片内容插槽', textModel: 'scroll' }
              ]
            ]
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '操作卡片'
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
            '    // 打开',
            '    openActionSheets () {',
            '      this.$refs["ref-action-sheets"].open()',
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
            '<comp-action-sheets',
            '  ref="ref-action-sheets"',
            '  title="一个简单的Action-Sheets"',
            '  content="简单的内容" />',
            '<comp-action-sheets',
            '  ref="ref-action-sheets"',
            '  title="默认展示效果">',
            '  remark="插槽内容">',
            '  <div class="action-sheet-cont">操作卡片内容</div>',
            '</comp-action-sheets>'
          ]
        },
        {
          type: 'link',
          content: '简单的内容',
          fn: () => {
            that.$refs['ref-action-sheets0'].open()
          }
        },
        {
          type: 'link',
          content: '默认展示效果',
          fn: () => {
            that.$refs['ref-action-sheets1'].open()
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '操作卡片-按钮组合'
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
            '    // 打开',
            '    openActionSheets () {',
            '      this.$refs["ref-action-sheets"].open()',
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
            '<comp-action-sheets',
            '  ref="ref-action-sheets"',
            '  title="确定、取消按钮组合">',
            '  remark="点击背景遮罩不会关闭"',
            '  :clickMaskClose="false"',
            '  buttonType="button">',
            '  <div class="action-sheet-cont">操作卡片内容</div>',
            '</comp-action-sheets>'
          ]
        },
        {
          type: 'link',
          content: '效果展示',
          fn: () => {
            that.$refs['ref-action-sheets2'].open()
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '监听关闭事件'
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
            '    // 打开',
            '    openActionSheets () {',
            '      this.$refs["ref-action-sheets"].open()',
            '    },',
            '    // 关闭',
            '    actionSheetsClose () {',
            '      this.$toast.success("关闭")',
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
            '<comp-action-sheets',
            '  ref="ref-action-sheets"',
            '  title="监听关闭事件"',
            '  @close="actionSheetsClose">',
            '  <div class="action-sheet-cont">操作卡片内容</div>',
            '</comp-action-sheets>'
          ]
        },
        {
          type: 'link',
          content: '效果展示',
          fn: () => {
            that.$refs['ref-action-sheets3'].open()
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '监听确定按钮事件'
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
            '    // 打开',
            '    openActionSheets () {',
            '      this.$refs["ref-action-sheets"].open()',
            '    },',
            '    // 确定按钮事件',
            '    actionSheetsSure (e, close) {',
            '      this.$toast.success("确定")',
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
            '<comp-action-sheets',
            '  ref="ref-action-sheets"',
            '  title="监听确定按钮事件"',
            '  :clickMaskClose="false"',
            '  buttonType="button"',
            '  @sure="actionSheetsSure">',
            '  <div class="action-sheet-cont">确定按钮事件监听(取消按钮同理)</div>',
            '</comp-action-sheets>'
          ]
        },
        {
          type: 'link',
          content: '效果展示',
          fn: () => {
            that.$refs['ref-action-sheets4'].open()
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '监听确定按钮事件-阻止关闭'
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
            '    // 打开',
            '    openActionSheets () {',
            '      this.$refs["ref-action-sheets"].open()',
            '    },',
            '    // 确定按钮事件',
            '    actionSheetsSure (e, close) {',
            '      this.$modal.confirm({',
            '        msg: "点击了确定按钮，确定要关闭吗？",',
            '        sure () {',
            '          // 自行关闭',
            '          close()',
            '        }',
            '      })',
            '      // 阻止默认的关闭',
            '      return false',
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
            '<comp-action-sheets',
            '  ref="ref-action-sheets"',
            '  title="监听确定按钮事件-阻止关闭"',
            '  :clickMaskClose="false"',
            '  buttonType="button"',
            '  :selfCloseSure="true"',
            '  @sure="actionSheetsSure">',
            '  <div class="action-sheet-cont">点击确定，阻止关闭，确定后再关闭(取消按钮同理)</div>',
            '</comp-action-sheets>'
          ]
        },
        {
          type: 'link',
          content: '效果展示',
          fn: () => {
            that.$refs['ref-action-sheets5'].open()
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '监听关闭事件'
        },
        {
          type: 'text',
          content: '不管是取消关闭，还是点击背景遮罩关闭或者确定关闭、关闭按钮关闭，都会统一影响。'
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
            '    // 打开',
            '    openActionSheets () {',
            '      this.$refs["ref-action-sheets"].open()',
            '    },',
            '    // 确定按钮事件',
            '    actionSheetsClose (close) {',
            '      this.$modal.confirm({',
            '        msg: "触发了关闭事件，确定要关闭吗？",',
            '        sure () {',
            '          // 自行关闭',
            '          close()',
            '        }',
            '      })',
            '      // 阻止默认的关闭',
            '      return false',
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
            '<comp-action-sheets',
            '  ref="ref-action-sheets"',
            '  title="监听关闭事件"',
            '  :clickMaskClose="false"',
            '  buttonType="button"',
            '  :onClose="actionSheetsClose">',
            '  <div class="action-sheet-cont">监听关闭事件，阻止关闭，确定后再关闭</div>',
            '</comp-action-sheets>'
          ]
        },
        {
          type: 'link',
          content: '效果展示',
          fn: () => {
            that.$refs['ref-action-sheets6'].open()
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '下一步'
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
            '    // 确定按钮文本',
            '    sureText: "5s",',
            '    // 确定按钮状态',
            '    sureDisabled: true,',
            '    // 取消按钮文本',
            '    cancelText: "取消",',
            '    // 取消按钮状态',
            '    cancelDisabled: false,',
            '    // 当前步数',
            '    step: 1',
            '  },',
            '  methods: {',
            '    // 打开',
            '    openActionSheets () {',
            '      this.cancelText = "取消"',
            '      this.countDown({',
            '        timer: 5,',
            '        fn (time) {',
            '          this.sureText = time + "s"',
            '          this.sureDisabled = true',
            '        },',
            '        callBack () {',
            '          this.sureText = "下一步"',
            '          this.sureDisabled = false',
            '        }',
            '      })',
            '      this.$refs["ref-action-sheets"].open()',
            '    },',
            '    // 上一步',
            '    actionSheetsPrev (e, close) {',
            '      this.step -= 1',
            '      this.sureText = this.step <= 1 ? "取消" : "上一步"',
            '      this.sureText = this.step >= 3 ? "完成" : "下一步"',
            '      if (this.step <= 1) {',
            '        close()',
            '      }',
            '      // 阻止默认的关闭',
            '      return false',
            '    },',
            '    // 下一步',
            '    actionSheetsNext (e, close) {',
            '      this.step += 1',
            '      this.sureText = this.step >= 3 ? "完成" : "下一步"',
            '      this.cancelText = this.step > 1 ? "上一步" : "取消"',
            '      if (this.step >= 3) {',
            '        close()',
            '      }',
            '      // 阻止默认的关闭',
            '      return false',
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
            '<comp-action-sheets',
            '  ref="ref-action-sheets"',
            '  title="步骤"',
            '  :clickMaskClose="false"',
            '  buttonType="button"',
            '  :sureText="sureText"',
            '  :sureDisabled="sureDisabled"',
            '  :selfCloseSure="true"',
            '  cancelType="sure"',
            '  :cancelText="cancelText"',
            '  :cancelDisabled="cancelDisabled"',
            '  :selfCloseCancel="true"',
            '  @cancel="actionSheetsPrev"',
            '  @sure="actionSheetsNext">',
            '  <div class="action-sheet-cont" v-if="step === 1">第一步</div>',
            '  <div class="action-sheet-cont" v-if="step === 2">第二步</div>',
            '  <div class="action-sheet-cont" v-if="step === 3">第三步</div>',
            '</comp-action-sheets>'
          ]
        },
        {
          type: 'link',
          content: '效果展示',
          fn: () => {
            that.cancelText = '取消'
            that.countDown({
              timer: 5,
              fn (time) {
                that.sureText = time + 's'
                that.sureDisabled = true
              },
              callBack () {
                that.sureText = '下一步'
                that.sureDisabled = false
              }
            })
            that.$refs['ref-action-sheets7'].open()
          }
        },
        { type: 'space' }
      ],
      // 确定按钮文本
      sureText: '5s',
      // 确定按钮状态
      sureDisabled: true,
      // 取消按钮文本
      cancelText: '取消',
      // 取消按钮状态
      cancelDisabled: false,
      // 当前步数
      step: 1
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
     * 关闭事件
     */
    actionSheetsClose3 () {
      this.$toast.success('关闭')
    },
    closeBefore (close) {
      this.$modal.confirm({
        msg: '确定要关闭吗？',
        sure () {
          close()
        }
      })
      return false
    },
    actionSheetsSure4 (e, close) {
      this.$toast.success('确定')
    },
    actionSheetsSure5 (e, close) {
      this.$modal.confirm({
        msg: '点击了确定按钮，确定要关闭吗？',
        sure () {
          close()
        }
      })
      return false
    },
    actionSheetsClose6 (close) {
      this.$modal.confirm({
        msg: '触发了关闭事件，确定要关闭吗？',
        sure () {
          close()
        }
      })
      return false
    },
    actionSheetsPrev (e, close) {
      this.step -= 1
      this.cancelText = this.step <= 1 ? '取消' : '上一步'
      this.sureText = this.step >= 3 ? '完成' : '下一步'
      if (this.step < 1) {
        this.step = 1
        close()
      }
      // 阻止默认的关闭
      return false
    },
    actionSheetsNext (e, close) {
      this.step += 1
      this.sureText = this.step >= 3 ? '完成' : '下一步'
      this.cancelText = this.step > 1 ? '上一步' : '取消'
      if (this.step > 3) {
        this.step = 1
        close()
      }
      // 阻止默认的关闭
      return false
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

/**
 * comp-form文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月5日10:02:43
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comp-form',
  // 内部属性
  data () {
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '表单组件(comp-form)文档'
        },
        {
          type: 'paragraph',
          content: '表单，数据展示、输入、验证'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '组件标签'
        },
        {
          type: 'code',
          content: [
            '<comp-form></comp-form>'
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
                { text: 'dataList' },
                {
                  text: '表单数据列表',
                  table: {
                    head: LANG.attrHead,
                    width: '150%',
                    body: [
                      [
                        { text: '{}' },
                        {
                          text: '组',
                          table: {
                            head: LANG.attrHead,
                            width: '150%',
                            body: [
                              [
                                { text: 'groupList' },
                                {
                                  text: '组列表',
                                  table: {
                                    head: LANG.attrHead,
                                    width: '150%',
                                    body: [
                                      [
                                        { text: 'type' },
                                        { text: '类型' },
                                        { text: 'String' },
                                        { text: '表单项类型，针对表单额外类型：button.按钮 其他参考comp-text-label', textModel: 'scroll' },
                                        { text: '无' },
                                        { text: 'button' }
                                      ],
                                      [
                                        { text: 'buttonType', textModel: 'scroll' },
                                        {
                                          text: '按钮类型',
                                          table: {
                                            head: LANG.avaHead,
                                            body: [
                                              [
                                                { text: 'submit' },
                                                { text: '为submit时，点击按钮会自动触发表单验证，否则自行调用方法"verifyForm"来验证表单', textModel: 'scroll' }
                                              ]
                                            ]
                                          }
                                        },
                                        { text: 'String' },
                                        { text: '表单按钮类型' },
                                        { text: '无' },
                                        { text: 'submit' }
                                      ],
                                      [
                                        { text: 'slot' },
                                        { text: '插槽' },
                                        { text: 'String' },
                                        { text: '在表单内自定义一个插槽，用于自定义内容', textModel: 'scroll' },
                                        { text: '无' },
                                        { text: 'slot-custom-form-item', textModel: 'scroll' }
                                      ],
                                      [
                                        { text: 'key' },
                                        { text: '数据的key' },
                                        { text: 'String' },
                                        { text: '在表单验证成功后会返回当前表单的数据，每一项数据的key就通过这里设置', textModel: 'scroll' },
                                        { text: '无' },
                                        { text: 'userName' }
                                      ],
                                      [
                                        { text: 'verify' },
                                        {
                                          text: '验证类型',
                                          table: {
                                            head: LANG.avaHead,
                                            width: '150%',
                                            body: [
                                              [
                                                { text: 'request' },
                                                { text: '必填' }
                                              ],
                                              [
                                                { text: 'num-not-repeat-continuity', textModel: 'scroll' },
                                                { text: '6位不重复、不连续的数字', textModel: 'scroll' }
                                              ],
                                              [
                                                { text: 'email' },
                                                { text: '邮箱格式' }
                                              ],
                                              [
                                                { text: 'phone' },
                                                { text: '手机号(11位数字，以1开头)', textModel: 'scroll' }
                                              ],
                                              [
                                                { text: 'phone-email' },
                                                { text: '手机或邮箱' }
                                              ],
                                              [
                                                { text: 'number' },
                                                { text: '数字' }
                                              ],
                                              [
                                                { text: 'id-card' },
                                                { text: '身份证' }
                                              ],
                                              [
                                                { text: 'str-8-16-3' },
                                                { text: '精准校验：必须含有数字、字母、特殊字符，三个缺一不可', textModel: 'scroll' }
                                              ],
                                              [
                                                { text: 'str-8-16-2' },
                                                { text: '数字+字母；字母+特殊字符，特殊字符+数字任意两种组合', textModel: 'scroll' }
                                              ]
                                            ]
                                          }
                                        },
                                        { text: 'Array' },
                                        { text: '当前表单项验证类型集合，可以通过customerVerifyType自定义验证类型', textModel: 'scroll' },
                                        { text: '无' },
                                        { text: 'request' }
                                      ]
                                    ],
                                    remark: '更多其他属性，参考comp-text-label组件',
                                    remarkType: 'fail'
                                  }
                                },
                                { text: 'Array' },
                                { text: '组列表' },
                                { text: '无' },
                                { text: '[{部分数据参考comp-text-label}]', textModel: 'scroll' }
                              ]
                            ]
                          }
                        },
                        { text: 'Object' },
                        { text: '表单数据组' },
                        { text: '无' },
                        { text: '{groupList: [{部分数据参考comp-text-label},...]}', textModel: 'scroll' }
                      ]
                    ]
                  }
                },
                { text: 'Array' },
                { text: '表单数据列表，列表项部分数据参考comptext-label', textModel: 'scroll' },
                { text: '无' },
                { text: '[{groupList: [{部分数据参考comp-text-label},...]},...]', textModel: 'scroll' }
              ],
              [
                { text: 'customerVerifyType', textModel: 'scroll' },
                {
                  text: '自定义表单验证',
                  table: {
                    remark: '{ key(验证添加的key): "value(可以是函数(fn(value:当前被验证的值))，也可以是一个对象：{ regular: "验证正则", remark: "验证备注" })" }',
                    remarkType: 'warn'
                  }
                },
                { text: 'Object' },
                { text: '自定义表单验证' },
                { text: '无' },
                { text: '{ key: "value" }' }
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
                { text: 'verifyForm' },
                { text: '表单验证' },
                {
                  text: '详情',
                  table: {
                    head: LANG.paramHead,
                    body: [
                      [
                        { text: 'callBack' },
                        { text: 'Function' },
                        { text: '验证完后的回调,一般用"verifySuccess"和"verifyFail"事件', textModel: 'scroll' }
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
                { text: 'verify' },
                { text: '表单项验证' },
                {
                  text: '详情',
                  table: {
                    head: LANG.paramHead,
                    body: [
                      [
                        { text: 'verifyResult' },
                        { text: 'Object' },
                        { text: '验证结果{ status: "true|false", message: "验证消息" }', textModel: 'scroll' }
                      ],
                      [
                        { text: 'formItem' },
                        { text: 'Object' },
                        { text: '当前被验证的表单项', textModel: 'scroll' }
                      ]
                    ]
                  }
                }
              ],
              [
                { text: 'verifySuccess' },
                { text: '整个表单验证成功', textModel: 'scroll' },
                {
                  text: '详情',
                  table: {
                    head: LANG.paramHead,
                    body: [
                      [
                        { text: 'formData' },
                        { text: 'Object' },
                        { text: '当前表单的所有数据', textModel: 'scroll' }
                      ],
                      [
                        { text: 'formItem' },
                        { text: 'Object' },
                        { text: '当前被验证的表单项', textModel: 'scroll' }
                      ]
                    ]
                  }
                }
              ],
              [
                { text: 'verifyFail' },
                { text: '整个表单验证失败', textModel: 'scroll' },
                {
                  text: '详情',
                  table: {
                    head: LANG.paramHead,
                    body: [
                      [
                        { text: 'verifyStatus' },
                        { text: 'Object' },
                        { text: '验证结果{ status: "true|false", message: "验证消息" }', textModel: 'scroll' }
                      ],
                      [
                        { text: 'formItem' },
                        { text: 'Object' },
                        { text: '当前被验证的表单项', textModel: 'scroll' }
                      ]
                    ]
                  }
                }
              ],
              [
                { text: 'choose' },
                { text: '表单项type为choose的选择事件', textModel: 'scroll' },
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
                        { text: 'formItem' },
                        { text: 'Object' },
                        { text: '当前表单项' }
                      ],
                      [
                        { text: 'gid' },
                        { text: 'Number' },
                        { text: '当前表单组索引', textModel: 'scroll' }
                      ],
                      [
                        { text: 'fid' },
                        { text: 'Number' },
                        { text: '当前表单组下的项索引', textModel: 'scroll' }
                      ]
                    ]
                  }
                }
              ],
              [
                { text: 'formItemClick' },
                { text: '表单项点击事件', textModel: 'scroll' },
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
                        { text: 'formItem' },
                        { text: 'Object' },
                        { text: '当前表单项' }
                      ],
                      [
                        { text: 'gid' },
                        { text: 'Number' },
                        { text: '当前表单组索引', textModel: 'scroll' }
                      ],
                      [
                        { text: 'fid' },
                        { text: 'Number' },
                        { text: '当前表单组下的项索引', textModel: 'scroll' }
                      ]
                    ]
                  }
                }
              ],
              [
                { text: 'labelClick' },
                { text: '表单项label点击事件', textModel: 'scroll' },
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
                        { text: 'formItem' },
                        { text: 'Object' },
                        { text: '当前表单项' }
                      ],
                      [
                        { text: 'gid' },
                        { text: 'Number' },
                        { text: '当前表单组索引', textModel: 'scroll' }
                      ],
                      [
                        { text: 'fid' },
                        { text: 'Number' },
                        { text: '当前表单组下的项索引', textModel: 'scroll' }
                      ]
                    ]
                  }
                }
              ],
              [
                { text: 'textClick' },
                { text: '表单项text点击事件', textModel: 'scroll' },
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
                        { text: 'formItem' },
                        { text: 'Object' },
                        { text: '当前表单项' }
                      ],
                      [
                        { text: 'gid' },
                        { text: 'Number' },
                        { text: '当前表单组索引', textModel: 'scroll' }
                      ],
                      [
                        { text: 'fid' },
                        { text: 'Number' },
                        { text: '当前表单组下的项索引', textModel: 'scroll' }
                      ]
                    ]
                  }
                }
              ],
              [
                { text: 'textChange' },
                { text: '表单项text改变事件', textModel: 'scroll' },
                {
                  text: '详情',
                  table: {
                    head: LANG.paramHead,
                    body: [
                      [
                        { text: 'text' },
                        { text: 'String' },
                        { text: '改变后的文本' }
                      ],
                      [
                        { text: 'formItem' },
                        { text: 'Object' },
                        { text: '当前表单项' }
                      ],
                      [
                        { text: 'gid' },
                        { text: 'Number' },
                        { text: '当前表单组索引', textModel: 'scroll' }
                      ],
                      [
                        { text: 'fid' },
                        { text: 'Number' },
                        { text: '当前表单组下的项索引', textModel: 'scroll' }
                      ]
                    ]
                  }
                }
              ],
              [
                { text: 'inputFocus' },
                { text: '表单项type为input类型的focus事件', textModel: 'scroll' },
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
                        { text: 'formItem' },
                        { text: 'Object' },
                        { text: '当前表单项' }
                      ],
                      [
                        { text: 'gid' },
                        { text: 'Number' },
                        { text: '当前表单组索引', textModel: 'scroll' }
                      ],
                      [
                        { text: 'fid' },
                        { text: 'Number' },
                        { text: '当前表单组下的项索引', textModel: 'scroll' }
                      ]
                    ]
                  }
                }
              ],
              [
                { text: 'inputBlur' },
                { text: '表单项type为input类型的blur事件', textModel: 'scroll' },
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
                        { text: 'formItem' },
                        { text: 'Object' },
                        { text: '当前表单项' }
                      ],
                      [
                        { text: 'gid' },
                        { text: 'Number' },
                        { text: '当前表单组索引', textModel: 'scroll' }
                      ],
                      [
                        { text: 'fid' },
                        { text: 'Number' },
                        { text: '当前表单组下的项索引', textModel: 'scroll' }
                      ]
                    ]
                  }
                }
              ],
              [
                { text: 'inputKeypress' },
                { text: '表单项type为input类型的keypress事件', textModel: 'scroll' },
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
                        { text: 'formItem' },
                        { text: 'Object' },
                        { text: '当前表单项' }
                      ],
                      [
                        { text: 'gid' },
                        { text: 'Number' },
                        { text: '当前表单组索引', textModel: 'scroll' }
                      ],
                      [
                        { text: 'fid' },
                        { text: 'Number' },
                        { text: '当前表单组下的项索引', textModel: 'scroll' }
                      ]
                    ]
                  }
                }
              ],
              [
                { text: 'inputKeyup' },
                { text: '表单项type为input类型的keyup事件', textModel: 'scroll' },
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
                        { text: 'formItem' },
                        { text: 'Object' },
                        { text: '当前表单项' }
                      ],
                      [
                        { text: 'gid' },
                        { text: 'Number' },
                        { text: '当前表单组索引', textModel: 'scroll' }
                      ],
                      [
                        { text: 'fid' },
                        { text: 'Number' },
                        { text: '当前表单组下的项索引', textModel: 'scroll' }
                      ]
                    ]
                  }
                }
              ],
              [
                { text: 'buttonClick' },
                { text: '表单项type为button时的点击事件', textModel: 'scroll' },
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
                        { text: 'formItem' },
                        { text: 'Object' },
                        { text: '当前表单项' }
                      ],
                      [
                        { text: 'gid' },
                        { text: 'Number' },
                        { text: '当前表单组索引', textModel: 'scroll' }
                      ],
                      [
                        { text: 'fid' },
                        { text: 'Number' },
                        { text: '当前表单组下的项索引', textModel: 'scroll' }
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
          content: '表单'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comp-form :dataList="dataList"',
            '  @verify="verify"',
            '  @verifySuccess="verifySuccess"',
            '  @verifyFail="verifyFail"',
            '  @choose="formChoose">',
            '  <!-- 模拟密码强度 -->',
            '  <div slot="slot-password-strength" class="password-strength" v-if="pwdStrength">密码强度：强</div>',
            '  <!-- 发送验证码 -->',
            '  <div slot="slot-send-code" class="slot-send-code">',
            '    <span class="btn-send-code"',
            '      :class="sendBtnStatus === true ? "" : "disabled""',
            '      @click="sendCode">{{sendCodeText}}</span>',
            '  </div>',
            '</comp-form>',
            '<!-- 性别选择框 -->',
            '<comp-action-bars',
            '  ref="ref-action-bars"',
            '  title="请选择性别"',
            '  :barsList="actionBarsList"',
            '  @barItemChoose="barItemChoose" />'
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
            '  data () {',
            '    // 表单数据',
            '    dataList: [',
            '      {',
            '        groupList: [',
            '          { label: "用户名", key: "name", type: "input", text: "", verify: ["request"], placeholder: "请输入用户名" },',
            '          { label: "密码", key: "password", type: "input", inputType: "password", text: "", verify: ["request"], placeholder: "请输入密码" },',
            '          { slot: "slot-password-strength", class: "auto" },',
            '          { label: "手机号", key: "phone", type: "input", text: "", verify: ["request", "phone"], placeholder: "请输入手机号" },',
            '          { label: "验证码", key: "code", type: "input", text: "", verify: ["request"], placeholder: "请输入验证码", slotTextAfter: "slot-send-code" },',
            '          { label: "性别", key: "sex", type: "choose", text: "", verify: ["request"], placeholder: "请选择" }',
            '        ]',
            '      },',
            '      {',
            '        groupList: [',
            '          { type: "button", buttonType: "submit", text: "提交", class: "transparent group-item-full" }',
            '        ]',
            '      },',
            '      {',
            '        groupList: [',
            '          { type: "button", text: "两边有间隙", class: "transparent" }',
            '        ]',
            '      },',
            '      {',
            '        class: "group-item-row",',
            '        groupList: [',
            '          { type: "button", text: "两边有间隙", class: "transparent" },',
            '          { type: "button", text: "两边有间隙", class: "transparent btn-cancel" }',
            '        ]',
            '      },',
            '      {',
            '        class: "group-item-row",',
            '        groupList: [',
            '          { type: "button", text: "两边没有间隙", class: "transparent group-item-full btn-space-right" },',
            '          { type: "button", text: "两边没有间隙", class: "transparent group-item-full btn-space-left btn-cancel" }',
            '        ]',
            '      }',
            '    ]',
            '    // 性别选择列表',
            '    actionBarsList: [',
            '      { text: "男", value: "0" },',
            '      { text: "女", value: "1" }',
            '    ],',
            '    // 密码强度是否显示',
            '    pwdStrength: false,',
            '    // 发送按钮状态',
            '    sendBtnStatus: false,',
            '    // 发送验证码按钮文本',
            '    sendCodeText: "发送验证码"',
            '  }',
            '  methods: {',
            '    // 表单验证成功',
            '    verifySuccess (formData) {',
            '      this.$modal.alert(JSON.stringify(formData))',
            '    },',
            '    // 表单验证失败',
            '    verifyFail (verifyStatus) {',
            '      if (!verifyStatus.status) {',
            '        this.$toast.error(verifyStatus.message)',
            '      }',
            '    },',
            '    // 表单项验证',
            '    verify (verifyResult, formItem) {',
            '      if (formItem.key === "password") {',
            '        // 模拟密码强度',
            '        this.pwdStrength = formItem.text.length > 3',
            '      } else if (formItem.key === "phone") {',
            '        if (this.sendBtnStatus !== "loading") {',
            '          this.sendBtnStatus = verifyResult.status',
            '        }',
            '      }',
            '    },',
            '    // 表单项choose',
            '    formChoose (e, formItem, gidx, fidx) {',
            '      if (formItem.key === "sex") {',
            '        // 性别选择',
            '        this.$refs["ref-action-bars"].open()',
            '      }',
            '    },',
            '    // 性别选择',
            '    barItemChoose (e, bar) {',
            '      this.dataListEffect1[0].groupList[5].text = bar.text',
            '      this.dataListEffect1[0].groupList[5].verifyValue = bar.value',
            '    },',
            '    // 发送验证码',
            '    sendCode () {',
            '      if (this.sendBtnStatus === true) {',
            '        this.sendBtnStatus = "loading"',
            '        this.sendCodeText = "发送中"',
            '        this.$toast.loading("发送中")',
            '        let that = this',
            '        setTimeout(() => {',
            '          this.$toast.success("发送成功")',
            '          this.$utils.countDown({',
            '            timer: 10,',
            '            fn (timer) {',
            '              that.sendCodeText = timer + "s后重发"',
            '            },',
            '            callBack () {',
            '              that.sendCodeText = "发送验证码"',
            '              that.sendBtnStatus = true',
            '            }',
            '          })',
            '        }, 2000)',
            '      }',
            '    }',
            '  }',
            '}'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '效果展示',
          slotP: 'slot-display-effect1'
        },
        { type: 'space' }
      ],
      actionBarsList: [
        { text: '男', value: '0' },
        { text: '女', value: '1' }
      ],
      dataListEffect1: [
        {
          groupList: [
            { label: '用户名', key: 'name', type: 'input', text: '', verify: ['request'], placeholder: '请输入用户名' },
            { label: '密码', key: 'password', type: 'input', inputType: 'password', text: '', verify: ['request'], placeholder: '请输入密码' },
            { slot: 'slot-password-strength', class: 'auto' },
            { label: '手机号', key: 'phone', type: 'input', text: '', verify: ['request', 'phone'], placeholder: '请输入手机号' },
            { label: '验证码', key: 'code', type: 'input', text: '', verify: ['request'], placeholder: '请输入验证码', slotTextAfter: 'slot-send-code' },
            { label: '性别', key: 'sex', type: 'choose', text: '', verifyValue: '', verify: ['request'], placeholder: '请选择' }
          ]
        },
        {
          groupList: [
            { type: 'button', buttonType: 'submit', text: '提交', class: 'transparent group-item-full' }
          ]
        },
        {
          groupList: [
            { type: 'button', text: '两边有间隙', class: 'transparent' }
          ]
        },
        {
          class: 'group-item-row',
          groupList: [
            { type: 'button', text: '两边有间隙', class: 'transparent' },
            { type: 'button', text: '两边有间隙', class: 'transparent btn-cancel' }
          ]
        },
        {
          class: 'group-item-row',
          groupList: [
            { type: 'button', text: '两边没有间隙', class: 'transparent group-item-full btn-space-right' },
            { type: 'button', text: '两边没有间隙', class: 'transparent group-item-full btn-space-left btn-cancel' }
          ]
        }
      ],
      // 密码强度是否显示
      pwdStrength: false,
      // 发送按钮状态
      sendBtnStatus: false,
      // 发送验证码按钮文本
      sendCodeText: '发送验证码'
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
     * 表单验证成功
     */
    verifySuccess (formData) {
      this.$modal.alert(JSON.stringify(formData))
    },
    /**
     * 表单验证失败
     */
    verifyFail (verifyStatus) {
      if (!verifyStatus.status) {
        this.$toast.error(verifyStatus.message)
      }
    },
    /**
     * 表单项验证
     */
    verify (verifyResult, formItem) {
      if (formItem.key === 'password') {
        this.pwdStrength = formItem.text.length > 3
      } else if (formItem.key === 'phone') {
        if (this.sendBtnStatus !== 'loading') {
          this.sendBtnStatus = verifyResult.status
        }
      }
    },
    /**
     * 表单项choose
     */
    formChoose (e, formItem, gidx, fidx) {
      if (formItem.key === 'sex') {
        this.$refs['ref-action-bars'].open()
      }
    },
    /**
     * 性别选择
     */
    barItemChoose (e, bar) {
      this.dataListEffect1[0].groupList[5].text = bar.text
      this.dataListEffect1[0].groupList[5].verifyValue = bar.value
    },
    /**
     * 发送验证码
     */
    sendCode () {
      if (this.sendBtnStatus === true) {
        this.sendBtnStatus = 'loading'
        this.sendCodeText = '发送中'
        this.$toast.loading('发送中')
        let that = this
        setTimeout(() => {
          this.$toast.success('发送成功')
          this.$utils.countDown({
            timer: 10,
            fn (timer) {
              that.sendCodeText = timer + 's后重发'
            },
            callBack () {
              that.sendCodeText = '发送验证码'
              that.sendBtnStatus = true
            }
          })
        }, 2000)
      }
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

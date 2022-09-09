/**
 * comp-text-label文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月3日14:17:45
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comp-text-label',
  // 内部属性
  data () {
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '文本标签组件(comp-text-label)文档'
        },
        {
          type: 'paragraph',
          content: '文本标签，显示不同类型的文本'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '组件标签'
        },
        {
          type: 'code',
          content: [
            '<comp-text-label></comp-text-label>'
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
                { text: 'type' },
                {
                  text: '类型',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [
                        { text: 'text' },
                        { text: '文本类型' }
                      ],
                      [
                        { text: 'input' },
                        { text: '输入框类型' }
                      ],
                      [
                        { text: 'choose' },
                        { text: '带箭头符号的文本', textModel: 'scroll' }
                      ],
                      [
                        { text: 'pure-text' },
                        { text: '纯文本类型' }
                      ]
                    ]
                  }
                },
                { text: 'String' },
                { text: '标签类型' },
                { text: 'text' },
                { text: 'choose' }
              ],
              [
                { text: 'icon' },
                { text: '图标' },
                { text: 'Object' },
                { text: '图文图标' },
                { text: '无' },
                { text: 'require("icon.png")', textModel: 'scroll' }
              ],
              [
                { text: 'height' },
                { text: '高度' },
                { text: 'String' },
                { text: '自定义文本标签高度(带单位)', textModel: 'scroll' },
                { text: '20px' },
                { text: '40px' }
              ],
              [
                { text: 'inputType' },
                {
                  text: '输入框类型',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [
                        { text: 'text' },
                        { text: '文本框' }
                      ],
                      [
                        { text: 'password' },
                        { text: '密码框' }
                      ]
                    ]
                  }
                },
                { text: 'String' },
                { text: '输入框类型' },
                { text: 'text' },
                { text: 'password' }
              ],
              [
                { text: 'maxlenth' },
                { text: '最大长度' },
                { text: 'Number' },
                { text: '输入框的最大长度' },
                { text: '无' },
                { text: '10' }
              ],
              [
                { text: 'label' },
                { text: '标签文本' },
                { text: 'String' },
                { text: '标签文本' },
                { text: '无' },
                { text: '-' }
              ],
              [
                { text: 'labelRemark' },
                { text: '标签备注' },
                { text: 'String' },
                { text: '标签备注' },
                { text: '无' },
                { text: '-' }
              ],
              [
                { text: 'text' },
                { text: '文本' },
                { text: 'String' },
                { text: '文本，当标签类型为input时，为input的value', textModel: 'scroll' },
                { text: '无' },
                { text: '-' }
              ],
              [
                { text: 'textRemark' },
                { text: '文本备注' },
                { text: 'String' },
                { text: '文本备注' },
                { text: '无' },
                { text: '-' }
              ],
              [
                { text: 'readonly' },
                { text: '只读' },
                { text: 'Boolean' },
                { text: '文本框只读状态' },
                { text: '无' },
                { text: '-' }
              ],
              [
                { text: 'placeholder' },
                { text: '占位文本' },
                { text: 'String' },
                { text: '占位文本' },
                { text: '无' },
                { text: '-' }
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
              ],
              [
                { text: 'slotWhole' },
                { text: '整体插槽' },
                { text: 'String' },
                { text: '整体插槽自定义名称' },
                { text: '无' },
                { text: '-' }
              ],
              [
                { text: 'slotLabel' },
                { text: '标签插槽' },
                { text: 'String' },
                { text: '标签插槽自定义名称' },
                { text: '无' },
                { text: '-' }
              ],
              [
                { text: 'slotText' },
                { text: '文本插槽' },
                { text: 'String' },
                { text: '文本插槽自定义名称' },
                { text: '无' },
                { text: '-' }
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
                { text: 'choose' },
                { text: '选择事件，type为choose时有效', textModel: 'scroll' },
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
                { text: 'textLabelClick' },
                { text: '标签点击事件，对所有标签有效', textModel: 'scroll' },
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
                { text: 'labelClick' },
                { text: 'label点击事件', textModel: 'scroll' },
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
                { text: 'textClick' },
                { text: 'text点击事件', textModel: 'scroll' },
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
                { text: 'inputFocus' },
                { text: '输入框获取焦点事件，type为input时有效', textModel: 'scroll' },
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
                { text: 'inputBlur' },
                { text: '输入框获取焦点事件，type为input时有效', textModel: 'scroll' },
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
                { text: 'inputKeypress' },
                { text: '输入框获取焦点事件，type为input时有效', textModel: 'scroll' },
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
                { text: 'inputKeyup' },
                { text: '输入框获取焦点事件，type为input时有效', textModel: 'scroll' },
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
                { text: 'textChange' },
                { text: '文本改变事件', textModel: 'scroll' },
                {
                  text: '详情',
                  table: {
                    head: LANG.paramHead,
                    body: [
                      [
                        { text: 'text' },
                        { text: 'String' },
                        { text: '改变后的文本' }
                      ]
                    ]
                  }
                }
              ]
              // [
              //   { text: 'inputChange' },
              //   { text: '输入框值改变事件，type为input时有效', textModel: 'scroll' },
              //   {
              //     text: '详情',
              //     table: {
              //       head: LANG.paramHead,
              //       body: [
              //         [
              //           { text: 'value' },
              //           { text: 'String' },
              //           { text: '改变后的值' }
              //         ]
              //       ]
              //     }
              //   }
              // ]
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
                { text: '作用域插槽', table: LANG.slotTypeTable },
                { text: '无' },
                { text: '整体的插槽，可以替换整个结构，通过属性slotWhole设置', textModel: 'scroll' }
              ],
              [
                { text: '作用域插槽', table: LANG.slotTypeTable },
                { text: '无' },
                { text: 'label插槽，通过属性slotLabel设置', textModel: 'scroll' }
              ],
              [
                { text: '作用域插槽', table: LANG.slotTypeTable },
                { text: '无' },
                { text: 'test插槽，通过属性slotText设置', textModel: 'scroll' }
              ]
            ]
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '效果展示'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comp-text-label label="标签文本" labelRemark="标签备注" text="文本" textRemark="文本备注" />',
            '<comp-text-label type="choose" label="选择类型" textRemark="备注" />',
            '<comp-text-label type="choose" label="选择类型(高度：40px)" height="40px" placeholder="请选择" />',
            '<comp-text-label type="choose" label="选择类型" text="已选择" />',
            '<comp-text-label type="input" label="输入框类型" placeholder="请输入" />',
            '<comp-text-label type="input" label="输入框类型" placeholder="请输入" text="已输入" />',
            '<comp-text-label type="input" inputType="password" label="密码框类型" placeholder="请输入" text="已输入" />',
            '<comp-text-label type="choose" label="带图标" :icon="require("icon-test.png")" :iconSize="[30, 30]" height="40px" placeholder="请选择" />',
            '<comp-text-label type="choose" label="点击事件" :icon="require("icon-test.png")" :iconSize="[30, 30]" height="40px" textRemark="(自定义点击事件)" @choose="chooseEvent" />',
            '<comp-text-label type="choose" label="打开链接" :icon="require("icon-test.png")" :iconSize="[30, 30]" height="40px" textRemark="(点击打开百度)" link="http://www.baidu.com/" />',
            '<comp-text-label type="choose" label="打开路由" :icon="require("icon-test.png")" :iconSize="[30, 30]" height="40px" textRemark="(点击打开首页)" route="/layout/index" />'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '效果展示',
          slotP: 'slot-display-effect1'
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
     * 选择事件
     */
    chooseEvent () {
      this.$toast.msg('选择事件')
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

/**
 * comm-split-line文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月4日15:24:35
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comm-split-line',
  // 内部属性
  data () {
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '分割线模块(comm-split-line)文档'
        },
        {
          type: 'paragraph',
          content: '分割线'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '模块标签'
        },
        {
          type: 'code',
          content: [
            '<comm-split-line></comm-split-line>'
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
                { text: 'text' },
                { text: '文本' },
                { text: 'String' },
                { text: '分割线文本' },
                { text: '无' },
                { text: '分割线' }
              ],
              [
                { text: 'colorType' },
                {
                  text: '颜色',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [
                        { text: 'black' },
                        { text: '黑色' }
                      ],
                      [
                        { text: 'white' },
                        { text: '白色' }
                      ]
                    ]
                  }
                },
                { text: 'String' },
                { text: '文本颜色' },
                { text: 'black' },
                { text: 'white' }
              ],
              [
                { text: 'isShowLine' },
                {
                  text: '是否显示线条',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [
                        { text: 'true' },
                        { text: '显示' }
                      ],
                      [
                        { text: 'false' },
                        { text: '不显示' }
                      ]
                    ]
                  }
                },
                { text: 'Boolean' },
                { text: '是否显示线条' },
                { text: 'true' },
                { text: 'true' }
              ],
              [
                { text: 'lineType' },
                {
                  text: '分割线类型',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [
                        { text: 'gradual' },
                        { text: '渐变' }
                      ],
                      [
                        { text: 'dashed' },
                        { text: '虚线' }
                      ],
                      [
                        { text: 'default' },
                        { text: '实线' }
                      ]
                    ]
                  }
                },
                { text: 'String' },
                { text: '分割线类型' },
                { text: 'default' },
                { text: 'dashed' }
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
          table: {
            head: LANG.slotHead,
            body: [
              [
                { text: '匿名插槽', table: LANG.slotTypeTable },
                { text: '无' },
                { text: '分割线文本', textModel: 'scroll' }
              ]
            ]
          }
        },
        {
          type: 'title',
          grade: 'p2',
          content: '分割线'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comm-split-line text="分割线" />'
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
          content: '渐变分割线'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comm-split-line lineType="gradual">没有更多了</comm-split-line>'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '效果展示',
          slotP: 'slot-display-effect2'
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
  methods: { },
  // 开始创建
  created () { },
  // 创建完成
  mounted () { },
  // 销毁前
  beforeDestroy () { },
  // 销毁
  destory () { }
}

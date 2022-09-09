/**
 * comp-empty文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月6日15:52:08
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comp-empty',
  // 内部属性
  data () {
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '空占位组件(comp-empty)文档'
        },
        {
          type: 'paragraph',
          content: '空占位。'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '组件标签'
        },
        {
          type: 'code',
          content: [
            '<comp-empty></comp-empty>'
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
                { text: '为空的提示文本' },
                { text: 'String' },
                { text: '为空的提示文本，也可以使用插槽自定', textModel: 'scroll' },
                { text: '无' },
                { text: '暂无数据' }
              ],
              [
                { text: 'isFullText' },
                {
                  text: '提示文本撑满容器',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'true' }, { text: '文本撑满容器' }],
                      [{ text: 'false' }, { text: '文本宽度占容器一半' }]
                    ]
                  }
                },
                { text: 'Boolean' },
                { text: '文字是否撑满容器，默认撑满，不撑满时，为容器的一半', textModel: 'scroll' },
                { text: 'true' },
                { text: 'true' }
              ],
              [
                { text: 'thumb' },
                { text: '空占位图' },
                { text: 'String' },
                { text: '自定义为空的占位图' },
                { text: '无' },
                { text: 'require("bg-null.png")', textModel: 'scroll' }
              ]
            ]
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comp-empty>空占位</comp-empty>'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '空占位',
          slotP: 'slot-display-effect1'
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            ' <comp-empty :thumb="require("bg-null.png")">自定义占位图</comp-empty>'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '自定义占位图',
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

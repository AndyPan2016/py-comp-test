/**
 * comm-dashed文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月2日21:45:12
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-comm-dashed',
  // 内部属性
  data () {
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '虚线模块(comm-dashed)文档'
        },
        {
          type: 'paragraph',
          content: '虚线模块，分割线，分割内容'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '模块标签'
        },
        {
          type: 'code',
          content: [
            '<comm-dashed />'
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
                { text: 'direction' },
                {
                  text: '方向',
                  textModel: 'scroll',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'portrait' }, { text: '纵向' }],
                      [{ text: 'transverse' }, { text: '横向' }]
                    ]
                  }
                },
                { text: 'String' },
                { text: '虚线纵横方向' },
                { text: 'transverse' },
                { text: '' }
              ],
              [
                { text: 'lineSegment' },
                { text: '线段的长度' },
                { text: 'Number' },
                { text: '虚线线段的长度' },
                { text: 5 },
                { text: 5 }
              ],
              [
                { text: 'lineSegmentSpace' },
                { text: '线段间隙' },
                { text: 'Number' },
                { text: '虚线线段间隙' },
                { text: 5 },
                { text: 5 }
              ],
              [
                { text: 'border' },
                { text: '边框大小' },
                { text: 'Number' },
                { text: '虚线线段边框大小' },
                { text: 1 },
                { text: 1 }
              ],
              [
                { text: 'borderColor' },
                { text: '边框颜色' },
                { text: 'String' },
                { text: '虚线边框颜色' },
                { text: '#69729A' },
                { text: '#69729A' }
              ]
            ]
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '横向虚线'
        },
        {
          type: 'text',
          content: '横向虚线，宽度与父容器一致'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comm-dashed />'
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
          content: '纵向虚线'
        },
        {
          type: 'text',
          content: '纵向虚线，高度与父容器一致'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<div style="height:100px;">',
            '  <comm-dashed direction="portrait" />',
            '</div>'
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
          content: '横向虚线-自定义属性'
        },
        {
          type: 'text',
          content: '自定义虚线大小、间隙、边框大小、颜色'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comm-dashed',
            '  :lineSegment="2"',
            '  :lineSegmentSpace="2"',
            '  :border="2"',
            '  borderColor="#F00"',
            '  />'
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

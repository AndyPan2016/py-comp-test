/**
 * comp-waterfall-flow文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月6日16:23:14
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comp-waterfall-flow',
  // 内部属性
  data () {
    let that = this
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '瀑布流组件(comp-waterfall-flow)文档'
        },
        {
          type: 'paragraph',
          content: '瀑布流。'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '组件标签'
        },
        {
          type: 'code',
          content: [
            '<comp-waterfall-flow></comp-waterfall-flow>'
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
            body: []
          }
        },
        { type: 'space' },
        {
          type: 'link',
          content: '整体效果预览',
          fn () {
            that.routeTo('/layout/comp-pull-refresh-wff')
          }
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

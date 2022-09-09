/**
 * comp-pull-refresh文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月6日15:33:22
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comp-pull-refresh',
  // 内部属性
  data () {
    let that = this
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '下拉刷新组件(comp-pull-refresh)文档'
        },
        {
          type: 'paragraph',
          content: '下拉刷新。'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '组件标签'
        },
        {
          type: 'code',
          content: [
            '<comp-pull-refresh></comp-pull-refresh>'
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
            that.routeTo('/layout/comp-pull-refresh-dataset')
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

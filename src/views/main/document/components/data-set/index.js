/**
 * comp-data-set文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月6日14:41:56
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comp-data-set',
  // 内部属性
  data () {
    let that = this
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '列表数据展示组件(comp-data-set)文档'
        },
        {
          type: 'paragraph',
          content: '列表数据展示。'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '组件标签'
        },
        {
          type: 'code',
          content: [
            '<comp-data-set></comp-data-set>'
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
          type: 'title',
          grade: 'p2',
          content: '数据加载中',
          slotP: 'slot-display-effect1'
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '数据加载完成-数据为空',
          slotP: 'slot-display-effect2'
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '数据加载完成-数据为空-自定义为空提示文本',
          slotP: 'slot-display-effect3'
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '数据加载完成-有数据-未加载完',
          slotP: 'slot-display-effect4'
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '数据加载完成-有数据-已加载完',
          slotP: 'slot-display-effect5'
        },
        { type: 'space' },
        {
          type: 'link',
          content: '整体效果预览',
          fn () {
            that.routeTo('/layout/comp-pull-refresh-dataset')
          }
        }
      ],
      // 数据列表
      dataList: [{}, {}, {}]
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

/**
 * Toast文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月6日16:48:38
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-toast',
  // 内部属性
  data () {
    let that = this
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: 'Toast提示文档'
        },
        {
          type: 'paragraph',
          content: 'Toast提示。'
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
          content: '加载中',
          fn () {
            that.$toast.loading()
          }
        },
        { type: 'space' },
        {
          type: 'link',
          content: '加载中-min',
          fn () {
            that.$toast.loading({ type: 'min', msg: '加载中，请稍等' })
          }
        },
        { type: 'space' },
        {
          type: 'link',
          content: '成功',
          fn () {
            that.$toast.success()
          }
        },
        { type: 'space' },
        {
          type: 'link',
          content: '错误',
          fn () {
            that.$toast.error()
          }
        },
        { type: 'space' },
        {
          type: 'link',
          content: '警告',
          fn () {
            that.$toast.warn()
          }
        },
        { type: 'space' },
        {
          type: 'link',
          content: '无图标消息',
          fn () {
            that.$toast.msg('无图标消息')
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

/**
 * modal文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月6日16:57:07
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-modal',
  // 内部属性
  data () {
    let that = this
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: 'Modal提示文档'
        },
        {
          type: 'paragraph',
          content: 'Modal提示。'
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
          content: '提示消息(modal)',
          fn () {
            that.$modal.modal({
              sureButton: false,
              cancelButton: false,
              clickMaskClose: true,
              title: '提示消息(info)',
              msg: 'modal'
            })
          }
        },
        { type: 'space' },
        {
          type: 'link',
          content: '提示消息(info)',
          fn () {
            that.$modal.info('提示消息(info)')
          }
        },
        { type: 'space' },
        {
          type: 'link',
          content: '提示消息(alert)',
          fn () {
            that.$modal.alert('提示消息(alert)')
          }
        },
        { type: 'space' },
        {
          type: 'link',
          content: '提示消息(alert)',
          fn () {
            that.$modal.alert({
              icon: 'warn',
              msg: '提示消息(alert)',
              remark: '备注消息(alert)',
              sure: () => {
                that.$toast.success('alert sure')
              }
            })
          }
        },
        { type: 'space' },
        {
          type: 'link',
          content: '提示消息(confirm)',
          fn () {
            that.$modal.confirm({
              msg: '提示消息(confirm)',
              remark: '备注消息(confirm)',
              remarkType: 'error',
              sure: () => {
                that.$toast.success('confirm sure')
              }
            })
          }
        },
        { type: 'space' },
        {
          type: 'link',
          content: '提示消息(prompt)',
          fn () {
            that.$modal.prompt('提示消息(prompt)', (e, close, value) => {
              that.$toast.msg('prompt sure--->' + value)
            })
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

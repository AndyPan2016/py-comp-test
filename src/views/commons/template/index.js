/**
 * 公共块模板 JS
 * @authors AndyPan (pye-mail@163.com)
 * @date    2021年8月11日09:50:36
 * @remark  与业务相关的公共功能集合和模块，封装为公共块
 * @requirement 公共模块相关的命名以'comm'开头
 */

export default {
  // 组件名称，必填，在导入组件时需要通过该名称导入，使用组件时则以该名字作为组件标签名
  name: 'comm-template',
  // 内部属性
  data () {
    return { }
  },
  // 组件的对外属性
  props: { },
  // 组件属性监听
  watch: { },
  // 引用其他组件
  components: { },
  // 组件方法
  methods: { },
  // 组件开始创建
  created () { },
  // 组件创建完成
  mounted () { },
  // 组件销毁
  destory () { }
}

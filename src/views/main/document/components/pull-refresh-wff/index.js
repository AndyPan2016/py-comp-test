/**
 * 下拉刷新瀑布流 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月6日16:37:20
 */

export default {
  // 名称
  name: 'page-pull-refresh-wff',
  // 内部属性
  data () {
    return {
      testList: [],
      // 数据列表
      dataList: 'loading',
      // 加载状态(true.加载中 false.非加载中 -1.没有任何状态,组件内部没做任何展示,如果使用者设置状态为-1,需要通过插槽方式自行设置展示内容)，默认为true
      loadStatus: false,
      // 是否是最后的数据
      dataLastStatus: false,
      // 是否是刷新
      isRefresh: false,
      // 查询参数
      queryParams: {
        start: 1,
        limit: 15
      },
      // 是否测试空
      testNull: true
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
     * 加载数据
     */
    loadData (callBack) {
      let testNull = this.testNull
      this.$utils.listLoad({
        service: null,
        queryParams: this.queryParams,
        testNull,
        testPage: 3,
        that: this,
        callBack
      })
    },
    /**
     * 下拉刷新
     */
    refresh (e, callBack) {
      this.testNull = false
      this.queryParams.start = 1
      this.dataList = 'loading'
      this.dataLastStatus = false
      this.isRefresh = true
      this.loadData(callBack)
    },
    /**
     * 加载更多
     */
    loadMore (e, callBack) {
      this.isRefresh = false
      this.loadData(callBack)
    },
    /**
     * 重新加载
     */
    reload () {
      this.testNull = false
      this.queryParams.start = 1
      this.dataLastStatus = false
      this.dataList = 'loading'
      this.loadData()
    }
  },
  // 开始创建
  created () {
    this.loadData()
  },
  // 创建完成
  mounted () { },
  // 销毁前
  beforeDestroy () { },
  // 销毁
  destory () { }
}

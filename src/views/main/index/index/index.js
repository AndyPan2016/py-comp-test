/**
 * 首页 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年8月30日14:14:26
 */

export default {
  // 名称
  name: 'page-index-index',
  // 内部属性
  data () {
    return {
      // 公共模块数据列表
      commDataList: [
        {
          groupList: [
            { label: '协议标签', routeTitle: '协议标签', type: 'choose', route: '/layout/comm-agreement' },
            { label: '内容块', routeTitle: '内容块', type: 'choose', route: '/layout/comm-content-block' },
            { label: '虚线', routeTitle: '虚线', type: 'choose', route: '/layout/comm-dashed' },
            { label: '文档段落', routeTitle: '文档段落', type: 'choose', route: '/layout/comm-document-paragraph' },
            { label: '文档表格', routeTitle: '文档表格', type: 'choose', route: '/layout/comm-document-table' },
            { label: '固定块', routeTitle: '固定块', type: 'choose', route: '/layout/comm-fixed-block' },
            { label: '图标', routeTitle: '图标', type: 'choose', route: '/layout/comm-icon' },
            { label: '图标组', routeTitle: '图标组', type: 'choose', route: '/layout/comm-icon-group' },
            { label: '404', routeTitle: '404', type: 'choose', route: '/layout/comm-not-found' },
            { label: '分割线', routeTitle: '分割线', type: 'choose', route: '/layout/comm-split-line' }
          ]
        }
      ],
      // 公共组件数据列表
      compDataList: [
        {
          groupList: [
            { label: '操作栏', routeTitle: '操作栏', type: 'choose', route: '/layout/comp-action-bars' },
            { label: '操作卡片', routeTitle: '操作卡片', type: 'choose', route: '/layout/comp-action-sheets' },
            { label: '操作视图', routeTitle: '操作视图', type: 'choose', route: '/layout/comp-action-views' },
            { label: '列表数据展示', routeTitle: '列表数据展示', type: 'choose', route: '/layout/comp-data-set' },
            { label: '空占位', routeTitle: '空占位', type: 'choose', route: '/layout/comp-empty' },
            { label: '表单', routeTitle: '表单', type: 'choose', route: '/layout/comp-form' },
            { label: '链接和路由', routeTitle: '链接和路由', type: 'choose', route: '/layout/comp-link-and-route' },
            { label: '监听元素大小改变', routeTitle: '监听元素大小改变', type: 'choose', route: '/layout/comp-listen-change' },
            { label: '加载中', routeTitle: '加载中', type: 'choose', route: '/layout/comp-loading' },
            { label: '下拉刷新', routeTitle: '下拉刷新', type: 'choose', route: '/layout/comp-pull-refresh' },
            { label: '表格', routeTitle: '表格', type: 'choose', route: '/layout/comp-table' },
            { label: '文本标签', routeTitle: '文本标签', type: 'choose', route: '/layout/comp-text-label' },
            { label: '图片', routeTitle: '图片', type: 'choose', route: '/layout/comp-thumb' },
            { label: '瀑布流', routeTitle: '瀑布流', type: 'choose', route: '/layout/comp-waterfall-flow' }
          ]
        }
      ],
      // Utils数据列表
      utilsDataList: [
        {
          groupList: [
            { label: 'Toast提示', routeTitle: 'Toast提示', type: 'choose', route: '/layout/utils-toast' },
            { label: 'Modal提示', routeTitle: 'Modal提示', type: 'choose', route: '/layout/utils-modal' }
          ]
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
  methods: {
    testClick () {
      console.info('click')
      this.$utils.throttle(() => {
        console.info('yes')
      })
      // this.$utils.debounce(() => {
      //   console.info('yes1')
      // })
      // this.$utils.debounce(() => {
      //   console.info('yes2')
      // })
      // let result = this.$utils.debounce({
      //   fn: () => {
      //     console.info('yes')
      //   },
      //   type: 'local'
      // })
      // this.debounceResult1.run()
      // this.debounceResult2.run()
    }
  },
  // 开始创建
  created () {
    this.setWebSiteTitle('首页')
    // this.debounceResult1 = this.$utils.debounce({
    //   fn: () => {
    //     console.info('yes1')
    //   },
    //   type: 'local'
    // })
    // this.debounceResult2 = this.$utils.debounce({
    //   fn: () => {
    //     console.info('yes2')
    //   },
    //   type: 'local'
    // })
  },
  // 创建完成
  mounted () { },
  // 销毁前
  beforeDestroy () { },
  // 销毁
  destory () { }
}

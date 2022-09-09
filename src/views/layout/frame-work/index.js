/**
 * 框架页 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年6月2日09:37:23
 */

export default {
  // 名称
  name: 'layout-frame-work',
  // 内部属性
  data () {
    return {
      // 当前page，默认为index
      pages: 'index',
      // 当前page所在目录，默认为index
      catalogue: 'index',
      // 当前路由需要展示的组件
      currentComponent: null,
      // page与真实文件路径关系配置
      realPath: {
        // 模块agreement文档页面
        'comm-agreement': { pages: 'agreement', catalogue: 'document/commons' },
        // 模块content-block文档页面
        'comm-content-block': { pages: 'content-block', catalogue: 'document/commons' },
        // 模块dashed文档页面
        'comm-dashed': { pages: 'dashed', catalogue: 'document/commons' },
        // 模块document-paragraph文档页面
        'comm-document-paragraph': { pages: 'document-paragraph', catalogue: 'document/commons' },
        // 模块document-table文档页面
        'comm-document-table': { pages: 'document-table', catalogue: 'document/commons' },
        // 模块fixed-block文档页面
        'comm-fixed-block': { pages: 'fixed-block', catalogue: 'document/commons' },
        // 模块icon文档页面
        'comm-icon': { pages: 'icon', catalogue: 'document/commons' },
        // 模块icon-group文档页面
        'comm-icon-group': { pages: 'icon-group', catalogue: 'document/commons' },
        // 模块not-found文档页面
        'comm-not-found': { pages: 'not-found', catalogue: 'document/commons' },
        // 模块split-line文档页面
        'comm-split-line': { pages: 'split-line', catalogue: 'document/commons' },

        // 组件action-bars文档页面
        'comp-action-bars': { pages: 'action-bars', catalogue: 'document/components' },
        // 组件action-sheets文档页面
        'comp-action-sheets': { pages: 'action-sheets', catalogue: 'document/components' },
        // 组件action-views文档页面
        'comp-action-views': { pages: 'action-views', catalogue: 'document/components' },
        // 组件canvas文档页面
        'comp-canvas': { pages: 'canvas', catalogue: 'document/components' },
        // 组件data-set文档页面
        'comp-data-set': { pages: 'data-set', catalogue: 'document/components' },
        // 组件empty文档页面
        'comp-empty': { pages: 'empty', catalogue: 'document/components' },
        // 组件form文档页面
        'comp-form': { pages: 'form', catalogue: 'document/components' },
        // 组件link-and-route文档页面
        'comp-link-and-route': { pages: 'link-and-route', catalogue: 'document/components' },
        // 组件listen-change文档页面
        'comp-listen-change': { pages: 'listen-change', catalogue: 'document/components' },
        // 组件loading文档页面
        'comp-loading': { pages: 'loading', catalogue: 'document/components' },
        // 组件pull-refresh文本页面
        'comp-pull-refresh': { pages: 'pull-refresh', catalogue: 'document/components' },
        // 下拉刷新数据列表测试页面
        'comp-pull-refresh-dataset': { pages: 'pull-refresh-dataset', catalogue: 'document/components' },
        // 组件table文档页面
        'comp-table': { pages: 'table', catalogue: 'document/components' },
        // 模块text-label文档页面
        'comp-text-label': { pages: 'text-label', catalogue: 'document/components' },
        // 组件thumb文档页面
        'comp-thumb': { pages: 'thumb', catalogue: 'document/components' },
        // 组件waterfall-flow文档页面
        'comp-waterfall-flow': { pages: 'waterfall-flow', catalogue: 'document/components' },
        // 下拉刷新瀑布流列表测试页面
        'comp-pull-refresh-wff': { pages: 'pull-refresh-wff', catalogue: 'document/components' },

        // Toast提示
        'utils-toast': { pages: 'toast', catalogue: 'document/utils' },
        // Modal提示
        'utils-modal': { pages: 'modal', catalogue: 'document/utils' }
      }
    }
  },
  // 对外属性
  props: { },
  // 组件
  components: { },
  // 监听
  watch: {
    /**
     * 监听路由改变，渲染对应组件
     */
    '$route' () {
      this.renderComponent()
    }
  },
  // 内部方法
  methods: {
    /**
     * 渲染组件
     */
    renderComponent () {
      // 获取页面参数
      let params = this.params()
      let pages = params.pages || 'index'
      // 获取是否有路径关系配置
      let realPath = this.realPath[pages]
      // 当前目录
      let catalogue = 'index'
      catalogue = realPath ? realPath.catalogue || catalogue : catalogue
      this.catalogue = catalogue
      // 当前页面
      pages = realPath ? realPath.pages : pages
      this.pages = pages
      // 获取当前路由下要访问的组件页面
      let currentComponent = () => import('@/views/main/' + catalogue + '/' + pages + '/view.vue')
      if (currentComponent) {
        this.currentComponent = currentComponent
      }
    }
  },
  // 开始创建
  created () {
    this.renderComponent()
  },
  // 创建完成
  mounted () { },
  // 销毁前
  beforeDestroy () { },
  // 销毁
  destory () { }
}

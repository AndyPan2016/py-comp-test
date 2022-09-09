/**
 * VUE配置
 * @authors AndyPan (pye-mail@163.com)
 * @date    2020年7月7日15:13:38
 */

// 代码压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development'
// 本地环境是否需要使用cdn
const devNeedCdn = true
// cdn链接
const cdn = {
  // cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）
  externals: {
    vue: 'Vue',
    vuex: 'Vuex',
    'vue-router': 'VueRouter'
  },
  // cdn的css链接
  css: [],
  // cdn的js链接
  js: [
    'https://cdn.staticfile.org/vue/2.6.10/vue.min.js',
    'https://cdn.staticfile.org/vuex/3.0.1/vuex.min.js',
    'https://cdn.staticfile.org/vue-router/3.0.3/vue-router.min.js'
  ]
}
const px2rem = require('postcss-px2rem')

const postcss = px2rem({
  remUnit: 32 // 基准大小 baseSize，需要和rem.js中相同
})
module.exports = {
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为''，即空字符串
  devServer: {
    // 文档地址：http://cartechfin-youcheyun-test.qimoyun.com/docs/scheme/index.html
    proxy: 'http://ycy-test.ycysaas.cn/'
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  productionSourceMap: false
}

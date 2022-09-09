<template>
  <div id="app" class="app">
    <!-- 需要被缓存的路由组件,通过路由中的meta.keepAlive配置是否需要缓存 -->
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <!-- 不需要被缓存 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import { STATUS } from '@/configs'
import utils from '@/utils'

export default {
  name: 'app',
  data () {
    return { }
  },
  methods: {
    /**
     * 获取用户ip
     */
    getUserIp () {
      let script = document.createElement('script')
      script.src = 'https://pv.sohu.com/cityjson?ie=utf-8'
      // let that = this
      script.onload = function () {
        utils.setLocalStorage(STATUS.USERIP, window.returnCitySN.cip)
        utils.setLocalStorage(STATUS.USERCITY, window.returnCitySN.cname)
        if (window.onSohoJson) {
          // 用于在页面加载需要使用用户ip，但sohu又没有返回回来时，可使用该方式进行回调
          window.onSohoJson(window.returnCitySN)
        }
      }
      document.head.appendChild(script)
    },
    /**
     * h5调试(开发环境且不是模拟器)
     */
    vConsole () {
      let terminal = utils.realTerminal()
      let nodeEnv = process.env.NODE_ENV
      if ((nodeEnv === 'development' || nodeEnv === 'test' || nodeEnv === 'devtest' || nodeEnv === 'acceptance') && terminal.type !== 'simulator') {
        let script = document.createElement('script')
        script.src = 'https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js'
        script.onload = function () {
          /* eslint-disable */
          new VConsole()
        }
        document.body.appendChild(script)
      }
    }
  },
  created () { },
  mounted () {
    // this.getUserIp()
    // this.vConsole()
    utils.setDocumentScale({
      // 基准大小   1rem为32px
      baseSize: 32,
      // 设计图尺寸大小
      designSize: 375
    })
  }
}
</script>

<style lang="less">
@import url('./assets/less/commons.less');
</style>

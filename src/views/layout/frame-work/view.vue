<!--
 * 框架页 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年6月2日09:38:56
-->

<template>
  <div class="layout-frame-work">
    <comm-fixed-block fixed="top" :safeAreaInsetBottom="true">
      <!-- 框架头部(固定) -->
      <div class="frame-work-head"
        slot="slot-fixed-block-top">
        VComp（Vue Components）
      </div>
      <!-- 框架内容 -->
      <div class="frame-work-cont">
        <!-- 自定义动态组件渲染使用 -->
        <component v-bind:is="currentComponent"></component>
        <!-- 路由嵌套使用 -->
        <router-view></router-view>
      </div>
      <!-- 框架底部(内容为撑满时，固定在底部；内容撑满后，跟随内容往下撑) -->
      <div class="frame-work-foot"
        slot="slot-fixed-block">
        AndyPan（pye-mail@163.com）
      </div>
    </comm-fixed-block>
  </div>
</template>

<style scoped lang="less">
@import './view.less';
</style>
<script>
import render from './index.js'
export default render
</script>

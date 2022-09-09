<!--
 * comp-link-and-route文档 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月6日16:03:38
-->

<template>
  <div class="page-doc-comp-link-and-route">
    <!-- 文档段落 -->
    <comm-document-paragraph
      :documentParagraph="documentParagraph">
      <comp-link-and-route
        slot="slot-display-effect1"
        link="http://www.baidu.com/"
        >链接</comp-link-and-route>
      <comp-link-and-route
        slot="slot-display-effect2"
        route="/layout/index"
        >路由，打开内部页面-首页</comp-link-and-route>
      <comp-link-and-route
        slot="slot-display-effect3"
        @targetClick="targetClick"
        >点击事件</comp-link-and-route>
    </comm-document-paragraph>
  </div>
</template>

<style scoped lang="less">
@import './view.less';
</style>
<script>
import render from './index.js'
export default render
</script>

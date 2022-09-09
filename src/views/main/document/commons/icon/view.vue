<!--
 * comm-icon文档 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月4日09:39:15
-->

<template>
  <div class="page-doc-comm-icon">
    <!-- 文档段落 -->
    <comm-document-paragraph
      :documentParagraph="documentParagraph">
      <comm-icon
        slot="slot-display-effect1"
        :icon="require('./images/icon-test.png')"
        text="图文图标" />
      <comm-icon
        slot="slot-display-effect2"
        :icon="require('./images/icon-test.png')"
        structure="left-right"
        text="左右结构" />
      <comm-icon
        slot="slot-display-effect3"
        :size="[50,50]"
        :icon="require('./images/icon-test.png')"
        text="自定义大小(50*50)" />
      <comm-icon
        slot="slot-display-effect4"
        :icon="require('./images/icon-test.png')" />
      <comm-icon
        slot="slot-display-effect5"
        :size="[50,50]"
        :icon="require('./images/icon-test.png')"
        text="点击事件"
        @iconClick="iconClick" />
      <comm-icon
        slot="slot-display-effect6"
        :size="[50,50]"
        :icon="require('./images/icon-test.png')"
        text="百度"
        link="https://www.baidu.com/" />
      <comm-icon
        slot="slot-display-effect6"
        :size="[50,50]"
        :icon="require('./images/icon-test.png')"
        text="首页"
        route="/layout/index" />
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

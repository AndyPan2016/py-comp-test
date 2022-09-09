<!--
 * comp-empty文档 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月6日15:33:54
-->

<template>
  <div class="page-doc-comp-empty">
    <!-- 文档段落 -->
    <comm-document-paragraph
      :documentParagraph="documentParagraph">
      <div class="comp-empty-wrap" slot="slot-display-effect1">
        <comp-empty>空占位</comp-empty>
      </div>
      <div class="comp-empty-wrap" slot="slot-display-effect2">
        <comp-empty
          :thumb="require('./images/bg-null.png')">自定义占位图</comp-empty>
      </div>
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

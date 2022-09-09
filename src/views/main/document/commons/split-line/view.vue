<!--
 * comm-split-line文档 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月4日15:25:20
-->

<template>
  <div class="page-doc-comm-split-line">
    <!-- 文档段落 -->
    <comm-document-paragraph
      :documentParagraph="documentParagraph">
      <comm-split-line slot="slot-display-effect1" text="分割线" />
      <comm-split-line slot="slot-display-effect2" lineType="gradual">没有更多了</comm-split-line>
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

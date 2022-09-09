<!--
 * comm-document-table文档 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月3日11:21:34
-->

<template>
  <div class="page-doc-comm-document-table">
    <!-- 文档段落 -->
    <comm-document-paragraph
      :documentParagraph="documentParagraph" />
  </div>
</template>

<style scoped lang="less">
@import './view.less';
</style>
<script>
import render from './index.js'
export default render
</script>

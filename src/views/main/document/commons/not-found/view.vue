<!--
 * comm-not-found文档 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年8月31日17:05:01
-->

<template>
  <div class="page-doc-comm-not-found">
    <!-- 文档段落 -->
    <comm-document-paragraph
      :documentParagraph="documentParagraph" />
    <!-- 未找到页面模块 -->
    <comm-not-found />
  </div>
</template>

<style scoped lang="less">
@import './view.less';
</style>
<script>
import render from './index.js'
export default render
</script>

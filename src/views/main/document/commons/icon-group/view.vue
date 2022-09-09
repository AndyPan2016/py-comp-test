<!--
 * comm-icon-group文档 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月4日14:54:55
-->

<template>
  <div class="page-doc-comm-icon-group">
    <!-- 文档段落 -->
    <comm-document-paragraph
      :documentParagraph="documentParagraph">
      <comm-icon-group slot="slot-display-effect1" :iconList="iconList1" />
      <comm-icon-group slot="slot-display-effect2"
        :iconList="iconList1"
        groupSize="3"
        @iconClick="iconClick" />
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

<!--
 * comm-dashed文档 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月2日21:45:43
-->

<template>
  <div class="page-comm-dashed">
    <!-- 文档段落 -->
    <comm-document-paragraph
      :documentParagraph="documentParagraph">
      <!-- 横向虚线 -->
      <comm-dashed slot="slot-display-effect1" />
      <!-- 纵向虚线 -->
      <div style="height:100px;" slot="slot-display-effect2">
        <comm-dashed direction="portrait" />
      </div>
      <!-- 横向虚线-自定义属性 -->
      <comm-dashed
        slot="slot-display-effect3"
        :lineSegment="2"
        :lineSegmentSpace="2"
        :border="2"
        borderColor="#F00" />
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

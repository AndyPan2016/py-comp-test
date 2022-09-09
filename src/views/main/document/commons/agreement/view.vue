<!--
 * comm-agreement文档 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月2日12:01:26
-->

<template>
  <div class="page-comm-agreement">
    <!-- 文档段落 -->
    <comm-document-paragraph
      :documentParagraph="documentParagraph">
      <!-- 显示选择框的标签 -->
      <comm-agreement
        preText="请认真阅读"
        :dataList="agreementList"
        afterText="，并同意"
        slot="slot-display-effect1" />
      <!-- 不显示选择框的标签 -->
      <comm-agreement
        preText="请认真阅读"
        :dataList="agreementList"
        :showCheckbox="false"
        afterText="，并同意"
        slot="slot-display-effect2" />
      <!-- 自定义各种属性的标签 -->
      <comm-agreement
        preText="请认真阅读"
        :dataList="agreementList1"
        afterText="，并同意"
        format="(agreement)"
        splitText=","
        slot="slot-display-effect3"
        @checkboxStausChange="checkboxStausChange" />
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

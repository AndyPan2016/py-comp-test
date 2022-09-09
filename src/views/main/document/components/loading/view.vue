<!--
 * comp-loading文档 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月6日16:03:38
-->

<template>
  <div class="page-doc-comp-loading">
    <!-- 文档段落 -->
    <comm-document-paragraph
      :documentParagraph="documentParagraph">
      <comp-loading slot="slot-display-effect1" />
      <comp-loading type="max" slot="slot-display-effect2" />
      <comp-loading type="max" mode="light-weight" slot="slot-display-effect3" />
      <comp-loading
        mode="light-weight"
        colorType="black"
        loadingText=""
        slot="slot-display-effect4"
        >加载中</comp-loading>
      <comp-loading
        mode="light-weight"
        colorType="blue"
        loadingText="加载中"
        slot="slot-display-effect4" />
      <comp-loading
        mode="light-weight"
        colorType="white"
        loadingText="加载中"
        slot="slot-display-effect4" />
      <comp-loading
        :loadingIcon="require('./images/icon-loading.png')"
        slot="slot-display-effect5" />
      <comp-loading
        :loadingIcon="require('./images/icon-loading.png')"
        type="max"
        slot="slot-display-effect5" />
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

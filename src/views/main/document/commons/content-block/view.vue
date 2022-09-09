<!--
 * comm-content-block文档 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月2日19:15:41
-->

<template>
  <div class="page-comm-content-block">
    <!-- 文档段落 -->
    <comm-document-paragraph
      :documentParagraph="documentParagraph">
      <!-- 内容块 -->
      <comm-content-block slot="slot-display-effect1" title="标题" content="内容" />
      <!-- 内容块-插槽标题和插槽内容 -->
      <comm-content-block slot="slot-display-effect2"
        titleSlot="slot-cb-title"
        contentSlot="slot-cb-content">
        <!-- 插槽标题 -->
        <div slot="slot-cb-title">插槽标题</div>
        <!-- 插槽内容 -->
        <div slot="slot-cb-content">插槽内容</div>
      </comm-content-block>
      <!-- 内容块-标题+分组 -->
      <comm-content-block slot="slot-display-effect3"
        title="大号标题"
        :max="true"
        content="内容">
      </comm-content-block>
      <!-- 内容块-点击事件 -->
      <comm-content-block slot="slot-display-effect4"
        :titleIcon="require('./images/icon.png')"
        title="点击更多"
        remark="更多"
        content="内容"
        @remarkClick="remarkClick">
      </comm-content-block>
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

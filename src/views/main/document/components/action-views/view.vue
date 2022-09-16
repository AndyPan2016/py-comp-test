<!--
 * comp-action-views文档 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年8月30日16:08:08
-->

<template>
  <div class="page-doc-comp-action-views">
    <!-- 文档段落 -->
    <comm-document-paragraph
      :documentParagraph="documentParagraph" />
    <!-- 动作视图组件 -->
    <comp-action-views
      ref="ref-action-views-default">
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-btn" @click="closeActionDefault">点此关闭</div>
    </comp-action-views>
    <comp-action-views
      :visible="viewVisible1"
      :clickMaskClose="true"
      :backOffClose="true"
      @close="onClose1">
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
      <div class="action-view-test-cont">这是一个简单的动作视图组件的展示</div>
    </comp-action-views>
  </div>
</template>

<style scoped lang="less">
@import './view.less';
</style>
<script>
import render from './index.js'
export default render
</script>

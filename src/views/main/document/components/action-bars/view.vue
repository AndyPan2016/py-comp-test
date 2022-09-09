<!--
 * comp-action-bars文档 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年8月30日16:08:08
-->

<template>
  <div class="page-doc-comp-action-bars">
    <!-- 文档段落 -->
    <comm-document-paragraph
      :documentParagraph="documentParagraph" />
    <!-- 展示效果 -->
    <comp-action-bars
      ref="ref-action-bars"
      title="操作栏"
      remark="不同类型按钮"
      :barsList="actionBarsList" />
    <comp-action-bars
      :visible="deleteBarsVisible"
      title="提示"
      remark="数据将被删除"
      :barsList="deleteBarsList"
      @close="deleteBarsClose"
      @barItemChoose="deleteBarItemClick" />
    <comp-action-bars
      :clickMaskClose="true"
      :visible="simpleBarsVisible"
      title="提示"
      remark="这是一个简单的底部弹窗提示(你也可以不要这个备注)"
      barsContent="点击背景遮罩可关闭"
      @close="simpleBarsClose" />
  </div>
</template>

<style scoped lang="less">
@import './view.less';
</style>
<script>
import render from './index.js'
export default render
</script>

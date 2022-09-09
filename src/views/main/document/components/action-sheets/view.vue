<!--
 * comp-action-sheets文档 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年8月30日16:08:08
-->

<template>
  <div class="page-doc-comp-action-sheets">
    <!-- 文档段落 -->
    <comm-document-paragraph
      :documentParagraph="documentParagraph" />
    <!-- 展示效果 -->
    <comp-action-sheets
      ref="ref-action-sheets0"
      title="一个简单的Action-Sheets"
      content="简单的内容" />
    <comp-action-sheets
      ref="ref-action-sheets1"
      title="默认展示效果"
      remark="插槽内容">
      <div class="action-sheet-cont">操作卡片内容</div>
    </comp-action-sheets>
    <comp-action-sheets
      ref="ref-action-sheets2"
      title="确定、取消按钮组合"
      remark="点击背景遮罩不会关闭"
      :clickMaskClose="false"
      buttonType="button">
      <div class="action-sheet-cont">操作卡片内容</div>
    </comp-action-sheets>
    <comp-action-sheets
      ref="ref-action-sheets3"
      title="监听关闭事件"
      @close="actionSheetsClose3">
      <div class="action-sheet-cont">操作卡片内容</div>
    </comp-action-sheets>
    <comp-action-sheets
      ref="ref-action-sheets4"
      title="监听确定按钮事件"
      :clickMaskClose="false"
      buttonType="button"
      @sure="actionSheetsSure4">
      <div class="action-sheet-cont">确定按钮事件监听(取消按钮同理)</div>
    </comp-action-sheets>
    <comp-action-sheets
      ref="ref-action-sheets5"
      title="监听确定按钮事件-阻止关闭"
      :clickMaskClose="false"
      buttonType="button"
      :selfCloseSure="true"
      @sure="actionSheetsSure5">
      <div class="action-sheet-cont">点击确定，阻止关闭，确定后再关闭(取消按钮同理)</div>
    </comp-action-sheets>
    <comp-action-sheets
      ref="ref-action-sheets6"
      title="监听关闭事件"
      :clickMaskClose="false"
      buttonType="button"
      :onClose="actionSheetsClose6">
      <div class="action-sheet-cont">监听关闭事件，阻止关闭，确定后再关闭</div>
    </comp-action-sheets>
    <comp-action-sheets
      ref="ref-action-sheets7"
      title="步骤"
      :clickMaskClose="false"
      buttonType="button"
      :sureText="sureText"
      :sureDisabled="sureDisabled"
      :selfCloseSure="true"
      cancelType="sure"
      :cancelText="cancelText"
      :cancelDisabled="cancelDisabled"
      :selfCloseCancel="true"
      @cancel="actionSheetsPrev"
      @sure="actionSheetsNext">
      <div class="action-sheet-cont" v-if="step === 1">第一步</div>
      <div class="action-sheet-cont" v-if="step === 2">第二步</div>
      <div class="action-sheet-cont" v-if="step === 3">第三步</div>
    </comp-action-sheets>
  </div>
</template>

<style scoped lang="less">
@import './view.less';
</style>
<script>
import render from './index.js'
export default render
</script>

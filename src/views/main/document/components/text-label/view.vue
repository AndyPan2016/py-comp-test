<!--
 * comp-text-label文档 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月3日14:18:27
-->

<template>
  <div class="page-doc-comp-text-label">
    <!-- 文档段落 -->
    <comm-document-paragraph
      :documentParagraph="documentParagraph">
      <comp-text-label
        slot="slot-display-effect1"
        label="标签文本"
        labelRemark="标签备注"
        text="文本"
        textRemark="文本备注" />
      <comp-text-label
        slot="slot-display-effect1"
        type="choose"
        label="选择类型"
        textRemark="备注" />
      <comp-text-label
        slot="slot-display-effect1"
        type="choose"
        label="选择类型(高度：40px)"
        height="40px"
        placeholder="请选择" />
      <comp-text-label
        slot="slot-display-effect1"
        class="lab2-txt3"
        type="choose"
        label="选择类型"
        text="已选择" />
      <comp-text-label
        slot="slot-display-effect1"
        type="input"
        label="输入框类型"
        placeholder="请输入" />
      <comp-text-label
        slot="slot-display-effect1"
        type="input"
        label="输入框类型"
        placeholder="请输入"
        text="已输入" />
      <comp-text-label
        slot="slot-display-effect1"
        type="input"
        inputType="password"
        label="密码框类型"
        placeholder="请输入"
        text="已输入" />
      <comp-text-label
        slot="slot-display-effect1"
        type="choose"
        label="带图标"
        :icon="require('./images/icon-test.png')"
        :iconSize="[30, 30]"
        height="40px"
        placeholder="请选择" />
      <comp-text-label
        slot="slot-display-effect1"
        type="choose"
        label="点击事件"
        :icon="require('./images/icon-test.png')"
        :iconSize="[30, 30]"
        height="40px"
        textRemark="(自定义点击事件)"
        @choose="chooseEvent" />
      <comp-text-label
        slot="slot-display-effect1"
        type="choose"
        label="打开链接"
        :icon="require('./images/icon-test.png')"
        :iconSize="[30, 30]"
        height="40px"
        textRemark="(点击打开百度)"
        link="http://www.baidu.com/" />
      <comp-text-label
        slot="slot-display-effect1"
        type="choose"
        label="打开路由"
        :icon="require('./images/icon-test.png')"
        :iconSize="[30, 30]"
        height="40px"
        textRemark="(点击打开首页)"
        route="/layout/index" />
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

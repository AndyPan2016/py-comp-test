<!--
 * 首页 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年8月30日14:14:43
-->

<template>
  <div class="page-index-index">
    <!-- <a href="javascript:;" @click="testClick">点击</a> -->
    <comm-content-block
      class="page-content-block"
      title="公共模块"
      type="block"
      contentSlot="slot-content">
      <comp-form
        slot="slot-content"
        :dataList="commDataList" />
    </comm-content-block>
    <comm-content-block
      class="page-content-block"
      title="公共组件"
      type="block"
      contentSlot="slot-content">
      <comp-form
        slot="slot-content"
        :dataList="compDataList" />
    </comm-content-block>
    <comm-content-block
      class="page-content-block"
      title="Utils工具"
      type="block"
      contentSlot="slot-content">
      <comp-form
        slot="slot-content"
        :dataList="utilsDataList" />
    </comm-content-block>
  </div>
</template>

<style scoped lang="less">
@import './view.less';
</style>
<script>
import render from './index.js'
export default render
</script>

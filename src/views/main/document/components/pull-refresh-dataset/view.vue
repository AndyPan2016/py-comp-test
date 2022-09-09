<!--
 * 下拉刷新列表 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月6日15:12:46
-->

<template>
  <div class="page-pull-refresh-dataset">
    <comp-pull-refresh
      @pullRefresh="refresh"
      @scrollDown="loadMore">
      <comp-dataset
        :dataList="dataList"
        :loadStatus="loadStatus"
        :dataLastStatus="dataLastStatus"
        :isRefresh="isRefresh"
        :isShowReLoad="true"
        @reload="reload">
        <div class="data-list-item"
          v-for="(item, idx) in dataList"
          :key="idx">
          {{idx}}.数据
        </div>
      </comp-dataset>
    </comp-pull-refresh>
  </div>
</template>

<style scoped lang="less">
@import './view.less';
</style>
<script>
import render from './index.js'
export default render
</script>

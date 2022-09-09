<!--
 * comp-data-set文档 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月6日14:43:04
-->

<template>
  <div class="page-doc-comp-data-set">
    <!-- 文档段落 -->
    <comm-document-paragraph
      :documentParagraph="documentParagraph">
      <!-- 数据加载中 -->
      <div class="dataset-wrap" slot="slot-display-effect1">
        <comp-dataset
          :dataList="'loading'"
          :loadStatus="true"
          :dataLastStatus="false"></comp-dataset>
      </div>
      <!-- 数据加载完成-数据为空 -->
      <div class="dataset-wrap" slot="slot-display-effect2">
        <comp-dataset
          :dataList="[]"
          :loadStatus="false"
          :dataLastStatus="true"></comp-dataset>
      </div>
      <!-- 数据加载完成-数据为空-自定义为空提示文本 -->
      <div class="dataset-wrap" slot="slot-display-effect3">
        <comp-dataset
          :dataList="[]"
          :loadStatus="false"
          :dataLastStatus="true"
          dataNullText="没得数据"></comp-dataset>
      </div>
      <!-- 数据加载完成-有数据-未加载完 -->
      <div class="dataset-wrap" slot="slot-display-effect4">
        <comp-dataset
          :dataList="dataList"
          :loadStatus="false"
          :dataLastStatus="false">
          <div class="data-list-item"
            v-for="(item, idx) in dataList"
            :key="idx">
            {{idx}}.有数据了
          </div>
        </comp-dataset>
      </div>
      <!-- 数据加载完成-有数据-已加载完 -->
      <div class="dataset-wrap" slot="slot-display-effect5">
        <comp-dataset
          :dataList="dataList"
          :loadStatus="false"
          :dataLastStatus="true">
          <div class="data-list-item"
            v-for="(item, idx) in dataList"
            :key="idx">
            {{idx}}.有数据了
          </div>
        </comp-dataset>
      </div>
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

<!--
 * comm-fixed-block文档 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月3日12:52:34
-->

<template>
  <div class="page-doc-comm-fixed-block">
    <!-- 文档段落 -->
    <comm-document-paragraph
      :documentParagraph="documentParagraph">
      <!-- 上下都固定 -->
      <div class="fixed-block-text"
        slot="slot-display-effect1">
        <comm-fixed-block :fixed="true">
          <!-- 头部(固定) -->
          <div slot="slot-fixed-block-top">头部(固定)</div>
          <!-- 内容 -->
          <div class="frame-work-cont">
            <div>内容(超出显示滚动条)</div>
            <div>内容(超出显示滚动条)</div>
            <div>内容(超出显示滚动条)</div>
            <div>内容(超出显示滚动条)</div>
            <div>内容(超出显示滚动条)</div>
            <div>内容(超出显示滚动条)</div>
            <div>内容(超出显示滚动条)</div>
            <div>内容(超出显示滚动条)</div>
            <div>内容(超出显示滚动条)</div>
            <div>内容(超出显示滚动条)</div>
            <div>内容(超出显示滚动条)</div>
          </div>
          <!-- 底部(固定) -->
          <div slot="slot-fixed-block">底部(固定)</div>
        </comm-fixed-block>
      </div>
      <!-- 底部被撑走，滚动时，上面也会被滚动带走 -->
      <div class="fixed-block-text"
        slot="slot-display-effect2">
        <comm-fixed-block :fixed="false">
          <!-- 头部 -->
          <div slot="slot-fixed-block-top">头部</div>
          <!-- 内容 -->
          <div class="frame-work-cont" @click="addDataEffect2">
            <div v-for="(item, idx) in dataEffect2"
              :key="idx">{{item.text}}</div>
          </div>
          <!-- 底部 -->
          <div slot="slot-fixed-block">底部</div>
        </comm-fixed-block>
      </div>
      <!-- 顶部固定，底部被撑走 -->
      <div class="fixed-block-text"
        slot="slot-display-effect3">
        <comm-fixed-block fixed="top">
          <!-- 头部 -->
          <div slot="slot-fixed-block-top">头部</div>
          <!-- 内容 -->
          <div class="frame-work-cont" @click="addDataEffect3">
            <div v-for="(item, idx) in dataEffect3"
              :key="idx">{{item.text}}</div>
          </div>
          <!-- 底部 -->
          <div slot="slot-fixed-block">底部</div>
        </comm-fixed-block>
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

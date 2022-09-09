<!--
 * comp-listen-change文档 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月7日08:39:36
-->

<template>
  <div class="page-doc-comp-listen-change">
    <!-- 文档段落 -->
    <comm-document-paragraph
      :documentParagraph="documentParagraph">
      <comp-listen-change slot="slot-display-effect1"
        @change="targetChange">
        <div class="listen-change-wrap">
          <div class="link-btn"
            @click="add">点击增加内容，以触发容器打开改变</div>
          <div class="link-btn"
            @click="del">点击删除内容，以触发容器打开改变</div>
          <div v-for="(item, idx) in tempData"
            :key="idx">{{idx + 1}}内容</div>
        </div>
      </comp-listen-change>
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

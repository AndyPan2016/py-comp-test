<!--
 * comp-thumb文档 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月6日16:17:59
-->

<template>
  <div class="page-doc-comp-thumb">
    <!-- 文档段落 -->
    <comm-document-paragraph
      :documentParagraph="documentParagraph">
      <comp-thumb
        slot="slot-display-effect1"
        :src="thumbSrc"
        width="100px"
        height="100px" />
      <div slot="slot-display-effect2">
        <comp-thumb
          :src="thumbSrc"
          width="100px"
          height="50px" />
      </div>
      <div slot="slot-display-effect2">
        <comp-thumb
          :src="thumbSrc"
          width="50px"
          height="100px" />
      </div>
      <div slot="slot-display-effect3">
        <comp-thumb
          :src="null"
          width="100px"
          height="100px" />
      </div>
      <div slot="slot-display-effect3">
        <comp-thumb
          :src="null"
          placeholderType="text"
          width="100px"
          height="100px" />
      </div>
      <div slot="slot-display-effect3">
        <comp-thumb
          :src="null"
          placeholderType="text"
          placeholderText="占位图"
          width="100px"
          height="100px" />
      </div>
      <div slot="slot-display-effect3">
        <comp-thumb
          :src="null"
          placeholderType="heart"
          width="100px"
          height="100px" />
      </div>
      <comp-thumb
        slot="slot-display-effect4"
        src="error.jpg"
        :spareSrc="thumbSrc"
        width="100px"
        height="100px" />
      <comp-thumb
        slot="slot-display-effect5"
        src="error.jpg"
        width="100px"
        height="100px" />
      <comp-thumb
        slot="slot-display-effect6"
        :src="thumbSrc"
        width="100px"
        height="100px"
        lazyLoad="click-load" />
      <div class="visible-area-wrap"
        slot="slot-display-effect7"
        ref="ref-visible-area">
        <div v-if="scrollTarget">
          <comp-thumb
            :src="thumbSrc"
            width="100px"
            height="100px"
            lazyLoad="visible-area"
            :scrollTarget="scrollTarget" />
        </div>
        <div v-if="scrollTarget">
          <comp-thumb
            :src="thumbSrc"
            width="100px"
            height="100px"
            lazyLoad="visible-area"
            :scrollTarget="scrollTarget" />
        </div>
        <div v-if="scrollTarget">
          <comp-thumb
            :src="thumbSrc"
            width="100px"
            height="100px"
            lazyLoad="visible-area"
            :scrollTarget="scrollTarget" />
        </div>
        <div v-if="scrollTarget">
          <comp-thumb
            :src="thumbSrc"
            width="100px"
            height="100px"
            lazyLoad="visible-area"
            :scrollTarget="scrollTarget" />
        </div>
        <div v-if="scrollTarget">
          <comp-thumb
            :src="thumbSrc"
            width="100px"
            height="100px"
            lazyLoad="visible-area"
            :scrollTarget="scrollTarget" />
        </div>
        <div>
          <comp-thumb
            :src="thumbSrc"
            width="100px"
            height="100px"
            lazyLoad="visible-area"
            :scrollTarget="scrollTarget" />
        </div>
        <div v-if="scrollTarget">
          <comp-thumb
            :src="thumbSrc"
            width="100px"
            height="100px"
            lazyLoad="visible-area"
            :scrollTarget="scrollTarget" />
        </div>
        <div v-if="scrollTarget">
          <comp-thumb
            :src="thumbSrc"
            width="100px"
            height="100px"
            lazyLoad="visible-area"
            :scrollTarget="scrollTarget" />
        </div>
        <div v-if="scrollTarget">
          <comp-thumb
            :src="thumbSrc"
            width="100px"
            height="100px"
            lazyLoad="visible-area"
            :scrollTarget="scrollTarget" />
        </div>
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

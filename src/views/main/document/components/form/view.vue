<!--
 * comp-form文档 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月5日10:04:13
-->

<template>
  <div class="page-doc-comp-form">
    <!-- 文档段落 -->
    <comm-document-paragraph
      :documentParagraph="documentParagraph">
      <comp-form
        slot="slot-display-effect1"
        :dataList="dataListEffect1"
        @verify="verify"
        @verifySuccess="verifySuccess"
        @verifyFail="verifyFail"
        @choose="formChoose">
        <!-- 密码强度 -->
        <div slot="slot-password-strength" class="password-strength" v-if="pwdStrength">密码强度：强</div>
        <!-- 发送验证码 -->
        <div slot="slot-send-code" class="slot-send-code">
          <span class="btn-send-code"
            :class="sendBtnStatus === true ? '' : 'disabled'"
            @click="sendCode">{{sendCodeText}}</span>
        </div>
      </comp-form>
    </comm-document-paragraph>
    <comp-action-bars
      ref="ref-action-bars"
      title="请选择性别"
      :barsList="actionBarsList"
      @barItemChoose="barItemChoose" />
  </div>
</template>

<style scoped lang="less">
@import './view.less';
</style>
<script>
import render from './index.js'
export default render
</script>

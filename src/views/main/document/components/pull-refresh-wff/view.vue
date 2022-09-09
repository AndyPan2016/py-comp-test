<!--
 * 下拉刷新瀑布流 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月6日16:41:45
-->

<template>
  <div class="page-pull-refresh-wff">
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
        <comp-waterfall-flow class="wff-goods"
          :dataList="dataList">
          <div class="wff-goods-item"
            v-for="(item, idx) in dataList"
            :key="idx"
            :slot="'slot-wff-prefix' + idx">
            <div class="goods-info-wrap">
              <div class="goods-name">{{idx % 2 === 0 ? '小米 Redmi红米K30S至尊纪念版' : '小米 Redmi红米K30S至尊纪念版Redmi红米K30S至尊纪念版Redmi红米K30S至尊纪念版'}}</div>
              <div class="goods-label">
                <label class="goods-label-item">15元券</label>
                <label class="goods-label-item">15元券</label>
              </div>
              <div class="goods-money">￥99.99</div>
            </div>
          </div>
        </comp-waterfall-flow>
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

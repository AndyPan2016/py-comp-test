<!--
 * 测试 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date    2020年9月27日10:40:37
-->

<template>
  <div class="page-main-test" ref="j-main-test">
    <comp-listen-change
      @change="listenChange">
      <div>
        <comp-thumb
          :src="null"
          width="100px"
          height="100px" />
        <comp-thumb
          :src="null"
          placeholderType="text"
          placeholderText="占位图"
          width="100px"
          height="100px" />
        <comp-thumb
          :src="thumbSrc"
          width="100px"
          height="100px" />
        <comp-thumb
          src="error.jpg"
          :spareSrc="thumbSrc"
          width="100px"
          height="100px" />
        <comp-thumb
          src="error.jpg"
          width="100px"
          height="100px" />
        <comp-thumb
          :src="thumbSrc"
          width="100px"
          height="100px"
          lazyLoad="click-load" />
        <!-- <comp-thumb
          :src="thumbSrc"
          mode="auto" /> -->
        <a href="javascript:;" @click="add">添加</a>
        <div class="data-list-item"
          v-for="(item, idx) in testList"
          :key="idx">
          {{idx}}.列表
        </div>
      </div>
    </comp-listen-change>
    <comp-waterfall-flow class="wff-goods"
      :dataList="wffDataSet">
      <div class="wff-goods-item"
        v-for="(item, idx) in wffDataSet"
        :key="idx"
        :slot="'slot-wff-prefix' + idx">
        <div class="goods-info-wrap">
          <div class="goods-name">{{item.name}}</div>
          <div class="goods-label">
            <label class="goods-label-item">15元券</label>
            <label class="goods-label-item">15元券</label>
          </div>
          <div class="goods-money">￥99.99</div>
        </div>
      </div>
    </comp-waterfall-flow>
  </div>
</template>

<script>

export default {
  name: 'test',
  data () {
    return {
      thumbSrc: 'http://youcheyunoss.oss-cn-shenzhen.aliyuncs.com/pro/20220516/1220262906931048448.jpg',
      testList: [],
      wffDataSet: [
        { name: '小米 Redmi红米K30S至尊纪念版' },
        { name: '小米 Redmi红米K30S' },
        { name: '小米 Redmi红米K30S至尊纪念版Redmi红米K30S至尊纪念版Redmi红米K30S至尊纪念版' }
      ]
    }
  },
  component: {},
  methods: {
    add () {
      let testList = this.testList
      testList.push({})
      this.testList = testList
    },
    listenChange (e, main) {
      console.info(e)
      console.info(main)
    }
  },
  created () { },
  mounted () {
    setTimeout(() => {
      this.wffDataSet.push({ name: '小米 Redmi红米K30S至尊纪念版' })
      this.wffDataSet.push({ name: '小米 Redmi红米K30S' })
      this.wffDataSet.push({ name: '小米 Redmi红米K30S' })
    }, 3000)
  },
  destory () { }
}
// 1.执行命令修改npm源
// npm config set registry https://registry.npmjs.org
// 2.npm login登录你的npm账号
// 3.发布组件
// npm publish
// 4.删除已发布包名
// npm unpublish [包名] --force
</script>
<style scoped lang="less">
.page-main-test {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // background: #ccc;
  // canvas {
  //   border: 2px solid #08A573;
  //   background-size: 100% 250%;
  //   background-position: center bottom;
  // }
  .data-list-item {
    line-height: 30px;
    text-align: left;
    padding: 0 10px;
  }
  .wff-goods {
    margin: 0 11px;
  }
  .wff-goods-item {
    margin: 0 4px;
    margin-bottom: 10px;
    background: #FFF;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    .goods-thumb-wrap {
      height: 168px;
    }
    .goods-info-wrap {
      margin: 10px;
      text-align: left;
      .goods-name {
        line-height: 18px;
        font-size: 13px;
        color: #333;
      }
    }
    .goods-label {
      margin-bottom: 4px;
      .goods-label-item {
        display: inline-block;
        margin: 4px;
        margin-left: 0;
        margin-top: 0;
        border-radius: 4px;
        padding: 0 6px;
        line-height: 14px;
        border: 1px solid #FF5A39;
        font-size: 10px;
        color: #FF5A39;
      }
    }
    .goods-money {
      font-size: 18px;
      color: #FF5A39;
      font-weight: bold;
      line-height: 26px;
    }
  }
}
</style>

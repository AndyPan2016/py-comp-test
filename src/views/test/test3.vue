<!--
 * 测试 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date    2020年9月27日10:40:37
-->

<template>
  <div class="page-main-test" ref="j-main-test">
    <div class="region-wrap"
      v-if="history">
      <div class="region mb-30">
        <span class="stage">数字占比</span>
        <span class="region-item red-ratio-num"
          v-for="(reg, regKey, regi) in region"
          :key="'red-' + regi">
          <span class="region-item-num"
            v-for="(num, idx) in reg"
            :key="idx">{{historyRatio.red[num]}}</span>
        </span>
        <span class="region-item red-ratio">-</span>
        <span class="region-item total">-</span>
        <span class="region-item span">-</span>
        <span class="region-item parity">-</span>
        <span class="region-item blue-ratio-num"
          v-for="(reg, regKey, regi) in blueRegion"
          :key="'blue-' + regi">
          <span class="region-item-num"
            v-for="(num, idx) in reg"
            :key="idx">{{historyRatio.blue[num]}}</span>
        </span>
        <span class="region-item blue-ratio">-</span>
      </div>
      <div class="region"
        v-for="(his, stageKey, i) in history"
        :key="i">
        <span class="stage">
          {{stageKey}}
          <span class="stage-hd" v-if="i === 0">期数</span>
        </span>
        <span class="region-item red"
          v-for="(reg, regKey, regi) in region"
          :key="'red-' + regKey">
          <span class="region-item-num"
            v-for="(num, idx) in reg"
            :key="idx"
            :class="his.red[num] ? 'active' : ''">{{num}}</span>
          <span class="red-hd"
            v-if="i === 0"
            >红码{{regKey}}区{{redRatio ? '(' + (redRatio[regi]) + ')' : ''}}</span>
        </span>
        <span class="region-item red-ratio">
          {{his.redRatio.join(':')}}({{redRatioTemp[his.redRatio.join(':')].count}}次 {{redRatioTemp[his.redRatio.join(':')].ratio}})
          <span class="red-ratio-hd" v-if="i === 0">红码区比</span>
        </span>
        <span class="region-item total">
          {{his.total}}
          <span class="red-ratio-hd" v-if="i === 0">和值</span>
        </span>
        <span class="region-item span">
          {{his.span}}
          <span class="red-ratio-hd" v-if="i === 0">跨度</span>
        </span>
        <span class="region-item parity">
          {{his.parity.join(':')}}({{parityTemp[his.parity.join(':')].count}}次 {{parityTemp[his.parity.join(':')].ratio}})
          <span class="red-ratio-hd" v-if="i === 0">奇偶比</span>
        </span>
        <span class="region-item blue"
          v-for="(reg, regKey, regi) in blueRegion"
          :key="'blue-' + regKey">
          <span class="region-item-num"
            v-for="(num, idx) in reg"
            :key="idx"
            :class="his.blue[num] ? 'active' : ''">{{num}}</span>
          <span class="blue-hd"
            v-if="i === 0"
            >蓝码{{regKey}}区{{blueRatio ? '(' + (blueRatio[regi]) + ')' : ''}}</span>
        </span>
        <span class="region-item blue-ratio">
          {{his.blueRatio.join(':')}}({{blueRatioTemp[his.blueRatio.join(':')].count}}次 {{blueRatioTemp[his.blueRatio.join(':')].ratio}})
          <span class="blue-ratio-hd" v-if="i === 0">蓝码区比</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'test',
  data () {
    return {
      // 红-分区
      // region: {
      //   // A区
      //   A: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31],
      //   // B区
      //   B: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32],
      //   // C区
      //   C: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33]
      // },
      // region: {
      //   A: [1, 5, 9, 13, 17, 21, 25, 29, 33],
      //   B: [2, 6, 10, 14, 18, 22, 26, 30],
      //   C: [3, 7, 11, 15, 19, 23, 27, 31],
      //   D: [4, 8, 12, 16, 20, 24, 28, 32]
      // },
      // region: {
      //   A: [1, 6, 11, 16, 21, 26, 31],
      //   B: [2, 7, 12, 17, 22, 27, 32],
      //   C: [3, 8, 13, 18, 23, 28, 33],
      //   D: [4, 9, 14, 19, 24, 29],
      //   E: [5, 10, 15, 20, 25, 30]
      // },
      // region: {
      //   A: [1, 7, 13, 19, 25, 31],
      //   B: [2, 8, 14, 20, 26, 32],
      //   C: [3, 9, 15, 21, 27, 33],
      //   D: [4, 10, 16, 22, 28],
      //   E: [5, 11, 17, 23, 29],
      //   F: [6, 12, 18, 24, 30]
      // },
      region: {
        A: [1, 8, 15, 22, 29],
        B: [2, 9, 16, 23, 30],
        C: [3, 10, 17, 24, 31],
        D: [4, 11, 18, 25, 32],
        E: [5, 12, 19, 26, 33],
        F: [6, 13, 20, 27],
        G: [7, 14, 21, 28]
      },
      // region: {
      //   A: [1, 9, 17, 25, 33],
      //   B: [2, 10, 18, 26],
      //   C: [3, 11, 19, 27],
      //   D: [4, 12, 20, 28],
      //   E: [5, 13, 21, 29],
      //   F: [6, 14, 22, 30],
      //   G: [7, 15, 23, 31],
      //   H: [8, 16, 24, 32]
      // },
      // region: {
      //   A: [1, 10, 19, 28],
      //   B: [2, 11, 20, 29],
      //   C: [3, 12, 21, 30],
      //   D: [4, 13, 22, 31],
      //   E: [5, 14, 23, 32],
      //   F: [6, 15, 24, 33],
      //   G: [7, 16, 25],
      //   H: [8, 17, 26],
      //   I: [9, 18, 27]
      // },
      // 蓝-分区
      // blueRegion: {
      //   A: [1, 4, 7, 10, 13, 16],
      //   B: [2, 5, 8, 11, 14],
      //   C: [3, 6, 9, 12, 15]
      // },
      // blueRegion: {
      //   A: [1, 5, 9, 13],
      //   B: [2, 6, 10, 14],
      //   C: [3, 7, 11, 15],
      //   D: [4, 8, 12, 16]
      // },
      blueRegion: {
        A: [1, 6, 11, 16],
        B: [2, 7, 12],
        C: [3, 8, 13],
        D: [4, 9, 14],
        E: [5, 10, 15]
      },
      // blueRegion: {
      //   A: [1, 7, 13],
      //   B: [2, 8, 14],
      //   C: [3, 9, 15],
      //   D: [4, 10, 16],
      //   E: [5, 11],
      //   F: [6, 12]
      // },
      // blueRegion: {
      //   A: [1, 8, 15],
      //   B: [2, 9, 16],
      //   C: [3, 10],
      //   D: [4, 11],
      //   E: [5, 12],
      //   F: [6, 13],
      //   G: [7, 14]
      // },
      // blueRegion: {
      //   A: [1, 7, 13],
      //   B: [2, 8, 14],
      //   C: [3, 9, 15],
      //   D: [4, 10, 16],
      //   E: [5, 11],
      //   F: [6, 12]
      // },
      historyTemp: {
        '-22122-': { red: [6, 8, 17, 19, 24, 28], blue: [5] },
        '-22121-': { red: [12, 17, 22, 27, 30, 31], blue: [2] },
        '-22120-': { red: [2, 15, 19, 26, 27, 29], blue: [2] },
        '-22119-': { red: [2, 5, 15, 18, 26, 27], blue: [4] },
        '-22118-': { red: [2, 6, 7, 11, 14, 33], blue: [8] },
        '-22117-': { red: [4, 13, 17, 18, 28, 29], blue: [6] },
        '-22116-': { red: [8, 14, 26, 27, 30, 33], blue: [1] },
        '-22115-': { red: [6, 7, 18, 20, 27, 29], blue: [9] },
        '-22114-': { red: [1, 5, 15, 19, 26, 29], blue: [13] },
        '-22113-': { red: [13, 14, 20, 24, 27, 29], blue: [2] },
        '-22112-': { red: [3, 5, 8, 17, 25, 31], blue: [1] },
        '-22111-': { red: [2, 10, 11, 13, 28, 31], blue: [1] },
        '-22110-': { red: [9, 13, 15, 18, 20, 28], blue: [15] },
        '-22109-': { red: [4, 11, 13, 19, 22, 33], blue: [11] },
        '-22108-': { red: [1, 7, 13, 17, 18, 31], blue: [15] },
        '-22107-': { red: [3, 9, 11, 15, 19, 28], blue: [16] },
        '-22106-': { red: [17, 20, 22, 23, 24, 31], blue: [1] },
        '-22105-': { red: [6, 12, 13, 15, 21, 23], blue: [15] },
        '-22104-': { red: [1, 8, 19, 25, 26, 31], blue: [1] },
        '-22103-': { red: [6, 9, 12, 14, 20, 28], blue: [10] },
        '-22102-': { red: [9, 10, 12, 18, 29, 32], blue: [14] },
        '-22101-': { red: [4, 16, 18, 19, 27, 28], blue: [4] },
        '-22100-': { red: [2, 6, 7, 15, 20, 21], blue: [15] },
        '-22099-': { red: [1, 11, 23, 24, 26, 32], blue: [15] },
        '-22098-': { red: [2, 3, 4, 6, 21, 33], blue: [5] },
        '-22097-': { red: [4, 5, 10, 13, 30, 31], blue: [14] },
        '-22096-': { red: [3, 16, 17, 19, 25, 33], blue: [7] },
        '-22095-': { red: [4, 13, 14, 18, 20, 28], blue: [8] },
        '-22094-': { red: [6, 11, 13, 16, 19, 31], blue: [2] },
        '-22093-': { red: [21, 22, 24, 28, 29, 32], blue: [14] },
        '-22092-': { red: [7, 10, 16, 20, 21, 27], blue: [11] },
        '-22091-': { red: [8, 18, 20, 22, 24, 28], blue: [10] },
        '-22090-': { red: [1, 4, 25, 27, 29, 30], blue: [7] },
        '-22089-': { red: [2, 7, 15, 29, 31, 33], blue: [15] },
        '-22088-': { red: [3, 9, 15, 17, 20, 22], blue: [6] },
        '-22087-': { red: [5, 6, 9, 13, 23, 25], blue: [8] },
        '-22086-': { red: [1, 4, 8, 21, 23, 24], blue: [11] },
        '-22085-': { red: [7, 9, 14, 31, 32, 33], blue: [13] },
        '-22084-': { red: [3, 16, 23, 24, 25, 32], blue: [9] },
        '-22083-': { red: [8, 12, 13, 14, 19, 20], blue: [5] },
        '-22082-': { red: [4, 10, 11, 23, 30, 32], blue: [14] },
        '-22081-': { red: [4, 8, 11, 21, 27, 30], blue: [1] },
        '-22080-': { red: [5, 12, 15, 17, 18, 27], blue: [4] },
        '-22079-': { red: [1, 9, 15, 17, 22, 23], blue: [16] },
        '-22078-': { red: [1, 4, 5, 15, 17, 31], blue: [9] },
        '-22077-': { red: [3, 17, 18, 19, 20, 27], blue: [16] },
        '-22076-': { red: [8, 9, 10, 13, 24, 29], blue: [2] },
        '-22075-': { red: [1, 2, 4, 25, 26, 30], blue: [10] },
        '-22074-': { red: [5, 7, 15, 19, 29, 30], blue: [15] },
        '-22073-': { red: [6, 10, 14, 15, 26, 29], blue: [12] },
        '-22072-': { red: [5, 14, 15, 16, 18, 32], blue: [12] },
        '-22071-': { red: [4, 7, 15, 18, 29, 33], blue: [1] },
        '-22070-': { red: [4, 6, 9, 27, 28, 33], blue: [2] },
        '-22069-': { red: [6, 7, 13, 19, 26, 29], blue: [8] },
        '-22068-': { red: [7, 12, 15, 24, 26, 29], blue: [6] },
        '-22067-': { red: [1, 5, 13, 21, 26, 29], blue: [15] },
        '-22066-': { red: [6, 11, 14, 20, 27, 30], blue: [9] },
        '-22065-': { red: [9, 14, 18, 23, 28, 31], blue: [2] },
        '-22064-': { red: [4, 6, 12, 13, 17, 31], blue: [16] },
        '-22063-': { red: [6, 8, 9, 17, 22, 31], blue: [11] },
        '-22062-': { red: [16, 18, 20, 21, 23, 33], blue: [5] },
        '-22061-': { red: [1, 3, 16, 18, 29, 33], blue: [6] },
        '-22060-': { red: [16, 18, 19, 24, 28, 32], blue: [1] },
        '-22059-': { red: [6, 9, 18, 19, 29, 33], blue: [6] },
        '-22058-': { red: [6, 13, 14, 23, 31, 33], blue: [1] },
        '-22057-': { red: [12, 15, 20, 26, 30, 33], blue: [16] },
        '-22056-': { red: [1, 6, 11, 14, 27, 26], blue: [15] },
        '-22055-': { red: [2, 4, 9, 26, 28, 33], blue: [3] },
        '-22054-': { red: [8, 12, 21, 27, 28, 33], blue: [11] },
        '-22053-': { red: [10, 14, 18, 23, 27, 33], blue: [15] },
        '-22052-': { red: [7, 24, 27, 29, 31, 32], blue: [15] },
        '-22051-': { red: [2, 5, 11, 17, 21, 33], blue: [1] },
        '-22050-': { red: [3, 5, 8, 14, 27, 33], blue: [8] },
        '-22049-': { red: [2, 4, 7, 18, 25, 26], blue: [10] },
        '-22048-': { red: [5, 7, 17, 20, 26, 31], blue: [14] },
        '-22047-': { red: [3, 7, 8, 14, 27, 30], blue: [9] },
        '-22046-': { red: [2, 11, 24, 25, 27, 30], blue: [14] },
        '-22045-': { red: [3, 12, 17, 18, 19, 28], blue: [4] },
        '-22044-': { red: [1, 7, 8, 21, 23, 29], blue: [6] },
        '-22043-': { red: [2, 17, 20, 23, 25, 27], blue: [8] },
        '-22042-': { red: [5, 10, 11, 21, 22, 30], blue: [13] },
        '-22041-': { red: [5, 7, 21, 22, 24, 29], blue: [14] },
        '-22040-': { red: [3, 12, 14, 16, 31, 33], blue: [12] },
        '-22039-': { red: [2, 6, 7, 10, 15, 20], blue: [5] },
        '-22038-': { red: [9, 12, 13, 16, 24, 32], blue: [4] },
        '-22037-': { red: [1, 10, 13, 20, 22, 32], blue: [14] },
        '-22036-': { red: [2, 3, 14, 16, 26, 31], blue: [2] },
        '-22035-': { red: [8, 12, 13, 19, 23, 25], blue: [15] },
        '-22034-': { red: [14, 17, 26, 31, 32, 33], blue: [10] },
        '-22033-': { red: [5, 12, 19, 22, 25, 26], blue: [5] },
        '-22032-': { red: [4, 10, 11, 14, 23, 32], blue: [7] },
        '-22031-': { red: [1, 10, 11, 22, 26, 32], blue: [7] },
        '-22030-': { red: [12, 23, 24, 26, 27, 30], blue: [5] },
        '-22029-': { red: [3, 8, 10, 13, 26, 32], blue: [8] },
        '-22028-': { red: [5, 11, 20, 22, 23, 29], blue: [9] },
        '-22027-': { red: [14, 15, 18, 19, 26, 32], blue: [9] },
        '-22026-': { red: [3, 4, 10, 15, 22, 24], blue: [2] },
        '-22025-': { red: [6, 19, 24, 25, 28, 32], blue: [4] },
        '-22024-': { red: [7, 9, 10, 14, 19, 24], blue: [15] },
        '-22023-': { red: [7, 12, 17, 19, 24, 25], blue: [2] },
        '-22022-': { red: [1, 7, 11, 15, 17, 19], blue: [6] },
        '-22021-': { red: [3, 7, 22, 24, 26, 31], blue: [14] },
        '-22020-': { red: [9, 11, 14, 22, 30, 32], blue: [1] },
        '-22018-': { red: [7, 11, 16, 17, 30, 32], blue: [16] },
        '-22017-': { red: [6, 9, 24, 29, 30, 32], blue: [7] },
        '-22016-': { red: [5, 10, 19, 20, 29, 31], blue: [14] },
        '-22015-': { red: [6, 14, 16, 27, 28, 31], blue: [7] },
        '-22014-': { red: [6, 7, 13, 14, 15, 27], blue: [4] },
        '-22013-': { red: [2, 3, 4, 7, 10, 18], blue: [15] },
        '-22012-': { red: [4, 7, 8, 29, 30, 31], blue: [1] },
        '-22011-': { red: [6, 15, 23, 24, 25, 33], blue: [15] },
        '-22010-': { red: [12, 18, 19, 20, 21, 32], blue: [15] },
        '-22009-': { red: [4, 15, 17, 19, 25, 28], blue: [16] },
        '-22008-': { red: [2, 3, 7, 9, 20, 21], blue: [13] },
        '-22007-': { red: [1, 20, 22, 23, 25, 28], blue: [16] },
        '-22006-': { red: [3, 6, 9, 15, 22, 31], blue: [2] },
        '-22005-': { red: [7, 10, 12, 16, 19, 31], blue: [16] },
        '-22004-': { red: [5, 19, 24, 28, 30, 32], blue: [14] },
        '-22003-': { red: [2, 5, 16, 17, 18, 30], blue: [6] },
        '-22002-': { red: [2, 12, 21, 23, 25, 31], blue: [8] },
        '-22001-': { red: [6, 13, 15, 17, 20, 21], blue: [3] },
        '-21150-': { red: [9, 14, 20, 21, 24, 26], blue: [4] },
        '-21149-': { red: [5, 10, 15, 18, 19, 32], blue: [5] },
        '-21148-': { red: [10, 12, 15, 17, 19, 20], blue: [8] },
        '-21147-': { red: [5, 10, 11, 13, 27, 28], blue: [9] },
        '-21146-': { red: [7, 9, 21, 22, 26, 32], blue: [3] },
        '-21145-': { red: [4, 7, 10, 14, 16, 26], blue: [9] },
        '-21144-': { red: [2, 5, 13, 15, 23, 26], blue: [7] },
        '-21143-': { red: [1, 9, 11, 13, 20, 29], blue: [9] },
        '-21142-': { red: [4, 7, 17, 19, 20, 24], blue: [16] },
        '-21141-': { red: [1, 14, 19, 23, 26, 30], blue: [10] },
        '-21140-': { red: [5, 10, 16, 26, 27, 33], blue: [1] },
        '-21139-': { red: [12, 14, 19, 23, 24, 27], blue: [1] },
        '-21138-': { red: [11, 14, 15, 16, 27, 32], blue: [9] },
        '-21137-': { red: [3, 7, 10, 14, 21, 24], blue: [1] },
        '-21136-': { red: [2, 6, 9, 15, 19, 28], blue: [16] },
        '-21135-': { red: [3, 10, 17, 19, 21, 31], blue: [4] },
        '-21134-': { red: [1, 2, 16, 19, 25, 31], blue: [8] },
        '-21133-': { red: [1, 3, 12, 19, 27, 31], blue: [10] },
        '-21132-': { red: [1, 4, 6, 14, 20, 28], blue: [8] },
        '-21131-': { red: [8, 11, 18, 19, 20, 24], blue: [1] },
        '-21130-': { red: [8, 9, 15, 24, 26, 30], blue: [6] },
        '-21129-': { red: [4, 15, 21, 27, 28, 29], blue: [10] },
        '-21128-': { red: [5, 17, 20, 21, 23, 33], blue: [4] },
        '-21127-': { red: [7, 15, 16, 20, 27, 29], blue: [7] }
      },
      maxHistory: 100,
      history: null,
      redRatio: null,
      blueRatio: null,
      historyRatio: null,
      redRatioTemp: {},
      blueRatioTemp: {},
      parityTemp: {}
    }
  },
  component: {},
  methods: {
    installHistory () {
      let region = this.region
      let blueRegion = this.blueRegion
      let historyTemp = this.historyTemp
      let history = {}
      let temp
      let red
      let redItem
      let blue
      let total
      let parity
      let max
      let min
      let historyCount = 0
      let historyNum = { red: {}, blue: {} }
      let redRatioTemp = {}
      let blueRatioTemp = {}
      let parityTemp = {}
      for (let key in historyTemp) {
        historyCount++
        temp = historyTemp[key]
        history[key] = { red: {}, blue: {} }
        red = temp.red
        blue = temp.blue
        parity = [0, 0]
        total = 0
        max = 0
        min = 0
        for (let i = 0, len = red.length; i < len; i++) {
          redItem = red[i]
          historyNum.red[redItem] = historyNum.red[redItem] || 0
          historyNum.red[redItem] += 1
          total += redItem
          if (redItem % 2 !== 0) {
            parity[0] += 1
          } else {
            parity[1] += 1
          }
          history[key].red[redItem] = redItem
          max = max > redItem ? max : redItem
          min = min === 0 ? redItem : (min > redItem ? redItem : min)
        }
        history[key].redRatio = []
        let r = 0
        let reg
        for (let rkey in region) {
          reg = region[rkey]
          reg.forEach((item) => {
            history[key].redRatio[r] = history[key].redRatio[r] || 0
            if (history[key].red[item]) {
              history[key].redRatio[r] += 1
            }
          })
          r++
        }
        redRatioTemp[history[key].redRatio.join(':')] = redRatioTemp[history[key].redRatio.join(':')] || 0
        redRatioTemp[history[key].redRatio.join(':')] += 1
        for (let i = 0, len = blue.length; i < len; i++) {
          // total += blue[i]
          historyNum.blue[blue[i]] = historyNum.blue[blue[i]] || 0
          historyNum.blue[blue[i]] += 1
          history[key].blue[blue[i]] = blue[i]
        }
        history[key].blueRatio = []
        r = 0
        for (let rkey in blueRegion) {
          reg = blueRegion[rkey]
          reg.forEach((item) => {
            history[key].blueRatio[r] = history[key].blueRatio[r] || 0
            if (history[key].blue[item]) {
              history[key].blueRatio[r] += 1
            }
          })
          r++
        }
        blueRatioTemp[history[key].blueRatio.join(':')] = blueRatioTemp[history[key].blueRatio.join(':')] || 0
        blueRatioTemp[history[key].blueRatio.join(':')] += 1
        // 总和
        history[key].total = total
        // 奇偶比
        history[key].parity = parity
        // 跨度
        history[key].span = max - min
        parityTemp[parity.join(':')] = parityTemp[parity.join(':')] || 0
        parityTemp[parity.join(':')] += 1
        if (historyCount >= this.maxHistory) {
          break
        }
      }
      for (let key in redRatioTemp) {
        redRatioTemp[key] = {
          count: redRatioTemp[key],
          ratio: parseFloat(((redRatioTemp[key] / historyCount) * 100).toFixed(1)) + '%'
        }
      }
      for (let key in blueRatioTemp) {
        blueRatioTemp[key] = {
          count: blueRatioTemp[key],
          ratio: parseFloat(((blueRatioTemp[key] / historyCount) * 100).toFixed(1)) + '%'
        }
      }
      for (let key in parityTemp) {
        parityTemp[key] = {
          count: parityTemp[key],
          ratio: parseFloat(((parityTemp[key] / historyCount) * 100).toFixed(1)) + '%'
        }
      }
      this.redRatioTemp = redRatioTemp
      this.blueRatioTemp = blueRatioTemp
      this.parityTemp = parityTemp
      // console.info(redRatioTemp)
      // console.info(blueRatioTemp)
      let historyRatio = { red: {}, blue: {} }
      for (let hrKey in historyNum.red) {
        historyRatio.red[hrKey] = parseFloat(((historyNum.red[hrKey] / historyCount) * 100).toFixed(1)) + '%'
      }
      for (let hrKey in historyNum.blue) {
        historyRatio.blue[hrKey] = parseFloat(((historyNum.blue[hrKey] / historyCount) * 100).toFixed(1)) + '%'
      }
      // console.info(historyRatio.blue)
      // console.info(historyRatio.red)
      this.historyRatio = historyRatio
      this.history = history
      let tempRedRatio = []
      let tempBlueRatio = []
      let count = 0
      for (let key in history) {
        count++
        let redRatio = history[key].redRatio
        redRatio.forEach((red, ridx) => {
          if (red > 0) {
            tempRedRatio[ridx] = tempRedRatio[ridx] || 0
            tempRedRatio[ridx] += 1
          }
        })
        let blueRatio = history[key].blueRatio
        blueRatio.forEach((blue, bidx) => {
          if (blue > 0) {
            tempBlueRatio[bidx] = tempBlueRatio[bidx] || 0
            tempBlueRatio[bidx] += 1
          }
        })
      }
      let redRatio = []
      tempRedRatio.forEach((red, ridx) => {
        redRatio[ridx] = parseFloat(((red / count) * 100).toFixed(1)) + '%'
      })
      let blueRatio = []
      tempBlueRatio.forEach((blue, bidx) => {
        blueRatio[bidx] = parseFloat(((blue / count) * 100).toFixed(1)) + '%'
      })
      this.redRatio = redRatio
      this.blueRatio = blueRatio
    },
    kill (killRegion) {
      let redRegion = this.region
      let blueRegion = this.blueRegion
      let killRedRegion = killRegion.red || []
      let killBlueRegion = killRegion.blue || []
      let redRegionTemp = []
      for (let rkey in redRegion) {
        let redTemp = []
        redRegion[rkey].forEach(rItem => {
          let isKill = false
          killRedRegion.forEach(kill => {
            if (rItem === kill) {
              isKill = true
            }
          })
          if (!isKill) {
            redTemp.push(rItem)
          }
        })
        redRegionTemp.push(redTemp)
      }
      let blueRegionTemp = []
      for (let bkey in blueRegion) {
        let blueTemp = []
        blueRegion[bkey].forEach(bItem => {
          let isKill = false
          killBlueRegion.forEach(kill => {
            if (bItem === kill) {
              isKill = true
            }
          })
          if (!isKill) {
            blueTemp.push(bItem)
          }
        })
        blueRegionTemp.push(blueTemp)
      }

      return { red: redRegionTemp, blue: blueRegionTemp }
    }
  },
  created () {
    this.installHistory()
    let result = this.kill({
      // red: [1, 2, 6, 7, 11, 21, 22, 24, 27, 28, 29, 32],
      // blue: [6, 7, 8, 9, 10, 11, 14, 15, 16]
      red: [4, 5, 6, 8, 9, 10, 11, 13, 16, 19, 21, 22, 24, 26, 28, 29, 31, 32, 33],
      blue: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15]
    })
    console.info(result)
  },
  mounted () { },
  destory () { }
}
</script>
<style scoped lang="less">
.page-main-test {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  .region-wrap {
    width: 100%;
    min-width: 2250px;
    // margin: 0 auto;
    text-align: center;
    position: relative;
    background: #CCC;
    padding: 5px;
    overflow: auto;
    transform: scale(.72);
    .region {
      // opacity: 0.5;
      // display: flex;
      margin-bottom: 1px;
      &.mb-30 {
        margin-bottom: 30px;
      }
      .stage {
        // flex: 0.5;
        display: inline-block;
        width: 120px;
        font-size: 10px;
        line-height: 20px;
        background: #FFF;
        position: relative;
      }
      .region-item {
        // flex: 2;
        // width: 250px;
        display: inline-block;
        margin: 0 1px;
        background: #FFF;
        position: relative;
        .region-item-num {
          display: inline-block;
          text-align: center;
          font-size: 10px;
          line-height: 20px;
          width: 30px;
          margin-right: 1px;
          border-radius: 2px;
        }
        &.red {
          .region-item-num {
            color: #F00;
            &.active {
              color: #FFF;
              background: #F00;
            }
          }
        }
        &.blue {
          // flex: 0.8;
          // width: 200px;
          .region-item-num {
            color: #00F;
            &.active {
              color: #FFF;
              background: #00F;
            }
          }
        }
        &.red-ratio-num {
          .region-item-num {
            color: #F00;
            font-size: 8px;
          }
        }
        &.blue-ratio-num {
          .region-item-num {
            color: #00F;
            font-size: 8px;
          }
        }
        &.total, &.span, &.parity {
          width: 50px;
          line-height: 20px;
          padding: 0 5px;
        }
        &.parity {
          width: 100px;
        }
        &.red-ratio {
          width: 160px;
          padding: 0 5px;
          line-height: 20px;
          // flex: .5;
          text-align: center;
          // justify-content: center;
        }
        &.blue-ratio {
          width: 140px;
          padding: 0 5px;
          line-height: 20px;
          // flex: .5;
          text-align: center;
          // justify-content: center;
        }
      }
      .stage {
        .stage-hd {
          position: absolute;
          top: -30px;
          left: 0;
          right: 0;
          height: 30px;
          line-height: 30px;
          text-align: center;
          font-size: 10px;
          color: #333;
        }
      }
      .region-item{
        .red-hd, .blue-hd, .red-ratio-hd, .blue-ratio-hd {
          position: absolute;
          top: -30px;
          left: 0;
          right: 0;
          height: 30px;
          line-height: 30px;
          text-align: center;
          font-size: 10px;
          color: #333;
        }
        .blue-hd {
          font-size: 8px;
        }
      }
    }
  }
}
</style>

<!--
 * 测试 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date    2020年9月27日10:40:37
-->

<template>
  <div class="page-test-iframe" ref="j-test-iframe"></div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return { }
  },
  component: { },
  methods: {
    toAscii (str) {
      return str.split('').map(function (i) {
        return i.charCodeAt()
      })
    },
    toString (code) {
      let type = typeof (code)
      if (type === 'number' || type === 'string') {
        code = [code]
      }
      let str = ''
      code.map(function (i) {
        str += String.fromCharCode(i)
      })
      return str
    },
    test1 () {
      let times = 1
      let fixed = 8
      // let defStr = '<div class="test">今天是2021年5月24日 星期一</div>'
      let defStr = '<div>重庆</div>'
      let ascii = this.toAscii(defStr)
      console.info(ascii)
      let count = 0
      let len = ascii.length
      let item
      let min = [ascii[0], 0]
      let max = [ascii[0], 0]
      let half = parseInt(len / 2)
      let beforeHalfAll = 0
      let afterHalfAll = 0
      let newAscii = []
      for (let i = 0; i < len; i++) {
        item = ascii[i]
        item = item / times
        newAscii.push(item)
        count += item
        count = parseFloat(count.toFixed(fixed))
        if (i < half) {
          beforeHalfAll += item
        } else {
          afterHalfAll += item
        }
        let minStatus = item > min[0]
        min = [(minStatus ? min[0] : item), minStatus ? min[1] : i]
        let maxStatus = item < max[0]
        max = [(maxStatus ? max[0] : item), maxStatus ? max[1] : i]
        // min = item > min ? min : item
        // max = item < max ? max : item
      }
      console.info(min)
      console.info(max)
      console.info(newAscii)
      let eachCount = function (ary, result) {
        result = result || []
        let a = 0
        for (let i = iCount[0]; i < iCount[1]; i++) {
          a += ary[i]
        }
        a = parseFloat(a.toFixed(fixed))
        result.push(a)
        iCount[1] += 1
        if (ary.length >= iCount[1]) {
          result = eachCount(ary, result)
        }
        return result
      }
      let iCount = [0, 2]
      let result = newAscii
      for (let j = 0; j < len - 1; j++) {
        iCount = [0, 2]
        result = eachCount(result)
        console.info(result)
      }
      console.info(JSON.stringify([[max, min], [len, count], [half, beforeHalfAll], [len - half, afterHalfAll]]))
      console.info('length:' + len + ',sum:' + count + ',min:' + min + ',max:' + max + ',before-half:' + half + ',after-half:' + (len - half))
      // let average = count / len
      // console.info('length:' + len + ',sum:' + count + ',average:' + average + ',min:' + min + ',max:' + max)
      // console.info(ascii.join('|'))
      // let str = this.toString(ascii)
      // console.info((str))
      // let temp = []
      // for (let j = 0; j < len; j++) {
      //   temp.push(j === min[1] ? min[0] : (j === max[1] ? max[0] : 0))
      // }
      // console.info(temp)
      // for (let j = 0; j < 255; j++) {
      //   console.info(this.toString(j))
      // }
    },
    test2 () {
      let defStr = '<div>重庆</div>'
      let ascii = this.toAscii(defStr)
      console.info(ascii)
    }
  },
  created () {
    this.test2()
  },
  mounted () { },
  destory () { }
}
</script>
<style scoped lang="less">
.page-main-test {}
</style>

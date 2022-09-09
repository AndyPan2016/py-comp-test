/**
 * comp-listen-change文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月7日08:38:15
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comp-listen-change',
  // 内部属性
  data () {
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '监听元素大小改变组件(comp-listen-change)文档'
        },
        {
          type: 'paragraph',
          content: '监听元素大小改变。'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '组件标签'
        },
        {
          type: 'code',
          content: [
            '<comp-listen-change></comp-listen-change>'
          ]
        },
        {
          type: 'title',
          grade: 'p3',
          content: '相关属性'
        },
        {
          type: 'table',
          width: '200%',
          table: {
            head: LANG.attrHead,
            body: [
              [
                { text: 'responseLast' },
                {
                  text: '是否只记录最后一次改变事件',
                  textModel: 'scroll',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'true' }, { text: '在短时间内连续改变，只响应最后一次change事件', textModel: 'scroll' }],
                      [{ text: 'false' }, { text: '在短时间内连续改变，每一次改变都响应change事件', textModel: 'scroll' }]
                    ]
                  }
                },
                { text: 'Boolean' },
                { text: '在短暂时间(默认200ms，可通过responseTime自定义)内，连续发生改变，只在最后改变完成后响应change事件。设置为false，每一次改变都会响应', textModel: 'scroll' },
                { text: 'false' },
                { text: 'false' }
              ],
              [
                { text: 'responseTime' },
                { text: '响应延迟时间' },
                { text: 'Number' },
                { text: '响应延迟时间，单位：毫秒[1秒(s) = 1000毫秒(ms)]，即responseLast记录最后一次change的延迟时间', textModel: 'scroll' }
              ]
            ]
          }
        },
        {
          type: 'title',
          grade: 'p3',
          content: '事件'
        },
        {
          type: 'table',
          width: '120%',
          table: {
            head: LANG.eventHead,
            body: [
              [
                { text: 'change' },
                { text: '容器改变事件' },
                {
                  text: '详情',
                  table: {
                    head: LANG.paramHead,
                    body: [
                      [
                        { text: 'e' },
                        { text: 'Event' },
                        { text: 'Event事件对象', textModel: 'scroll' }
                      ],
                      [
                        { text: 'target' },
                        { text: 'Object' },
                        { text: '返回容器和高度，{ el: "主容器", h: "改变后的容器高度" }', textModel: 'scroll' }
                      ]
                    ]
                  }
                }
              ]
            ]
          }
        },
        {
          type: 'title',
          grade: 'p3',
          content: '插槽'
        },
        {
          type: 'table',
          width: '120%',
          table: {
            head: LANG.slotHead,
            body: [
              [{ text: '匿名插槽', table: LANG.slotTypeTable }, { text: '无' }, { text: '图自定义内容，使用时，不需要插槽名称', textModel: 'scroll' }]
            ]
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p4',
          content: '监听元素大小改变'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comp-listen-change',
            '  @change="targetChange">',
            '  <div class="listen-change-wrap">',
            '    <div class="link-btn" @click="add">点击增加内容，以触发容器打开改变</div>',
            '    <div class="link-btn" @click="del">点击删除内容，以触发容器打开改变</div>',
            '    <div v-for="(item, idx) in tempData" :key="idx">{{idx + 1}}内容</div>',
            '  </div>',
            '</comp-listen-change>'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'JavaScript:'
        },
        {
          type: 'code',
          content: [
            'export default {',
            '  data () {',
            '    // 测试数据',
            '    tempData: []',
            '  },',
            '  methods: {',
            '    add () {',
            '      this.tempData.push({})',
            '    },',
            '    del () {',
            '      let len = this.tempData.length',
            '      if (len > 0) {',
            '        this.tempData.pop()',
            '      }',
            '    },',
            '    // 点击事件',
            '    targetClick (e, target) {',
            '      this.$toast.msg("容器高度：" + target.h)',
            '    }',
            '  }',
            '}'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '效果展示',
          slotP: 'slot-display-effect1'
        }
      ],
      tempData: []
    }
  },
  // 对外属性
  props: { },
  // 组件
  components: { },
  // 监听
  watch: { },
  // 内部方法
  methods: {
    add () {
      this.tempData.push({})
    },
    del () {
      let len = this.tempData.length
      if (len > 0) {
        this.tempData.pop()
      }
    },
    targetChange (e, target) {
      this.$toast.msg('容器高度：' + target.h)
    }
  },
  // 开始创建
  created () { },
  // 创建完成
  mounted () { },
  // 销毁前
  beforeDestroy () { },
  // 销毁
  destory () { }
}

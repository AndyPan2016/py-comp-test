/**
 * comm-fixed-block文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月3日12:51:48
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comm-fixed-block',
  // 内部属性
  data () {
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '固定块模块(comm-fixed-block)文档'
        },
        {
          type: 'paragraph',
          content: '固定块，当内容超出，固定块可通过设置跟随内容被撑走或始终固定在一个位置'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '模块标签'
        },
        {
          type: 'code',
          content: [
            '<comm-fixed-block></comm-fixed-block>'
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
                { text: 'fixed' },
                {
                  text: '固定类型',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [
                        { text: 'true' },
                        { text: '上下都固定' }
                      ],
                      [
                        { text: 'false' },
                        { text: '底部被撑走，滚动时，上面也会被滚动带走', textModel: 'scroll' }
                      ],
                      [
                        { text: 'top' },
                        { text: '顶部固定，底部被撑走', textModel: 'scroll' }
                      ]
                    ]
                  }
                },
                { text: 'Boolean|String', textModel: 'scroll' },
                { text: '固定类型，固定块是跟随内容被撑走或始终固定在一个位置，默认为false，被撑走', textModel: 'scroll' },
                { text: 'false' },
                { text: 'top' }
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
                { text: '容器大小改变事件' },
                {
                  text: '详情',
                  table: {
                    head: LANG.paramHead,
                    body: [
                      [
                        { text: 'e' },
                        { text: 'Event' },
                        { text: 'Event对象' }
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
          width: '150%',
          table: {
            head: LANG.slotHead,
            body: [
              [{ text: '具名插槽', table: LANG.slotTypeTable }, { text: 'slot-fixed-block-top' }, { text: '固定块顶部插槽名称', textModel: 'scroll' }],
              [{ text: '匿名插槽', table: LANG.slotTypeTable }, { text: '无' }, { text: '固定块内容部分', textModel: 'scroll' }],
              [{ text: '具名插槽', table: LANG.slotTypeTable }, { text: 'slot-fixed-block' }, { text: '固定块底部插槽名称', textModel: 'scroll' }]
            ]
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '上下都固定'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comm-fixed-block :fixed="true">',
            '  <!-- 头部(固定) -->',
            '  <div slot="slot-fixed-block-top">头部(固定)</div>',
            '  <!-- 内容 -->',
            '  <div class="frame-work-cont">',
            '    <div>内容(超出显示滚动条)</div>',
            '  </div>',
            '  <!-- 底部(固定) -->',
            '  <div slot="slot-fixed-block">底部(固定)</div>',
            '/comm-fixed-block>'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '效果展示',
          slotP: 'slot-display-effect1'
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '底部被撑走，滚动时，上面也会被滚动带走'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comm-fixed-block :fixed="false">',
            '  <!-- 头部 -->',
            '  <div slot="slot-fixed-block-top">头部</div>',
            '  <!-- 内容 -->',
            '  <div class="frame-work-cont">',
            '    <div>内容(点击添加内容看效果)</div>',
            '  </div>',
            '  <!-- 底部 -->',
            '  <div slot="slot-fixed-block">底部</div>',
            '/comm-fixed-block>'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '效果展示',
          slotP: 'slot-display-effect2'
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p2',
          content: '顶部固定，底部被撑走'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comm-fixed-block fixed="top">',
            '  <!-- 头部 -->',
            '  <div slot="slot-fixed-block-top">头部</div>',
            '  <!-- 内容 -->',
            '  <div class="frame-work-cont">',
            '    <div>内容(点击添加内容看效果)</div>',
            '  </div>',
            '  <!-- 底部 -->',
            '  <div slot="slot-fixed-block">底部</div>',
            '/comm-fixed-block>'
          ]
        },
        {
          type: 'title',
          grade: 'p4',
          content: '效果展示',
          slotP: 'slot-display-effect3'
        }
      ],
      // 效果2的数据
      dataEffect2: [
        { text: '内容(点击添加内容看效果)' }
      ],
      // 效果3的数据
      dataEffect3: [
        { text: '内容(点击添加内容看效果)' }
      ]
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
    /**
     * 效果2点击添加数据
     */
    addDataEffect2 () {
      this.dataEffect2.push({ text: '内容(点击添加内容看效果)' })
    },
    /**
     * 效果3点击添加数据
     */
    addDataEffect3 () {
      this.dataEffect3.push({ text: '内容(点击添加内容看效果)' })
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

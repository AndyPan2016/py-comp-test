/**
 * comp-loading文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月6日16:02:37
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comp-loading',
  // 内部属性
  data () {
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '加载中组件(comp-loading)文档'
        },
        {
          type: 'paragraph',
          content: '加载中。'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '组件标签'
        },
        {
          type: 'code',
          content: [
            '<comp-loading></comp-loading>'
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
                { text: 'loadingText' },
                { text: '加载中提示文本' },
                { text: 'String' },
                { text: '加载中提示文本，支持html字符串，也可以使用插槽', textModel: 'scroll' },
                { text: '无' },
                { text: '加载中' }
              ],
              [
                { text: 'colorType' },
                {
                  text: '文字颜色',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'default' }, { text: '灰色' }],
                      [{ text: 'black' }, { text: '黑色' }],
                      [{ text: 'blue' }, { text: '蓝色' }],
                      [{ text: 'white' }, { text: '白色' }]
                    ]
                  }
                },
                { text: 'String' },
                { text: '加载中文字颜色' },
                { text: 'default' },
                { text: 'default' }
              ],
              [
                { text: 'mode' },
                {
                  text: '图标类型',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'default' }, { text: '默认使用图片，如果加载中效果比较短，使用图片作为加载中效果，可能图片还没加载出来，效果就消失了，体验不好', textModel: 'scroll' }],
                      [{ text: 'light-weight' }, { text: '轻量级的，使用样式实现加载中特效，不用加载图片', textModel: 'scroll' }]
                    ]
                  }
                },
                { text: 'String' },
                { text: '加载中图标类型' },
                { text: 'default' },
                { text: 'default' }
              ],
              [
                { text: 'type' },
                {
                  text: '类型',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'min' }, { text: '小型加载中' }],
                      [{ text: 'max' }, { text: '大一点的加载中' }]
                    ]
                  }
                },
                { text: 'String' },
                { text: '展示效果类型' },
                { text: 'min' },
                { text: 'min' }
              ],
              [
                { text: 'loadingIcon' },
                { text: '自定义图标' },
                { text: 'Object' },
                { text: '加载中自定义图标，如果图标为gif自带动画效果，需要设置iconRotate为false', textModel: 'scroll' },
                { text: '无' },
                { text: 'require("icon-loading.png")', textModel: 'scroll' }
              ],
              [
                { text: 'iconRotate' },
                {
                  text: '图标是否旋转',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [{ text: 'true' }, { text: '图标旋转' }],
                      [{ text: 'false' }, { text: '图标不旋转' }]
                    ]
                  }
                },
                { text: 'Boolean' },
                { text: '图标是否旋转，图标是静态的，需要通过动画控制旋转来实现加载中效果(mode为default，使用图标作为加载中效果时有效)', textModel: 'scroll' },
                { text: 'true' },
                { text: 'true' }
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
              [{ text: '匿名插槽', table: LANG.slotTypeTable }, { text: '无' }, { text: '加载中内容', textModel: 'scroll' }]
            ]
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p4',
          content: '加载中'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comp-loading />'
          ]
        },
        {
          type: 'title',
          grade: 'p6',
          content: '效果展示',
          slotP: 'slot-display-effect1'
        },
        {
          type: 'title',
          grade: 'p4',
          content: '加载中，type="max"'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comp-loading type="max" />'
          ]
        },
        {
          type: 'title',
          grade: 'p6',
          content: '效果展示',
          slotP: 'slot-display-effect2'
        },
        {
          type: 'title',
          grade: 'p4',
          content: '加载中，mode="light-weight"'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comp-loading type="max" mode="light-weight" />'
          ]
        },
        {
          type: 'title',
          grade: 'p6',
          content: '效果展示',
          slotP: 'slot-display-effect3'
        },
        {
          type: 'title',
          grade: 'p4',
          content: '加载中，自定义颜色和文字'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comp-loading mode="light-weight" colorType="black" loadingText="">加载中</comp-loading>',
            '<comp-loading mode="light-weight" colorType="blue" loadingText="加载中" />',
            '<comp-loading mode="light-weight" colorType="white" loadingText="加载中" />'
          ]
        },
        {
          type: 'title',
          grade: 'p6',
          content: '效果展示',
          slotP: 'slot-display-effect4'
        },
        {
          type: 'title',
          grade: 'p4',
          content: '自定义图标'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comp-loading :loadingIcon="require("icon-loading.png")" />',
            '<comp-loading :loadingIcon="require("icon-loading.png")" type="max" />'
          ]
        },
        {
          type: 'title',
          grade: 'p6',
          content: '效果展示',
          slotP: 'slot-display-effect5'
        }
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
  methods: { },
  // 开始创建
  created () { },
  // 创建完成
  mounted () { },
  // 销毁前
  beforeDestroy () { },
  // 销毁
  destory () { }
}

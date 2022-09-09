/**
 * comp-thumb文档 js
 * @authors AndyPan (pye-mail@163.com)
 * @date 2022年9月6日16:16:15
 */
import { LANG } from '@/configs/index'

export default {
  // 名称
  name: 'page-doc-comp-thumb',
  // 内部属性
  data () {
    return {
      // 文档
      documentParagraph: [
        {
          type: 'title',
          grade: 'p1',
          content: '图片组件(comp-thumb)文档'
        },
        {
          type: 'paragraph',
          content: '图片，包括图片加载中、加载完成、加载失败、失败展示默认图片。'
        },
        {
          type: 'title',
          grade: 'p3',
          content: '组件标签'
        },
        {
          type: 'code',
          content: [
            '<comp-thumb></comp-thumb>'
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
                { text: 'src' },
                { text: '图片src' },
                { text: 'String | Object' },
                { text: '需要加载的图片' },
                { text: '无' },
                { text: 'reuqire("image.jpg")', textModel: 'scroll' }
              ],
              [
                { text: 'spareSrc' },
                { text: '备用图片src' },
                { text: 'String | Object' },
                { text: 'src加载失败，需要使用的备用占位图片', textModel: 'scroll' },
                { text: '无' },
                { text: 'reuqire("image.jpg")', textModel: 'scroll' }
              ],
              [
                { text: 'alt' },
                { text: 'alt属性' },
                { text: 'String' },
                { text: 'img标签的alt属性', textModel: 'scroll' },
                { text: '无' },
                { text: 'alt' }
              ],
              [
                { text: 'title' },
                { text: 'title属性' },
                { text: 'String' },
                { text: 'img标签的title属性', textModel: 'scroll' },
                { text: '无' },
                { text: 'title' }
              ],
              [
                { text: 'width' },
                { text: '图片宽度' },
                { text: 'String' },
                { text: '缩略图宽度(单位自带，比如:px、%...)', textModel: 'scroll' },
                { text: '无' },
                { text: '30px' }
              ],
              [
                { text: 'height' },
                { text: '图片高度' },
                { text: 'String' },
                { text: '缩略图高度(单位自带，比如:px、%...)', textModel: 'scroll' },
                { text: '无' },
                { text: '30px' }
              ],
              [
                { text: 'borderRadius' },
                { text: '边框圆角值' },
                { text: 'String' },
                { text: '边框圆角值' },
                { text: '3px' },
                { text: '10px' }
              ],
              [
                { text: 'mode' },
                {
                  text: '展示模式',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [
                        { text: 'full' },
                        { text: '直接撑满容器，图片可能变形拉伸', textModel: 'scroll' }
                      ],
                      [
                        { text: 'minFull' },
                        { text: '以图片的最小值撑满容器，超出部分隐藏，图片相对容器居中，容器始终是被图片撑满，且图片不会被拉伸变形', textModel: 'scroll' }
                      ],
                      [
                        { text: 'maxFull' },
                        { text: '以图片的最大值撑满容器，图片相对容器居中，容器可能出现空白，但图片不会被拉伸变形', textModel: 'scroll' }
                      ],
                      [
                        { text: 'auto' },
                        { text: '不受设置的width和height限制，以图片自身的宽高撑满父容器', textModel: 'scroll' }
                      ]
                    ]
                  }
                },
                { text: 'String' },
                { text: '图片展示模式' },
                { text: 'minFull' },
                { text: 'auto' }
              ],
              [
                { text: 'lazyLoad' },
                {
                  text: '懒加载方式',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [
                        { text: 'delay' },
                        { text: '延迟加载，即先创建元素，等待一定时间后再加载', textModel: 'scroll' }
                      ],
                      [
                        { text: 'visible-area' },
                        { text: '可视区域加载，即窗口可见范围内的资源加载', textModel: 'scroll' }
                      ],
                      [
                        { text: 'term' },
                        { text: '条件加载，即满足条件再加载，由使用者自行控制(自行去调用加载方法)', textModel: 'scroll' }
                      ],
                      [
                        { text: 'click-load' },
                        { text: '图片点击加载' }
                      ],
                      [
                        { text: 'false' },
                        { text: '直接加载' }
                      ]
                    ]
                  }
                },
                { text: 'String' },
                { text: '图片懒加载方式' },
                { text: 'false' },
                { text: 'delay' }
              ],
              [
                { text: 'termLoad' },
                { text: '条件加载' },
                { text: 'Boolean' },
                { text: '条件加载，lazyLoad为"term"时，设置termLoad为true会去触发加载', textModel: 'scroll' },
                { text: 'false' },
                { text: 'true' }
              ],
              [
                { text: 'delayTimer' },
                { text: '延迟时间' },
                { text: 'Number' },
                { text: '延迟加载的延迟时间(单位：毫秒)，只有当lazyLoad="delay"时，delayTimer属性有效', textModel: 'scroll' },
                { text: '200' },
                { text: '1000' }
              ],
              [
                { text: 'scrollTarget' },
                { text: '滚动元素' },
                { text: 'Element' },
                { text: '当lazyLoad="visible-area"时，需要指定页面内容滚动的元素', textModel: 'scroll' },
                { text: 'document.body' },
                { text: '-' }
              ],
              [
                { text: 'placeholderType', textModel: 'scroll' },
                {
                  text: '占位图类型',
                  table: {
                    head: LANG.avaHead,
                    body: [
                      [
                        { text: 'default' },
                        { text: '默认' }
                      ],
                      [
                        { text: 'text' },
                        { text: '文字占位' }
                      ],
                      [
                        { text: 'heart' },
                        { text: '心形心电图' }
                      ]
                    ]
                  }
                },
                { text: 'String' },
                { text: '占位图类型' },
                { text: 'default' },
                { text: 'heart' }
              ],
              [
                { text: 'placeholderText', textModel: 'scroll' },
                { text: '占位图的文本' },
                { text: 'String' },
                { text: '占位图的文本' },
                { text: '图片的(width * height)' },
                { text: '假装有图' }
              ],
              [
                { text: 'placeholderTextColor', textModel: 'scroll' },
                { text: '占位图文本颜色' },
                { text: 'String' },
                { text: '占位图文本颜色' },
                { text: '#FFF' },
                { text: '#FFF' }
              ]
            ]
          }
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p4',
          content: '正方形图片-正常效果'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comp-thumb :src="require("image.jpg")" width="100px" height="100px" />'
          ]
        },
        {
          type: 'title',
          grade: 'p6',
          content: '效果预览',
          slotP: 'slot-display-effect1'
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p4',
          content: '正方形图片在一个非正方形容器显示'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comp-thumb :src="require("image.jpg")" width="100px" height="50px" />',
            '<comp-thumb :src="require("image.jpg")" width="50px" height="100px" />'
          ]
        },
        {
          type: 'title',
          grade: 'p6',
          content: '效果预览',
          slotP: 'slot-display-effect2'
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p4',
          content: '占位图'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comp-thumb :src="null" width="100px" height="100px" />',
            '<comp-thumb :src="null" width="100px" height="100px" placeholderType="text" />',
            '<comp-thumb :src="null" width="100px" height="100px" placeholderType="text" placeholderText="占位图" />',
            '<comp-thumb :src="null" width="100px" height="100px" placeholderType="heart" />'
          ]
        },
        {
          type: 'title',
          grade: 'p6',
          content: '效果预览',
          slotP: 'slot-display-effect3'
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p4',
          content: '备用图'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comp-thumb :src="不存在的图.jpg" :spareSrc="require("存在的图.jpg")" width="100px" height="100px" />'
          ]
        },
        {
          type: 'title',
          grade: 'p6',
          content: '效果预览',
          slotP: 'slot-display-effect4'
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p4',
          content: '加载失败'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comp-thumb :src="不存在的图.jpg" width="100px" height="100px" />'
          ]
        },
        {
          type: 'title',
          grade: 'p6',
          content: '效果预览',
          slotP: 'slot-display-effect5'
        },
        { type: 'space' },
        {
          type: 'title',
          grade: 'p4',
          content: '点击加载'
        },
        {
          type: 'title',
          grade: 'p4',
          content: 'Html:'
        },
        {
          type: 'code',
          content: [
            '<comp-thumb :src="require("image.jpg")" lazyLoad="click-load" width="100px" height="100px" />'
          ]
        },
        {
          type: 'title',
          grade: 'p6',
          content: '效果预览',
          slotP: 'slot-display-effect6'
        }
        // { type: 'space' },
        // {
        //   type: 'title',
        //   grade: 'p4',
        //   content: '可见区域加载'
        // },
        // {
        //   type: 'title',
        //   grade: 'p4',
        //   content: 'Html:'
        // },
        // {
        //   type: 'code',
        //   content: [
        //     '<comp-thumb :src="require("image.jpg")" lazyLoad="visible-area" width="100px" height="100px" />'
        //   ]
        // },
        // {
        //   type: 'title',
        //   grade: 'p6',
        //   content: '效果预览',
        //   slotP: 'slot-display-effect7'
        // }
      ],
      thumbSrc: 'http://youcheyunoss.oss-cn-shenzhen.aliyuncs.com/pro/20220516/1220262906931048448.jpg',
      scrollTarget: null
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
  mounted () {
    this.scrollTarget = this.$refs['ref-visible-area']
  },
  // 销毁前
  beforeDestroy () { },
  // 销毁
  destory () { }
}

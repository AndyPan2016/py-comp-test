/**
 * 获取图片颜色集合
 * @authors AndyPan (pye-mail@163.com)
 * @date    2020年11月18日17:49:06
 */

/**
 * RGB值填充
 * @param {*} r
 * @param {*} g
 * @param {*} b
 */
const getHex = (r, g, b) => {
  r = r.toString(16)
  g = g.toString(16)
  b = b.toString(16)
  // 补0
  r = r.length === 1 ? '0' + r : r
  g = g.length === 1 ? '0' + g : g
  b = b.length === 1 ? '0' + b : b
  var hex = r + g + b
  // 简化处理,如 FFEEDD 可以写为 FED
  if (r.slice(0, 1) === r.slice(1, 1) &&
    g.slice(0, 1) === g.slice(1, 1) &&
    b.slice(0, 1) === b.slice(1, 1)) {
    hex = r.slice(0, 1) + g.slice(0, 1) + b.slice(0, 1)
  }
  return '#' + hex
}

/**
 * 自定义图片元素加载完成
 * @param {*} image
 */
const customImageLoaded = (image, callBack) => {
  let canvas = document.createElement('canvas')
  // document.body.appendChild(canvas)
  let context = canvas.getContext('2d')
  let imageW = image.offsetWidth
  let imageH = image.offsetHeight
  canvas.width = imageW
  canvas.height = imageH
  context.drawImage(image, 0, 0, imageW, imageH)
  let imageData = context.getImageData(0, 0, imageW, imageH)
  let dataList = imageData.data || []
  let listLength = dataList.length
  // let arrbox = []
  // 所有颜色集合
  let colorGroup = {}
  // 最多的颜色值
  let maxColor = { color: '#AAA', max: 0, index: 0 }
  for (let i = 0; i < listLength; i++) {
    // 每四个元素为一个像素数据 r,g,b,alpha
    if (i % 4 === 0) {
      // 横坐标
      // var x = i / 4 % imageW + 1
      // 纵坐标
      // var y = Math.floor(i / 4 / imageW) + 1
      // alpha 值（透明度）
      let alpha = Math.round(dataList[i + 3] / 255 * 100) / 100
      let dl1 = dataList[i]
      let dl2 = dataList[i + 1]
      let dl3 = dataList[i + 2]
      let dl4 = dataList[i + 3]
      let color = dl4 === 255 ? getHex(dl1, dl2, dl3) : (alpha > 0 ? 'rgba(' + dl1 + ', ' + dl2 + ', ' + dl3 + ', ' + alpha + ')' : '')
      // 累加相同的颜色值，通过累加次数最大的值找出图片中占比最大的颜色值
      colorGroup[color] = (colorGroup[color] || 0) + 1
      // 找出颜色值累加次数最多的值，该颜色值在图片中所占比例为最大
      if (maxColor.max < colorGroup[color]) {
        maxColor.max = colorGroup[color]
        maxColor.color = color
        maxColor.index = i
      }
      // 如果同一个颜色占比超过一半，直接终止遍历，节省性能
      if (maxColor.max > (listLength / 2)) {
        break
      }
    }
  }
  // document.body.removeChild(canvas)
  if (callBack) {
    callBack()
  }
  // { colors: 所有颜色集合, maxColor: 颜色值最多的颜色 }
  return { colors: colorGroup, maxColor: maxColor.color }
}

/**
 * 获取域名
 * @param {*} url
 */
const getLocationHost = (url) => {
  let href = url || window.location.href
  let http = href.split('//')
  let host = http[1].split('/')[0]
  return http[0] + '//' + host
}

export default {
  /**
   * 获取图片颜色集合及图片最多的颜色值
   * @param {*} options 参数选项
   * {
   *   image: 图片元素对象(用于直接取页面某个图片元素的颜色)
   *   imageUrl: 图片链接(用于生成图片，并取颜色)
   *   imageScale: 图片比例(0~1之间)，值越大，取得颜色越精细，计算出来图片颜色占比最大值越准确，但消耗性能越大，也就是越卡（默认为0.05）
   *   callBack: 获取到颜色值后的回调
   * }
   */
  getImageColor (options) {
    let image = options.image
    let imageUrl = options.imageUrl
    let defaultImageScale = 0.05
    let imageScale = (options.imageScale || defaultImageScale)
    // 限制图片比例范围(大于1，设置为等于1；小于0，设置为默认defaultImageScale)
    imageScale = imageScale > 1 ? 1 : imageScale < 0 ? defaultImageScale : imageScale
    if (imageUrl) {
      image = document.createElement('img')
      // 判断域名是否相同，是否需要设置跨域
      let imageHost = getLocationHost(imageUrl)
      let thisHost = getLocationHost()
      if (imageHost !== thisHost) {
        image.crossOrigin = 'Anonymous'
      }
      // 加一个时间戳，可以解决跨域显示不出图片问题
      image.src = imageUrl + '?' + new Date().getTime()
      // 因为图片要添加到DOM才可以获取到图片数据，防止图片影响正常页面，设置样式
      image.style.opacity = 0
      image.style.position = 'fixed'
      // 将图片添加到DOM，不然获取不到图片数据
      document.body.appendChild(image)
      // 报错，直接返回空
      image.onerror = function () {
        // 完成后删除图片
        document.body.removeChild(image)
        // 报错也需要执行回调，保证外部正常流程不中断
        if (options.callBack) {
          options.callBack({})
        }
      }
      image.onload = function () {
        // 重置图片宽度和高度
        let imageW = image.offsetWidth
        let imageH = image.offsetHeight
        image.width = imageW * imageScale
        image.height = imageH * imageScale
        let result = {}
        try {
          result = customImageLoaded(image)
        } catch (err) {
          // 可能图片跨域或其他报错
          console.info(err)
        }
        // 完成后删除图片
        document.body.removeChild(image)
        // 图片跨域或逻辑出差也需要执行回调，保证外部正常流程不中断
        if (options.callBack) {
          options.callBack(result)
        }
      }
    } else if (image) {
      let result = customImageLoaded(image)
      if (options.callBack) {
        options.callBack(result)
      }
      return result
    }
  }
}

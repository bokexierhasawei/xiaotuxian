// 获取全局对象实例中的属性和方法
const { safeArea, navigateTo, navigateBack } = getApp()

Page({
  data: {
    safeArea,
    tabs: [
      {text: '商品', offset: 0},
      {text: '评价', offset: 0},
      {text: '详情', offset: 0},
      {text: '推荐', offset: 0}
    ],
    anchorIndex: 0,
    scrollTop: 0,
    layer: '',
    halfDialogVisible: false,
    swiperCurrentIndex: 0
  },

  onReady() {

    // 计算节点相对于窗口的位置
    wx.createSelectorQuery().selectAll('.anchor').boundingClientRect((rects) => {
      let tabs = this.data.tabs
      rects.forEach((rect, index) => {
        tabs[index].offset = rect.top
      })
      this.setData({tabs})
    }).exec()

    // 计算自定义导航栏的高度
    wx.createSelectorQuery().select('.navbar').boundingClientRect((rect) => {
      this.navBarHeight = rect.height
    }).exec()

    // 监听元素间相关状态
    this.intersectionObserver()

    // 动画时间线
    const scrollTimeline = {
      scrollSource: "#scrollView",
      timeRange: 500,
      startScrollOffset: 0,
      endScrollOffset: 85
    }

    // 创建帧动画
    this.animate('.navbar', [
      {backgroundColor: '#fff0'},
      {backgroundColor: '#fff'}
    ], 500, scrollTimeline)

    this.animate('.back', [
      {backgroundColor: 'rgba(0, 0, 0, 0.4)', left: '10px', color: '#fff', offset: 0},
      {backgroundColor: 'rgba(0, 0, 0, 0.12)', left: '7px', color: '#fff',  offset: 0.7},
      {backgroundColor: 'rgba(0, 0, 0, 0)', left: '6px', color: '#191919', offset: 1}
    ], 500, scrollTimeline)

    this.animate('.tabs, .search', [
      {opacity: 0},
      {opacity: 1}
    ], 500, scrollTimeline)
  },

  onLoad() {
    // 挂载全局对象公共方法
    this.navigateTo = navigateTo,
    this.navigateBack = navigateBack
  },

  onUnload() {
    this.disconnect()
  },

  showHalfDialog(ev) {
    // 动态获取 halfDialog 展示的内容
    let {layer} = ev.mark

    this.setData({
      layer,
      halfDialogVisible: true
    })
  },

  hideHalfDialog() {
    this.setData({
      halfDialogVisible: false
    })
  },

  // 监测元素相交状态
  intersectionObserver() {
    this.disconnect()

    this._observer = wx.createIntersectionObserver(this, {
      observeAll: true
    })

    this._observer
      .relativeTo('.navbar')
      .observe('.anchor', ({
        dataset: {anchorIndex},
        boundingClientRect: {top}
      }) => {
        if(top < 0) return
        this.setData({anchorIndex})
      })
  },

  disconnect() {
    if(this._observer) this._observer.disconnect()
  },

  scrollTo(ev) {
    // 停止监听元素相关状态
    this.disconnect()
    
    // 获取滚动位置及索引值
    let {anchorOffset: scrollTop, anchorIndex} = ev.target.dataset
    scrollTop -= this.navBarHeight
    
    // 页面滚动
    this.setData({scrollTop, anchorIndex})
  },

  dragEnd() {
    this.intersectionObserver()
  },

  scrollToUpper() {
    this.setData({anchorIndex: 0})
  },

  addCart() {
    wx.showToast({
      title: '添加成功!'
    })
  }
})
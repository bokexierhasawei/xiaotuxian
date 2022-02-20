
Page({
  data: {
    swiperIndex: 0,
    adjustIndex: 0,
  },

  changeTab(ev) {
    // 获取当前 swiperItem 的索引值值
    let {swiperIndex} = ev.target.dataset
    swiperIndex = ev.detail.currentItemId || swiperIndex
    // 切换不同的 swiperItem
    this.setData({swiperIndex})
  },

  onFinish(ev) {
    // 控制索引值改变的顺序
    this.setData({
      adjustIndex: this.data.swiperIndex
    })
  },

  navigateTo(ev) {
    let {url} = ev.mark
    wx.navigateTo({url})
  }

})
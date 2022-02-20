
const { safeArea, platform, navigateBack, navigateTo } = getApp()

Page({
  data: {
    showHalfDialog: false,
    platform,
    safeArea
  },

  onLoad() {
    this.navigateBack = navigateBack
    this.navigateTo = navigateTo
  },

  onReady() {
    this.animate('.navbar .title', [
      {opacity: 0},
      {opacity: 1}
    ], 600, {
      scrollSource: "#scrollView",
      timeRange: 600,
      startScrollOffset: 0,
      endScrollOffset: 120
    })
  },

  cancelOrder() {
    this.setData({showHalfDialog: true})
  },

  cancelHalfDialog() {
    this.setData({showHalfDialog: false})
  }
})
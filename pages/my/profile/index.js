
const { safeArea, navigateBack } = getApp()

Page({
  data: {
    safeArea
  },

  onLoad() {
    this.navigateBack = navigateBack
  },

  chooseImage() {
    wx.chooseImage()
  }
})
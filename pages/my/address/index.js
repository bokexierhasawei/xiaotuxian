Page({
  data: {
    slideButtons: [
      {
        text: '删除',
        extClass: 'slideview-delete-button'
      }
    ],
  },
  createAddress() {
    wx.navigateTo({
      url: '/pages/my/address/edit/index'
    })
  }
})
Page({
  
  navigateTo(ev) {
    let {url} = ev.mark
    wx.navigateTo({url})
  }
})
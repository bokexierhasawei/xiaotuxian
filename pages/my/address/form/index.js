Page({
  data: {

  },

  onLoad(params) {
    let {id} = params

    !id && wx.setNavigationBarTitle({
      title: '新建地址'
    })
  }
})
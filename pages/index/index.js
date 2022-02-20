
// 获取全局实例中的方法或属性
const { safeArea, navigateTo, http } = getApp()

Page({
  data: {
    safeArea,
    bannerData: [
      {
        bannerPath: "http://static.botue.com/erabbit/static/uploads/slider_1.jpg"
      },
      {
        bannerPath: "http://static.botue.com/erabbit/static/uploads/slider_2.jpg"
      },
      {
        bannerPath: "http://static.botue.com/erabbit/static/uploads/slider_3.jpg"
      },
      {
        bannerPath: "http://static.botue.com/erabbit/static/uploads/slider_4.jpg"
      },
      {
        bannerPath: "http://static.botue.com/erabbit/static/uploads/slider_5.jpg"
      },
    ],
    hasMore: true
  },

  nextVersion() {
    wx.showToast({title: '等下一个版本哦', icon: 'none'})
  },

  scanCode() {
    wx.scanCode()
  },

  async onLoad() {
    // 挂载路由跳转方法
    this.navigateTo = navigateTo

    // 调用 http 函数，测试其功能是否可用
    // const p1 = http({
    //   url: '/goods',
    //   method: 'get',
    //   data: {
    //     id: 1608018
    //   }
    // })

    const p1 = http.get('/goods', {id: 1608018})

    // console.log(p1)

    // const p2 = http({
    //   url: '/home/preference/mutli',
    //   method: 'get'
    // })

    const p2 = http.get('/home/preference/mutli')

    // console.log(p2)

    const res = await http.all(p1, p2)
    // 响应结果
    console.log(res)

  }
  
})
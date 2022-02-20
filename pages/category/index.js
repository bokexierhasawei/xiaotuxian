
// 获取全局实例中封装的方法或属性
const {navigateTo} = getApp()

Page({
  data: {
    bannerData: [
      {
        bannerPath: 'http://static.botue.com/erabbit/static/uploads/banner_1.jpg'
      },
      {
        bannerPath: 'http://static.botue.com/erabbit/static/uploads/banner_1.jpg'
      },
      {
        bannerPath: 'http://static.botue.com/erabbit/static/uploads/banner_1.jpg'
      },
      {
        bannerPath: 'http://static.botue.com/erabbit/static/uploads/banner_1.jpg'
      },
    ]
  },

  onLoad() {
    // 挂载路由跳转的方法
    this.navigateTo = navigateTo
  }
})
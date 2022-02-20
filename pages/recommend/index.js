Page({
  data: {
    // 页面临时数据
    meta: {
      1: {
        title: '特惠推荐',
        coverPath: 'https://static.botue.com/erabbit/static/uploads/recommend_1.jpg',
        tabs: ['价格', '折扣', '筛选']
      },
      2: {
        title: '爆款推荐',
        coverPath: 'https://static.botue.com/erabbit/static/uploads/recommend_2.jpg',
        tabs: ['24小时热搜', '热销总榜', '人气周榜']
      },
      3: {
        title: '一站买全',
        coverPath: 'https://static.botue.com/erabbit/static/uploads/recommend_3.jpg',
        tabs: ['搞定熊孩子', '家里不凌乱', '让音质更出众']
      },
      5: {
        title: '新鲜好物',
        coverPath: 'https://static.botue.com/erabbit/static/uploads/recommend_4.jpg',
        tabs: ['抢先尝新', '新品预告']
      }
    },
  },

  onLoad({ type }) {
    // 读取地址参数
    this.setData({type})

    // 动态更新导航栏标题
    wx.setNavigationBarTitle({
      title: this.data.meta[type].title,
    })
  }
})
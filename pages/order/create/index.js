const computedBehavior = require('miniprogram-computed').behavior

Page({
  behaviors: [computedBehavior],
  data: {
    halfDialogVisible: false,
    layerIndex: 0,
    layerData: [
      {
        title: '配送时间',
        currentIndex: 0,
        list: [
          {
            id: 1,
            text: '时间不限 (周一至周日)'
          },
          {
            id: 2,
            text: '工作日送 (周一至周五)'
          },
          {
            id: 3,
            text: '周末配送 (周六至周日)'
          },
        ]
      },
      {
        title: '支付方式',
        currentIndex: 0,
        list: [
          {
            id: 1,
            text: '在线支付'
          },
          {
            id: 2,
            text: '货到付款'
          }
        ]
      }
    ]
  },

  computed: {
    layer({layerData, layerIndex}) {
      return layerData[layerIndex]
    },

    payment({layerData}) {
      let {currentIndex} = layerData[1]
      return layerData[1].list[currentIndex]
    },

    delivery({layerData}) {
      let {currentIndex} = layerData[0]
      return layerData[0].list[currentIndex]
    }
  },

  onChange(ev) {
    this.setData({
      'layer.currentIndex': ev.detail.defaultIndex,
      halfDialogVisible: false
    })
  },

  showHalfDialog(ev) {
    let {index} = ev.mark
    this.setData({
      layerIndex: index,
      halfDialogVisible: true
    })
  },

  navigateTo(ev) {
    let {url} = ev.mark
    wx.navigateTo({url})
  },

  goPayment() {
    wx.navigateTo({
      url: '/pages/order/payment/index',
    })
  }
})
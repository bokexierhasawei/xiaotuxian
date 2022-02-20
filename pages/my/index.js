
const { safeArea } = getApp()

Page({
  data: {
    safeArea,
    collects: [
      {
        path: '/static/uploads/goods_big_1.jpg',
        type: 1
      },
      {
        path: '/static/uploads/topic_1.jpg',
        type: 2
      },
      {
        path: '/static/uploads/brand_logo_1.jpg',
        type: 3
      },
      {
        path: '/static/uploads/goods_big_2.jpg',
        type: 1
      },
      {
        path: '/static/uploads/brand_logo_2.jpg',
        type: 3
      },
      {
        path: '/static/uploads/topic_2.jpg',
        type: 2
      },
      {
        path: '/static/uploads/brand_logo_3.jpg',
        type: 3
      },
      {
        path: '/static/uploads/goods_big_1.jpg',
        type: 1
      },
    ]
  },

  onLoad() {

  },

  onReady() {
    this.animate('.profile', [
      {opacity: 1},
      {opacity: 0}
    ], 500, {
      scrollSource: "#scrollView",
      timeRange: 500,
      startScrollOffset: 0,
      endScrollOffset: 85
    })

    this.animate('.navbar', [
      {top: '0'},
      {top: '-30px'}
    ], 500, {
      scrollSource: "#scrollView",
      timeRange: 500,
      startScrollOffset: 0,
      endScrollOffset: 85
    })

    this.animate('.navbar .title', [
      {opacity: 0},
      {opacity: 1}
    ], 500, {
      scrollSource: "#scrollView",
      timeRange: 500,
      startScrollOffset: 85,
      endScrollOffset: 100
    })
  }
})

Component({
  options: {
    // virtualHost: true
  },

  properties: {

  },

  data: {
    slideButtons: [
      {
        text: '移入收藏',
        extClass: 'slideview-collect-button'
      },
      {
        text: '删除',
        extClass: 'slideview-delete-button'
      }
    ],

    carts: [
      {
        thumb: 'http://static.botue.com/erabbit/static/uploads/goods_big_5.jpg',
        name: '康尔贝 非接触式红外体温仪 领券立减30元 婴儿级材质 测温',
        type: '粉色 红外体温计',
        price: 266,
        quantity: 1,
        checked: true
      },
      {
        thumb: 'http://static.botue.com/erabbit/static/uploads/goods_big_6.jpg',
        name: '康尔贝 非接触式红外体温仪 领券立减30元 婴儿级材质 测温',
        type: '粉色 红外体温计',
        price: 266,
        quantity: 1,
        checked: false
      },
      {
        thumb: 'http://static.botue.com/erabbit/static/uploads/goods_big_7.jpg',
        name: '康尔贝 非接触式红外体温仪 领券立减30元 婴儿级材质 测温',
        type: '粉色 红外体温计',
        price: 266,
        quantity: 1,
        checked: true
      },   
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goPay() {
      wx.navigateTo({
        url: '/pages/order/index'
      })
    },
    checkToggle(ev) {

      let index = ev.mark.index

      let serialize = ['carts[', index, '].checked'].join('')

      console.log(this.data.carts[index].checked)

      this.setData({
        [serialize]: !this.data.carts[index].checked
      })
    }
  }
})



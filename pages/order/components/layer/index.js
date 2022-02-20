const computedBehavior = require('miniprogram-computed').behavior

Component({
  behaviors: [computedBehavior],
  properties: {
    title: String,
    items: Array,
    defaultIndex: Number
  },

  data: {

  },

  watch: {
    defaultIndex(index) {

    }
  },

  lifetimes: {
    attached() {
      
    }
  },

  methods: {
    onChange(ev) {
      // 切换选中状态
      this._currentIndex = ev.mark.index
      this.setData({
        defaultIndex: this._currentIndex
      })
    },

    onConfirm() {
      let index = this._currentIndex
      // 回传选中的数据
      this.triggerEvent('change', {...this.data.items[index], defaultIndex: index})
    }
  },
})

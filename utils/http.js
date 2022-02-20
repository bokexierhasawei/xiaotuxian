
// 定义函数，返回一个 Promise，还得要发起一个请求
function http (params) {

  // 解构获取默认的参数（baseURL）
  const { baseURL } = http.defaults

  // 将服务器地址与路径进行拼接
  params.url = baseURL + params.url

  return new Promise((reslove, reject) => {
    // console.log('哈哈...')

    // 调用请求拦截器
    params = http.interceptors.request(params)

    // 请求之前调用 API 提示用户去等待请求
    http.queue.length === 0 && wx.showLoading({
      title: '正在加载...',
      mask: true
    })

    // 成功的回调函数，变更 Promise 成功的状态
    params.success = (res) => {
      // console.log(res)

      // 调用拦截器
      reslove(http.interceptors.response(res))
    }

    // 失败的回调函数，变更 Promise 失败的状态
    params.fail = (err) => {
      reject(err)
    }

    // 等待请求完成后会调用 complete 回调函数
    params.complete = () => {
      // console.log('请求结束了...')
      // 调用 API 隐藏掉加载提示框

      // 当请求结束后，将数组 http.queue 长度减 1
      http.queue.pop()

      // 当所有请求都结束后，http.queue 长度会再次为 0
      http.queue.length === 0 && wx.hideLoading()
    }

    // 向数组 http.queue 中追加新的单元
    // 有几次请求数组就会有几个单元
    http.queue.push('loading')

    // 发起请求
    wx.request(params)
  })

}

// 定义数组记录请求的数量
http.queue = []

// 定义 defaults 对象，用来存 http 的默认参数
http.defaults = {
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net'
}

// 定义拦截器
http.interceptors = {

  // 请求拦截器
  request (params) {
    // console.log(params)

    // 在内部处理数据
    return Object.assign({}, params, {
      header: {
        author: 'itheima'
      }
    })
  },

  // 响应拦截器
  response ({data: {result}}) {
    // console.log(result)

    return result
  }

}

// 并发处理
http.all = (...promises) => {
  return Promise.all(promises)
}

// 快捷方法（专门用于 get 请求）
http.get = (url, data) => {
  return http({
    url,
    method: 'get',
    data
  })
}

// 快捷方法（专门用于 post 请求）
http.post = (url, data) => {
  return http({
    url,
    method: 'post',
    data
  })
}

// 导出 http 函数
export default http
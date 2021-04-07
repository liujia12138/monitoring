const {
  params2Obj
} = require('@/utils')

const Mock = require('mockjs')

// 
const admin = require('./admin')
const user = require('./user')


const mocks = [
  ...admin,
  ...user
]

const reqWrap = (response) => {
  return (options) => {
    // options: 请求相关的参数
    let result = {}
    if (response instanceof Function) {
      const {
        body,
        type,
        url
      } = options;
      result = response({
        method: type,
        body: JSON.parse(body),
        query: params2Obj(url)//url上的参数
      })
    } else {
      result = response
    }
    // 模拟假数据
    return Mock.mock(result)

  }
}

const mock = () => {
  mocks.forEach(_mock => {
    const {
      url,
      type,
      response
    } = _mock;
    // Mock.mock 拦截ajax用的
    Mock.mock(new RegExp(url+ "*?"), type || 'get', reqWrap(response))
  })
}

module.exports = mock;
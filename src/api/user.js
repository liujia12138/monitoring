import request from '@/utils/request'

const apis = {
  'login': '/user/login',
  'userInfo': '/user/info'
}

export function userLogin(data) {
  return request({
    url: apis.login,
    method: 'post',
    data
  })
}

export function getUserInfo(params){
  return request({
    url: apis.userInfo,
    method: 'get',
    params,
  })
}
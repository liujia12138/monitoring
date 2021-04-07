import request from '../utils/request'

const apis = {
  userListAll: '/admin/user/list',
  addUser: '/admin/user/add',
  menuListAll: '/admin/menu/menuAll'
}

export default apis;

export function getMenuAll(query){
  return request({
    url: '/admin/menu/menuAll',
    method: 'get',
    params: query
  })
}

// 用户列表
export function getUserList(query){
  return request({
    url: apis.userListAll,
    method: 'get',
    params:query
  })
}

// 新增用户
export function addUser(data){
  return request({
    url: apis.addUser,
    method: 'post',
    data
  })
}
import request from '@/utils/request'

const apis = {
  'menuList': '/system/menu/listAll',
}

export default apis;

export function getMenuList(params){
  return request({
    url: apis.menuList,
    method: 'get',
    params: params
  })
}


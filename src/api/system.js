import request from '@/utils/request'

const apis = {
  'menuList': '/system/menu/listAll',//菜单管理页table，包含按钮
}

export default apis;

export function getMenuList(params){
  return request({
    url: apis.menuList,
    method: 'get',
    params: params
  })
}


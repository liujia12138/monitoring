module.exports = [
  {
    url: '/system/menu/listAll',
    type: 'get',
    response: ()=>{
      return {
        code: 200,
        data: {
          list: [{
            id: '1',
            path: '/system',
            name: '系统设置',
            icon: '',
            hidden: false,
            children: [{
              id: '11',
              name: 'menuManage',
              icon: '',
              path: '/menuManage',
            }]
          }, {
            id: '2',
            name: '权限管理',
            icon: '',
            path: '/admin',
            hidden: false,
            children: [{
              id: '21',
              name: '角色管理',
              icon: '',
              path: '/admin/roles',
              hidden: false,
            }, {
              id: '22',
              name: '用户管理',
              icon: '',
              path: '/userManage',
              hidden: false,
            }]
          }, {
            id: '3',
            name: '应用管理',
            icon: '',
            path: '/application',
            hidden: false,
            children: [{
              id: '31',
              name: '应用列表',
              icon: '',
              path: '/list',
              hidden: false,
            }]
          }]
        }
      }
    }
  }
]
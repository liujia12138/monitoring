const Mock = require('mockjs')
const Random = Mock.Random;

// 自定义random函数
Random.extend({
  // 自定义函数名称
  // 不要用箭头函数，this会有问题
  'userRole': function () {
    const roles = [{
      id: '1',
      name: '普通'
    }, {
      id: '2',
      name: '管理员'
    }, {
      id: '3',
      name: '超级管理员'
    }]
    return this.pick(roles).name
  },
  'userState': function () {
    const status = ['正常', '禁用']
    return this.pick(status)
  }
})
module.exports = [
  // 菜单
  {
    url: '/admin/menu/menuAll',
    type: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          list: [{
            id: '1',
            path: '/system',
            name: 'system',
            meta: {
              title: '系统设置',
              isTab: false
            },
            icon: '',
            hidden: false,
            children: [{
              id: '11',
              name: 'menuManage',
              meta: {
                title: '菜单管理',
                isTab: true
              },
              icon: '',
              path: '/menuManage',
            }]
          }, {
            id: '2',
            name: 'admin',
            meta: {
              title: '权限管理',
              isTab: true,
            },
            icon: '',
            path: '/admin',
            hidden: false,
            children: [{
              id: '21',
              name: 'roles',
              meta: {
                title: '角色管理',
                isTab: true,
              },
              icon: '',
              path: '/admin/roles',
              hidden: false,
            }, {
              id: '22',
              name: 'userManage',
              meta: {
                title: '用户管理',
                isTab: true,
              },
              icon: '',
              path: '/userManage',
              hidden: false,
            }]
          }, {
            id: '3',
            name: 'application',
            meta: {
              title: '应用管理',
              isTab: false,
            },
            icon: '',
            path: '/application',
            hidden: false,
            children: [{
              id: '31',
              name: 'list',
              meta: {
                title: '应用列表',
                isTab: true,
              },
              icon: '',
              path: '/list',
              hidden: false,
            }]
          }]
        }
      }
    }
  },
  // 用户列表
  {
    url: '/admin/user/list',
    type: 'get',
    response: (config) => {
      const {
        page = 1, size = 10
      } = config.query;
      let i = 0,
        list = []
      while (i < size) {
        list.push(Mock.mock({
          // 'id': '@increment(1)',//自增数字
          'id': i, //自增数字
          'name': '@cword(2,10)', //随机生成汉字
          'avatar': '@dataImage(84x84)',
          'role': '@userRole()',
          'status|1': true,
          'createTime': '@date("yyyy-MM-dd")', //生成对应尺寸的图片
          'creator': 'admin',
          'remark': '@cword(4,20)'
        }))
        i++;
      }
      return {
        code: 200,
        data: {
          list,
          page: page,
          total: 260
        }
      }
    }
  },

  // 新增用户
  {
    url: '/admin/user/add',
    type: 'post',
    response: () => {
      return {
        code: 200,
        data: '',
        msg: '添加成功'
      }
    }
  }
]
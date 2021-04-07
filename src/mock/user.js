const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

module.exports = [
  // 登录
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const {
        username
      } = config.body
      const token = tokens[username]

      if (!token) {
        return {
          code: 60204,
          message: '账号或密码有误'
        }
      }

      return {
        code: 200,
        data: token
      }
    }
  },

  // 用户信息
  {
    url: '/user/info',
    response: (config) => {
      const token = config.query.token;
      if (users[token]) {
        return {
          code: 200,
          data: {
            ...users['admin-token']
          }
        }
      }else{
        return {
          code: 20202,
          message: '账号不存在'
        }
      }

    }
  }
]
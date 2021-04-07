import router from '@/router'
import cookie from 'js-cookie'
import store from '@/store'

// 权限：
// 登录
// token获取menu列表，渲染侧边栏，
// router-beforeEach

router.beforeEach(async (to, from, next) => {
  const hasToken = cookie.get('user-token');
  if (hasToken) {
    // 登录页
    if (to.path === '/login') {
      next()
    } else {
      // 获取用户角色
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      if (hasRoles) {
        next()
      } else {
        const {
          roles
        } = await store.dispatch('user/getUserInfo')
        console.log(roles)
        // 获取动态路由

        await store.dispatch('permission/generateRoutes')
        next()
      }
    }
  }
})
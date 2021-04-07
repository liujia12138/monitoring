import {
  getMenuAll
} from '@/api/admin'
import {
  constantRoutes
} from '@/router'
import router from '@/router'

export default {
  namespaced: true,
  state: {
    routes: [],
    addRoutes: []
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes;
      state.routes = routes
      router.addRoutes(routes)
    }
  },
  actions: {
    // 生成动态路由
    generateRoutes({
      commit
    }) {
      return new Promise((resolve) => {
        getMenuAll().then(res => {
          console.log(constantRoutes)
          const accessedRoutes = filterAsyncRouter(res.data.list)
        
          commit('SET_ROUTES', accessedRoutes)
          resolve(accessedRoutes)
        })
      })
    }
  }
}

const filterAsyncRouter = (routes) => {
  return routes.filter(route => {
    if (route.path) {
      route.component = loadView(route.path)
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true;
  })
}

// 加载view
const loadView = (path) => {
  return (resolve) => require([`@/views${path}`, resolve])
}
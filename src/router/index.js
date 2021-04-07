import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [{
    path: '/',
    component: Layout,
    children: [{
      path: 'home',
      component: (resolve) => require(['@/views/home'], resolve)
    }, {
      path: 'admin/userManage',
      component: (resolve) => require(['@/views/admin/userManage'], resolve)
    }, {
      path: '404',
      component: (resolve) => require(['@/views/404'], resolve)
    }, ]
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },

  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  mode: 'hash',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

export default router;
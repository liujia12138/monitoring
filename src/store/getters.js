const getters = {
  token: state => state.user.token,
  routes: state => state.permission.routes,
  permissionMenu: state => state.permission.routes,
}

export default getters;
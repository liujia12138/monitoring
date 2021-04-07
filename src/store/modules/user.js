import {userLogin, getUserInfo } from '../../api/user'
import cookies from 'js-cookie'

export default {
  namespaced: true,
  state: {
    token: cookies.get('user-token'),
    roles: []
  },
  mutations:{
    'SET_TOKEN':(state, token)=>{
      state.token = token;
      cookies.set('user-token', token)
    },
    'SET_ROLES': (state, roles) => {
      state.roles = roles;
    }
  },
  actions: {
    login({commit}, form){
      return new Promise(resolve=>{
        userLogin(form).then(({data:data}) => {
          commit('SET_TOKEN', data.token)
          resolve();
        })
      })
    },
    getUserInfo({commit, state}){
      return new Promise(resolve =>{
        getUserInfo({token:state.token}).then(({data: data})=>{
          commit('SET_ROLES', data.roles)
          resolve(data)
        })
      })
    }
  }
}
import * as types from '../types.js'
import * as userApi from '../../api/user.js'
import { Toast } from 'mint-ui'

const state = {
  userList: [],
  preLoginUser: ''
}

const actions = {
  getUserList({commit}) {
    userApi.getUserList().then((userList) => {
      commit(types.USERLIST_RECEIVE,userList)
    })
  },
  updatePreLoginUser({commit},user) {
    commit(types.UPDATE_PRE_LOGIN_USER,user)
  }
}

const getters = {
  preLoginUserInfo(state) {
    return {
      name: state.preLoginUser,
      pwd: ''
    }
  }
}

const mutations = {
  [types.ADD_USER](state, user ) {
    if( !state.userList.find(val => val===user.name) ){
      state.userList.push(user.name)
    }
  },
  [types.USERLIST_RECEIVE](state,userList) {
    state.userList = userList
  },
  [types.UPDATE_PRE_LOGIN_USER](state,user) {
    state.preLoginUser = user
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
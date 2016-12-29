import * as types from '../types.js'
import { Toast } from 'mint-ui'
import * as userApi from '../../api/user.js'

const state = {
  userInfo: {
    name: '',
    age: '',
    email: '',
    hobby: '',
    type: '',
    id: null
  }
}

const getters = {
  tName: function(state) {
    if( state.userInfo.id ) {
      return state.userInfo.type + '::' + state.userInfo.name
    }
  }
}

const mutations = {
  [types.UPDATE_USER_INFO_SUCCESS](state, userInfo) {
    state.userInfo = { ...state.userInfo, ...userInfo }
  },

  [types.UPDATE_USER_INFO_FAIL](state) {
    // state.userInfo = { ...state.userInfo }
  }
}

const actions = {
  updateUserInfo({commit},userInfo) {
    //执行异步操作或者window.localStorage.setItem(),成功之后在commit mutations
    userApi.updateUserInfo(userInfo).then(() => {
      Toast('修改成功')
      commit(types.UPDATE_USER_INFO_SUCCESS, userInfo)
    })
    .catch(() => {
      Toast('修改失败')
      commit(types.UPDATE_USER_INFO_FAIL)
    })
  }
  
}

export default {
  state,
  getters,
  actions,
  mutations
}
import * as types from '../types.js'
import { Toast } from 'mint-ui'

const state = {
  userInfo: {
    name: 'umbrellazwl',
    age: '18',
    email: 'zwltest@163.com',
    hobby: 'girl',
    type: 'A',
    id: 0
  }
}

const getters = {
  tName: state => state.userInfo.type + '::' + state.userInfo.name
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
    const ran = Math.random()

    if( userInfo.name === 'umbrellazwl' ) {
      //修改成功---方便测试
      Toast('成功')
      commit(types.UPDATE_USER_INFO_SUCCESS, userInfo)
    }else if( userInfo.name === 'umbrella' ) {
      //修改失败---方便测试
      commit(types.UPDATE_USER_INFO_FAIL)
    }else {
      if (ran < 0.7) {
        //70%会修改成功
      }else {
        //30%会修改失败
      }
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
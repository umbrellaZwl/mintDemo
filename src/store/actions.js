import * as types from './types.js'
import * as userApi from '../api/user.js'
import { Toast } from 'mint-ui'

export const login = ({commit},user) => {
  return userApi.login(user).then((userInfo) => {
    commit(types.UPDATE_USER_INFO_SUCCESS,userInfo)
    commit(types.ADD_USER,user)
  })
}

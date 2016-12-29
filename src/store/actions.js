import * as types from './types.js'
import * as userApi from '../api/user.js'
import { Toast } from 'mint-ui'
import Vm  from '../main.js'

export const login = ({commit},user) => {
  userApi.login(user).then((userInfo) => {
    Toast('登录成功')
    commit(types.UPDATE_USER_INFO_SUCCESS,userInfo)
    commit(types.ADD_USER,user)
    Vm._router.push('/user')
  })
}

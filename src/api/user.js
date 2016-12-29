export const updateUserInfo = (userInfo) => {
  const ran = Math.random()
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if( userInfo.name === 'umbrellazwl' ) {
        //修改成功---方便测试
        resolve()
      }else if( userInfo.name === 'umbrella' ) {
        //修改失败---方便测试
        reject()
      }else {
        if (ran < 0.8) {
          //70%会修改成功
          resolve()
        }else {
          //30%会修改失败
          reject()
        }
      }
      
    },1000)
  })
}

export const login = (user) => {
  let defUser = {
    age: 20,
    email: user.name + '@163.com',
    hobby: "girl",
    id: 1,
    name: "",
    type: "A"
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({...defUser,...user})
    },1000)
  })
}

export const getUserList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['umbrellazwl','umbrellaz'])
    },1000)
  })
}
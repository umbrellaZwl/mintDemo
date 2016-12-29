<template>
  <div class="page page-user">
    <mt-header title="用户信息">
      <router-link to="/home" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button slot="right" @click.native="togHideUser">切换用户</mt-button>
    </mt-header>

    <div class="page-content">
      <div class="page-inner page-user-inner">
        <user-list :isHide="isHide"></user-list>
        <mt-button type="primary" size="small">姓名：</mt-button>
        <input type="text" :value="userInfo.name" ref="name" :disabled="!userInfo.id">
        <mt-button type="primary" size="small">年龄：</mt-button>
        <input type="number" :value="userInfo.age" ref="age" :disabled="!userInfo.id">
        <mt-button type="primary" size="small">邮箱：</mt-button>
        <input type="email" :value="userInfo.email" ref="email" :disabled="!userInfo.id">
        <mt-button type="primary" size="small">爱好：</mt-button>
        <input type="text" :value="userInfo.hobby" ref="hobby" :disabled="!userInfo.id">
        <mt-button type="primary" size="large" @click.native="updateUserInfo" :disabled="!userInfo.id">提交</mt-button>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .page-user-inner {
    padding-top: 20px;
    input {
      box-sizing: border-box;
      width: 100%;
      margin: 8px 0;
      height: 30px;
      border-radius: 3px;
      padding: 2px 8px;
      appearance: none;
      border: 1px solid #aaa;
      &:focus {
        outline: none;
      }
    } 
  }
</style>
<script>
import { mapState } from 'vuex'
import userList from '../components/user-list.vue'

export default {
  data() {
    return {
      isHide: true
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo.userInfo
    })
  },
  methods: {
    updateUserInfo() {
      let userInfo = {
        ...this.userInfo,
        ...{
          name: this.$refs.name.value,
          age: this.$refs.age.value,
          email: this.$refs.email.value,
          hobby: this.$refs.hobby.value
        }
      }

      this.$store.dispatch('updateUserInfo',userInfo)
    },
    togHideUser() {
      this.isHide = !this.isHide
    }
  },
  components: {
    userList
  }
}
</script>
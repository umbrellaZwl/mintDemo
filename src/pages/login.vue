<template>
  <div class="page page-login">
    <mt-header :title="title">
      <router-link to="/home" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="page-content">
      <div class="page-inner page-login-inner">
        <mt-button type="primary" size="small">姓名：</mt-button>
        <input type="text" v-model="userInfo.name" ref="name">
        <mt-button type="primary" size="small">密码：</mt-button>
        <input type="password" v-model="userInfo.pwd" ref="pwd">
        <mt-button type="primary" size="large" @click.native="login" :disabled="!userInfo.name && !userInfo.pwd">登录</mt-button>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .page-login-inner {
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
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      title: '登录'
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.userInfo).then( (() => {
        this.$toast('登录成功')
        this.$router.push('/user')
      }).bind(this))
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'preLoginUserInfo'
    })
  }
}
</script>
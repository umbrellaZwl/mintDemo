<template>
  <div class="page page-user">
    <mt-header :title="title">
      <router-link to="/home" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="page-content">
      <div class="page-inner page-user-inner">
        <mt-button type="primary" size="small">姓名：</mt-button>
        <input type="text" :value="userInfo.name" ref="name">
        <mt-button type="primary" size="small">年龄：</mt-button>
        <input type="number" :value="userInfo.age" ref="age">
        <mt-button type="primary" size="small">邮箱：</mt-button>
        <input type="email" :value="userInfo.email" ref="email">
        <mt-button type="primary" size="small">爱好：</mt-button>
        <input type="text" :value="userInfo.hobby" ref="hobby">
        <mt-button type="primary" size="large" @click.native="updateUserInfo">提交</mt-button>
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

export default {
  data() {
    return {
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
    }
  }
}
</script>
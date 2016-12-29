<template>
  <div class="user-list" :class="{'hide': isHide}" v-cloak>
    <ul v-if="userList.length !== 0">
      <li v-for="user in userList" @click.stop="togUser(user)">{{user}}</li>
    </ul>
    <div v-if="userList.length === 0">暂无用户</div>
  </div>
</template>
<style lang="less">
  .user-list {
    position: absolute;
    right: 0px;
    top: 0px;
    background-color: #6B6767;
    padding: 5px 10px;
    color: #2D0505;
    &.hide {
      display: none;
    }
    li {
      margin: 4px 0;
    }
  }
</style>
<script>
import { mapState } from 'vuex'

export default {
  props: ['isHide'],
  computed: {
    ...mapState({
      userList: state => state.loginUserList.userList
    })
  },
  methods: {
    togUser(user) {
      this.$store.dispatch('updatePreLoginUser',user)
      console.log(this.$route)
      this.$router.push('/login')
    }
  }
}
</script>
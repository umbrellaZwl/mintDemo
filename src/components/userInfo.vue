<template>
  <div class="uinfo-box">
    <div v-if="!tName">请先登录--></div>
    <router-link class="uinfo-link" to="/user" v-if="tName">{{tName}}</router-link>
  </div>
</template>
<style lang="less" scoped>
.uinfo-box {
  border-bottom: 2px solid red;
  padding-bottom: 15px;
  padding-left: 30px;
  margin-bottom: 40px;
  font-size: 16px;
  font-weight: bold;
  .uinfo-link {
    color: #333;
  }
}
</style>
<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo.userInfo
    }),
    ...mapGetters([
      'tName'
    ])
  }
}
</script>
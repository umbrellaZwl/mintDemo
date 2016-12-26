<template>
  <div class="page page-toast">
    <mt-header :title="title">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="page-content">
      <div class="page-inner page-toast-inner">
        <router-link to="/progress" slot="left">
          <mt-button icon="back">跳转到progress</mt-button>
        </router-link>
        <mt-button @click.native="openToast" size="large" type="danger">点击弹出 Toast</mt-button>
        <mt-button @click.native="openToastWithIcon" size="large" type="primary">点击弹出带有 icon 的 Toast</mt-button>
        <mt-button @click.native="openBottomToast" size="large" type="default">自定义 Toast 位置</mt-button>
      </div>
    </div>
  </div>
</template>
<style lang="less" scope>
.page-inner {
  padding: 0 20px;
  button {
    margin-top: 20px;
  }
}

.mint-toast-icon {
  font-size: 46px;
}
</style>
<script>

import {Toast} from 'mint-ui'

export default {
  data(){
    return {
      title: this.$route.name
    }
  },
  methods: {
    openToast(){
      Toast('提示信息');
    },
    openToastWithIcon(){
      let toastIntance = Toast({
        message: '操作成功',
        iconClass: 'mintui mintui-success',
        duration: 100000
      });

      setTimeout(() => {
        toastIntance.close()
      },5000)
    },
    openBottomToast(){
      Toast({
        message: '提示',
        position: 'bottom',
        duration: 2000
      });
    },
    goBack() {
      this.$router.back()
    }
  },
  beforeRouteEnter(to, from ,next) {
    // console.log(to)
    // console.log(from)
    next()
  }
}
</script>
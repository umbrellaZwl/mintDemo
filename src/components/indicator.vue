<template>
  <div class="page page-indicator">
    <mt-header :title="title">
      <router-link to="/home" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="page-content">
      <div class="page-inner page-indicator-inner">
        <mt-button @click.native="openIndicator" size="large" type="danger">点击弹出 Indicator</mt-button>
        <mt-button @click.native="openIndicatorWithSpinner" size="large" type="primary">可配置 spinner</mt-button>
        <mt-button @click.native="openIndicatorWithText" size="large">点击弹出带有文字的 Indicator</mt-button>
      </div>
    </div>
    
  </div>
</template>
<style lang="less">
button {
  margin-top: 20px;
}
</style>
<script>
import {Indicator} from 'mint-ui'

export default {
  data(){
    return {
      title: this.$route.name
    }
  },

  beforeDestroy(){
    Indicator.close();
  },

  methods: {
    openIndicator(){
      Indicator.open();
      setTimeout(() => Indicator.close(), 2000);
    },
    openIndicatorWithSpinner(){
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      setTimeout(() => Indicator.close(), 2000);
    },
    openIndicatorWithText() {
      Indicator.open('加载中...');
      setTimeout(() => Indicator.close(), 2000);
    }
  }
}
</script>

<template>
  <div class="page-progress">
    <mt-header :title="title">
      <router-link to="/home" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="page-content">
      <div class="page-inner page-progress-inner">
        <input type="button" value="返回" @click="$router.back()">
        <mt-cell title="默认">
          <mt-progress></mt-progress>
        </mt-cell>
        <mt-cell title="设置 value">
          <mt-progress :value="20"></mt-progress>
        </mt-cell>
        <mt-cell title="左右文字">
          <mt-progress :value="40">
            <div slot="start">0%</div>
            <div slot="end">100%</div>
          </mt-progress>
        </mt-cell>
        <mt-cell title="定义线宽">
          <mt-progress :value="60" :bar-height="5"></mt-progress>
        </mt-cell>
        <div class="page-progress-wrapper">
          <mt-button size="large" type="primary" @click.native="uploadFile">上传文件</mt-button>
          <transition name="progress-fade">
            <mt-progress :value="value" :bar-height="20" v-if="progressVisible">
              <div slot="end">{{ value }}%</div>
            </mt-progress>
          </transition>
        </div>
      </div>
    </div>

  </div>
</template>
<style lang="less">
.page-progress {
  .mint-cell-value {
    flex: 2.5;
    position: relative;
    top: -20px;
  }
}
.mt-progress {
  width: 100%;
  position: absolute;
  top: 5px;
}

.page-progress-wrapper {
  padding: 0 10px;
  margin-top: 50px;
  .mt-progress {
    position: relative;
  }
}

.progress-fade-enter-active, .progress-leave-fade-active {
  transition: opacity .3s;
}

.progress-fade-enter, .progress-fade-leave {
  opacity: 0;
}

</style>
<script>
import {Toast} from 'mint-ui'
export default {
  data(){
    return {
      title: this.$route.name,
      progressVisible: false,
      value: 0,
      uploading: false,
      timer: null
    }
  },

  watch: {
    value(val) {
      if (val >= 100) {
        this.uploading = false;
        this.progressVisible = false;
        setTimeout(() => Toast({ message: '上传成功', position: 'bottom', duration: 1000 }), 200);
        clearTimeout(this.timer);
      }
    }
  },

  methods: {
    uploadFile() {
      if(!this.uploading) {
        this.value = 0;
        this.progressVisible = true;
        this.uploading = true;
        this.timer = setInterval(() => this.value++, 10);
      }
    },
    goBack() {
      this.$router.back()
    }
  }
}
</script>
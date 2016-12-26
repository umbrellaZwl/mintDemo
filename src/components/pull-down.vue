<template>
  <div class="page page-pull-down">
    <mt-header :title="title">
      <router-link to="/home" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="page-content">
      <div class="page-inner page-pull-down-inner">
        <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
          <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
            <ul class="page-loadmore-list">
              <li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
            </ul>
            <div slot="top" class="mint-loadmore-top">
              <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
              <span v-show="topStatus === 'loading'">
                <mt-spinner type="snake"></mt-spinner>
              </span>
            </div>
          </mt-loadmore>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.page-loadmore-listitem {
  display: block;
  margin: 0 20px;
  height: 50px;
  line-height: 50px;
  border-bottom: solid 1px red;
  text-align: center;
  &:first-child {
    border-top: solid 1px red;
  }
}
.mint-loadmore-top {
  span {
    display: inline-block;
    transition: .2s linear;
    vertical-align: middle;
    &.is-rotate {
      transform: rotate(180deg)
    }
  }
}
  
</style>
<script>
export default {
  data(){
    return {
      title: this.$route.name,
      topStatus: '',
      list: [],
      wrapperHeight: 0
    }
  },

  created() {
    for (let i = 1; i <= 20; i++) {
      this.list.push(i);
    }
  },

  mounted() {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
  },

  methods: {
    loadTop() {
      setTimeout(() => {
        let firstValue = this.list[0];
        for (let i = 1; i <= 10; i++) {
          this.list.unshift(firstValue - i);
        }
        this.$refs.loadmore.onTopLoaded();
      }, 1500);
    },

    handleTopChange(status) {
      this.topStatus = status
    }
  }
}
</script>
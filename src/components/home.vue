<template>
  <div class="page-home">
    <mt-header :title="title">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="page-content tabbar-abs" ref="homeC">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="交互">
          <Demo-list :navs="groups[0]"></Demo-list>
        </mt-tab-container-item>
        <mt-tab-container-item id="样式">
          <Demo-list :navs="groups[1]"></Demo-list>
        </mt-tab-container-item>
        <mt-tab-container-item id="表单">
          <Demo-list :navs="groups[2]"></Demo-list>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="交互">
        <img slot="icon" src="../assets/img/js-logo.png">
        交互
      </mt-tab-item>
      <mt-tab-item id="样式">
        <img slot="icon" src="../assets/img/css-logo.png">
        样式
      </mt-tab-item>
      <mt-tab-item id="表单">
        <img slot="icon" src="../assets/img/form-logo.png">
        表单
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import DemoList from './Demolist.vue'
import { groups } from '../route.js'

let iScrollTop = 0;

let home = {
  name: 'home',
  data () {
    return {
      selected: '交互',
      groups: groups
    }
  },
  computed: {
    title() {
      return this.selected+'组件'
    }
  },
  components: {
    DemoList
  },
  mounted() {
  },
  updated() {
  },
  watch: {
    selected(newtype,oldtype){
      this.$refs.homeC.scrollTop = 0
    }
  },
  beforeRouteLeave(to, from, next) {
    iScrollTop = this.$refs.homeC.scrollTop
    next()
  },
  beforeRouteEnter(to, from, next) {
    let _this = this
    next(_this => {
      _this.$refs.homeC.scrollTop = iScrollTop
    })
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}

export default home
</script>

<style lang="less">
.page-content {
  flex: 1;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  left: 0;
  top: 40px;
  bottom: 55px;
  overflow: auto;
  background-color: #fafafa;
   &.tabbar-abs {
    padding-bottom: 0px;
  }
   &.header-abs {
    padding-top: 40px;
  }
}
</style>

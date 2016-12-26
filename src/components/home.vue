<template>
  <div class="page page-home">
    <panel :show-panel="isShowPanel" @closePanel="closePanel"></panel>
    <mt-header :title="title">
      <mt-button slot="left" @click.native="showPanel">
        <img src="../assets/img/expand.png" alt="" height="20" width="20" slot="icon">
      </mt-button>
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
import DemoList from './demolist.vue'
import { groups } from '../route.js'


let iScrollTop = 0;

let home = {
  name: 'home',
  data () {
    return {
      selected: '交互',
      groups: groups,
      isShowPanel: false
    }
  },
  computed: {
    title() {
      return this.selected+'组件'
    }
  },
  components: {
    DemoList,
    panel: require('./panel.vue')
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
    },
    showPanel() {
      this.isShowPanel = !this.isShowPanel;
    },
    closePanel() {
      this.isShowPanel = !this.isShowPanel;
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
  bottom: 0px;
  overflow: auto;
  background-color: #fafafa;
}
</style>

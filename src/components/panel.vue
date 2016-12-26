<template>
  <div class="panel">
    <div class="panel-mask" :class="{'show': isShow}" @click="closePanel"></div>
    <div class="panel-wp" :class="{'show': isShow}">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/toast"><i class="indexicon icon-toast"></i>toast</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/indicator"><i class="indexicon icon-indicator"></i>indicator</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/pull-down"><i class="indexicon icon-pull-down"></i>pull-down</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/search"><i class="indexicon icon-searchbar"></i>search</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/field"><i class="indexicon icon-field"></i>field</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/progress"><i class="indexicon icon-progress"></i>progress</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cell-swipe"><i class="indexicon icon-cell"></i>cell-swipe</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less">
  .panel {
    .panel-mask {
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      top: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, .4);
      z-index: 5;
      display: none;
      &.show {
        display: block;
      }
    }
    .panel-wp {
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 200px;
      background-color: #fff;
      z-index: 6;
      padding-left: 15px;
      padding-top: 20px;
      transform: translate3D(-200px, 0, 0);
      transition: all .5s;
      &.show {
        transform: translate3D(0, 0, 0);
      }
      .nav-item + .nav-item {
        margin-top: 15px;
      }
      .indexicon {
        font-size: 22px;
        color: #26a2ff;
        display: inline-block;
        width: 30px;
        vertical-align: middle;
      }
      a {
        color: #26a2ff;
        font-size: 18px;
        text-decoration: none;
      }
    }
  }
</style>
<script>

export default {
  data(){
    return {
    }
  },
  computed: {
    isShow(){
      return this.showPanel
    }
  },
  props: {
    'showPanel': {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closePanel() {
      this.$emit('closePanel')
    }
  }
}
</script>

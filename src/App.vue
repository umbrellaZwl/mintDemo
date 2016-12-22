<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>  
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      transitionName: 'fade'
    }
  }
}
</script>

<style lang="less">
* {
  margin: 0; padding: 0;
}
html, body {
  overflow: hidden;
  height: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s ease-out;
}
.fade-enter, .fade-leave-active, .fade-leave {
  /* opacity: 0; */
  transform: translate3d(320px, 0, 0);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fafafa;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

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

<style>
* {
  margin: 0; padding: 0;
}
html, body {
  overflow: hidden;
  height: 100%;
}

.fade-enter-active {
  transition: all .5s;
}
.fade-enter {
  opacity: 0;
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

.page {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>

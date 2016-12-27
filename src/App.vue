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
      transitionName: 'slide-right'
    }
  },
  watch: {
    '$route' (to, from) {
      let toArr = to.path.split('/')
      let toLen = (toArr.filter((item)=>{
        return item !== '';
      })).length;

      let fromArr = from.path.split('/')
      let fromLen = (fromArr.filter((item)=>{
        return item !== '';
      })).length;
      
      this.transitionName = toLen < fromLen ? 'slide-left' : 'slide-right';
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

.slide-left-enter-active {
  transition: all .6s ease-out;
}
.slide-left-enter {
  transform: translate3d(320px, 0, 0);
}

.slide-right-enter-active {
  transition: all .6s ease-out;
}
.slide-right-enter {
  transform: translate3d(-320px, 0, 0);
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

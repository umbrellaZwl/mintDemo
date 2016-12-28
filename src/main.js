import Vue from 'vue'
import MintUI from 'mint-ui'
import './assets/font/iconfont.css';
import 'mint-ui/lib/style.css'
import './less/index.less'
import './css/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './route'
import store from './store/index.js'


Vue.use(MintUI)
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})

/*let iScrollTop = 0
router.beforeEach((to, from, next) => {
  if (to.path !== '/home') {
    iScrollTop = document.querySelector('.page-content').scrollTop;
  }
  next()
})

router.afterEach((to, from) => {
  console.log(to)
  document.title = to.name;
  if (to.path !== '/home') {
    // iScrollTop = 0;
  }else {
    Vue.nextTick(() => {
      document.querySelector('.page-content').scrollTop = iScrollTop;
    })
  }
})*/

import NavConfig from './nav.config.json'

let route = {
  route: []
}

route.route.push({
  name: 'Toast',
  path: '/toast',
  component: require('./components/toast.vue')
})

route.route.push({
  name: 'Indicator',
  path: '/indicator',
  component: require('./components/indicator.vue')
})

route.route.push({
  name: 'Pull down',
  path: '/pull-down',
  component: require('./components/pull-down.vue')
})

route.route.push({
  name: 'Progress',
  path: '/progress',
  component: require('./components/progress.vue')
})

route.route.push({
  name: 'Cell Swipe',
  path: '/cell-swipe',
  component: require('./components/cell-swipe.vue')
})

route.route.push({
  name: 'Search',
  path: '/search',
  component: require('./components/search.vue')
})

route.route.push({
  name: 'Field',
  path: '/field',
  component: require('./components/field.vue')
})

route.route.push({
  name: 'Demolist',
  path: '/demos',
  component: require('./components/demolist.vue')
})

route.route.push({
  name: 'Home',
  path: '/',
  component: require('./components/home.vue')
})

route.route.push({
  name: 'User',
  path: '/user',
  component: require('./pages/user.vue')
})

route.route.push({
  path: '*',
  redirect: '/'
})

export const groups = NavConfig
export default route.route
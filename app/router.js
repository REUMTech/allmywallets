import Vue from 'vue'
import Router from 'vue-router'
import AppHome from './components/app-home.vue'
import AppAddWallet from './components/app-add-wallet.vue'
import AppSettings from './components/app-settings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/add',
      name: 'add',
      component: AppAddWallet
    },
    {
      path: '/stats',
      name: 'stats',
      component: AppHome
    },
    {
      path: '/settings',
      name: 'settings',
      component: AppSettings
    },
    {
      path: '/contribute',
      name: 'contribute',
      component: AppHome
    }
  ]
})

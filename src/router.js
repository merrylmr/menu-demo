import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home.vue'
import helloWord from '@/components/Helloword.vue'
import FullPage from '@/components/FullPage.vue'
import Html2Canvas from '@/components/html2Canvas.vue'
import Popover from '@/components/Popover.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/fullpage',
      name: 'fullpage',
      component: FullPage
    },
    {
      path: 'hello',
      name: 'hello',
      component: helloWord
    },
    {
      path: '/html',
      name: 'html',
      component: Html2Canvas
    },
    {
      path: '/popover',
      name: 'popover',
      component: Popover
    },
  ]
})

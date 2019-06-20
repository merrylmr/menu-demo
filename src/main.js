import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'

import router from './router.js'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'

// import 'fullpage.js/scrollHorizontally.min' // Optional. When using fullpage extensions
Vue.use(VueFullPage);
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})

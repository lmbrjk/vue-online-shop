import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/styles/styles.scss'
import firstSymbolFilter from '@/filters/firstSymbol.filter'
import Loader from '@/components/app/Loader.vue'

Vue.config.productionTip = false

Vue.component('Loader', Loader)
Vue.filter('firstSymbolFilter', firstSymbolFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

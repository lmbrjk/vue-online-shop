import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/styles/styles.scss'
import firstSymbolFilter from '@/filters/firstSymbol.filter'
import currencyFilter from '@/filters/currency.filter'
import phoneDirective from '@/directives/phone.directive'
import Loader from '@/components/app/Loader.vue'

Vue.config.productionTip = false

Vue.component('Loader', Loader)
Vue.filter('firstSymbolFilter', firstSymbolFilter)
Vue.filter('currencyFilter', currencyFilter)
Vue.directive('phone', phoneDirective)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

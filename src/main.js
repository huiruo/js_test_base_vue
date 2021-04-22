import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'vant/lib/index.css'

// Vue.use(vant)
Vue.use(Toast)

Vue.config.productionTip = false
// Vue.prototype.$axios = axios
Vue.prototype.axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import './element'
// import plugin from '../packages/index'

// Vue.use(plugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

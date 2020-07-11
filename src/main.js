import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Custom directives
import './directives'

// IMPORT PLUGINS
import './plugins'

// CSS global
import './assets/css/main.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    // Nuestra función
    init () {
      store.dispatch('oauth/getToken')
    }
  },
  // Hook created
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')

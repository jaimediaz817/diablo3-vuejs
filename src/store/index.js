import Vue from 'vue'
import Vuex from 'vuex'

// importar Oauth
import oauth from './modules/oauth'
import loading from './modules/loading'
import error from './modules/error'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loading,
    oauth,
    error
  }
})

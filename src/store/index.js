import Vue from 'vue'
import Vuex from 'vuex'

import NS_search from './../components/Body/Header/Search/store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    http: Vue.prototype.$http
  },
  modules: {
    NS_search
  }
})




import Vue from 'vue'
import Vuex from 'vuex'

import NS_search from './../components/Body/Header/Search/store';
import NS_movies from './../components/MoviesGrid/store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    http: Vue.prototype.$http,
    moviesAPI: Vue.prototype.$moviesAPI
  },
  modules: {
    NS_search,
    NS_movies
  }
})




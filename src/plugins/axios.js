import Vue from 'vue';
import axios from 'axios';

import cfg from '@./../../config/config.env';

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'http://localhost:3000/api'
        });

        Vue.prototype.$moviesAPI = axios.create({
            baseURL: 'https://api.themoviedb.org/3'
            , headers: {
                'Authorization': `Bearer ${cfg.security.api.movies.token}`,
            }
        });

    }
})
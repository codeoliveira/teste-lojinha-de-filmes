export default {

    namespaced: true,

    state: {
        movies: {}
    },
    getters: {},
    mutations: {
        setState(state, payload) {
            state.movies = payload;
        }
    },
    actions: {



        getState(context) {
            return context.state;
        },

        async getAll(context, payload) {

            const http = context.rootState.moviesAPI;
            let cfg = {};
            cfg.path = '/movie/now_playing';
            cfg.path += '?page=1';
            cfg.path += '&language=pt-BR';

            let path = `${cfg.path}`;
            let res = await http.get(path).then(res => {
                let estado = {
                    ...context.state.movies,
                    data: res.data
                }
                context.commit('setState', estado);
            })
            return context.state;
        },

    }

}

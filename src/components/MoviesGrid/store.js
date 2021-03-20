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
        }

    }

}

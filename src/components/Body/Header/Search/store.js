export default {

    namespaced: true,

    state: {
        search: {
            form: {}
        }
    },
    getters: {},
    mutations: {
        setState(state, payload) {
            state.search = payload;
        }
    },
    actions: {



        getState(context) {
            return context.state;
        }

    }

}

import { mapActions } from 'vuex';

export default {

    methods: {

        ...mapActions('NS_movies', ['getState', 'getAll']),


        async getMovies() {

            await this.getAll();
            return true;

        }


    }



}
import { MoviesGridItem } from './MoviesGridItem';


export default {

    props: ['args'],

    mounted() {

        this.buildMovieList();

    },

    data() {
        return {
            movieListHTML: ''
        }
    },


    computed: {

        'movies': {
            get() {
                return this.$store.state.NS_movies.movies;
            },
            set(novoEstado) {
                this.$store.commit('NS_movies/setState', novoEstado);
            }
        }
    },


    methods: {

        async buildMovieList() {

            let html = [];
            let body = await this.buildList();
            html.push(body);
            html.push(this.buildScrollButtons());

            this.movieListHTML = html;

        },


        async buildList() {


            await this.getMovies();

            let movies = this.movies.data.results;
            let total = movies.length;

            let html = [];
            for (let i = 0; i < total; i++) {
                html.push(this.buildListItem(movies[i]));
            }

            return html;

        },


        buildListItem(movie) {

            console.log('movie', movie);
            return <MoviesGridItem movie={movie}></MoviesGridItem>

        },


        buildScrollButtons() {

            let html = [];

            html.push(<div class="MoviesGridButton">

                <div class="left">
                    <i class="fa fa-arrow-left icon"></i>
                </div>

            </div>)


            html.push(<div class="MoviesGridButton">

                <div class="right">
                    <i class="fa fa-arrow-right icon"></i>
                </div>

            </div>)

            return html;

        }

    }

}
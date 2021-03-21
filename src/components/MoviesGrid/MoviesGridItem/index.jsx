import Vue from 'vue';

import './style.scss';

import MoviesGridController from './controller';

const MoviesGridItem = Vue.extend({

    mixins: [MoviesGridController],

    render() {
        return (
            <section class="MoviesGridItem">

                <div class="capa">
                    <i class="fa fa-heart favorite"></i>
                    <div class="image" style={`background-image: url(https://image.tmdb.org/t/p/w500/${this.movie.poster_path})`}></div>
                    <div class="date">{this.movie.title}</div>

                </div>

            </section>
        )
    }
});

export { MoviesGridItem };
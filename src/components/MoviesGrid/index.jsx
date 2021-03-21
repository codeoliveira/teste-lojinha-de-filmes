import Vue from 'vue';

import './style.scss';

import MoviesGridController from './controller';
import MoviesGridDAO from './data.dao';

const MoviesGrid = Vue.extend({

    mixins: [MoviesGridController, MoviesGridDAO],


    render() {
        return (
            <section class="MoviesGrid col-12 m0 p0">



                {/** GRID FOR DESKTOP OR NOTEBOOKS */}
                <div class="grid col-12 m0 p0 d-none d-lg-block">

                    <div class="background"></div>
                    <div class="label">
                        <span class={`${this.args.title.class}`}>{this.args.title.label}</span>
                        <span class={`${this.args.subtitle.class}`}>{this.args.subtitle.label}</span>
                    </div>

                    <div class="movielist">
                        {this.movieListHTML}
                    </div>

                </div>

                { /** GRID FOR MOBILE */}
                <div class="grid mobile col-12 m0 p0 d-lg-none">

                    <div class="background"></div>
                    <div class="label">
                        <span class={`${this.args.title.class}`}>{this.args.title.label}</span>
                        <span class={`${this.args.subtitle.class}`}>{this.args.subtitle.label}</span>
                    </div>

                    <div class="movielist">
                        {this.movieListHTML}
                    </div>

                </div>

            </section>
        )
    }
})

export { MoviesGrid };
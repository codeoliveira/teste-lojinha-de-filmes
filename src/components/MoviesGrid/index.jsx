import Vue from 'vue';

import './style.scss';

import MoviesGridController from './controller';

const MoviesGrid = Vue.extend({

    mixins: [MoviesGridController],


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

                    {this.buildMovieList()}


                </div>

                { /** GRID FOR MOBILE */}
                <div class="grid mobile col-12 m0 p0 d-lg-none">
                    <div class="label">
                        <div class={`${this.args.title.class}`}>{this.args.title.label}</div>
                    </div>
                    <div class="background"></div>
                    <div class="label">
                        <span class={`${this.args.title.class}`}>{this.args.title.label}</span>
                        <span class={`${this.args.subtitle.class}`}>{this.args.subtitle.label}</span>
                    </div>

                    {this.buildMovieList()}

                </div>

            </section>
        )
    }
})

export { MoviesGrid };
import Vue from 'vue';
import SearchController from './controller';

import './style.scss';

const Search = Vue.extend({

    mixins: [SearchController],

    render() {
        return (
            <section>
                <div class="Search">
                    <form
                        class="form col-12 m0 p0"
                        onSubmit={this.doSearch}
                    >
                        <input
                            type="text"
                            name="search"
                            class="input-search"
                            value={this.search.form.search.value}
                            onkeypress={this.changeValue}
                            onkeyup={this.changeValue}
                        />

                        <button
                            type="submit"
                            class="btn btn-search">

                            <i class="fa fa-search icon"></i>
                            <div class="label">Buscar</div>
                        </button>
                    </form>
                </div>
            </section>
        )
    }
})

export { Search }
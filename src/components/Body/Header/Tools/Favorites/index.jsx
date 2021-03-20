import Vue from 'vue';

import './style.scss';

const Favorites = Vue.extend({
    render() {
        return (
            <section class="Favorites">
                <div class="tool">
                    <i class="icon fa fa-heart"></i>
                </div>
            </section>
        )
    }
});

export { Favorites };
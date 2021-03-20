import Vue from 'vue';
import { Favorites } from './Favorites';
import { ShoppintCart } from './ShoppingCart';

import './style.scss';

const Tools = Vue.extend({
    render() {
        return (
            <section class="Tools">
                <Favorites></Favorites>
                <ShoppintCart></ShoppintCart>
            </section>
        )
    }
});

export { Tools };
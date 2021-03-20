import Vue from 'vue';

import './style.scss';

const ShoppintCart = Vue.extend({
    render() {
        return (
            <section class="ShoppingCart">
                <div class="tool">
                    <i class="icon fa fa-shopping-cart"></i>
                    <div class="notification">
                        {5}
                    </div>
                </div>

            </section>
        )
    }
});

export { ShoppintCart };
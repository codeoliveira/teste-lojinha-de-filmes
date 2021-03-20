import Vue from 'vue';

import './style.scss';

import { Header } from './Header';

const Body = Vue.extend({
    render() {
        return (
            <section>
                <div class="Body">
                    <Header></Header>

                    {this.$slots.default}

                </div>
            </section>
        )
    }
});

export { Body };
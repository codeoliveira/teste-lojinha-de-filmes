import Vue from 'vue';
import { Logotipo } from './Logotipo';
import { Search } from './Search';
import { Tools } from './Tools';

import './style.scss';

const Header = Vue.extend({
    render() {
        return (
            <section>
                <div class="Header">
                    <div class="col-12 col-xl-10 p0 m0 content">
                        <div class="row p0 m0">
                            <div class="col-7 col-lg-4 p0 m0">
                                <Logotipo></Logotipo>
                            </div>

                            {/** BUSCA PARA NOTEBOOKS E DESKTOPS */}
                            <div class="col-12 col-lg-4 p0 m0 d-none d-lg-block">
                                <Search></Search>
                            </div>

                            <div class="col-5 col-lg-4 p0 m0">
                                <Tools></Tools>
                            </div>

                            {/** BUSCA PARA MOBILE */}
                            <div class="col-12 col-lg-4 p0 m0 d-lg-none">
                                <div class="col-12 search-mobile">
                                    <Search></Search>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
});

export { Header };
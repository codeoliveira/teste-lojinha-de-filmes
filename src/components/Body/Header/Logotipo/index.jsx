import Vue from 'vue';

import './style.scss';

const Logotipo = Vue.extend({
    render() {
        return (
            <section>
                <div class="Logotipo">
                    <i class="icon fa fa-film"></i>
                    <span class="nome">Teste</span>
                    <span class="slogan">Filmes</span>
                </div>
            </section>
        )
    }
})

export { Logotipo }
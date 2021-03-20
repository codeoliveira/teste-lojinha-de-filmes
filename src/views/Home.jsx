import Vue from 'vue';
import { MoviesGrid } from '../components/MoviesGrid';
import { Body } from './../components/Body';

const Home = Vue.extend({

  render() {
    return (
      <section>
        <div class="Home">
          <Body>
            <MoviesGrid args={{
              title: {
                label: 'Lançamentos',
                class: 'moviesLancamentos title'
              },
              subtitle: {
                label: 'em destaque',
                class: 'moviesLancamentos subtitle'
              }
            }}></MoviesGrid>
          </Body>
        </div>
      </section>
    )
  }

});

export { Home };
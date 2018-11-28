import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Loomad from './views/Loomad.vue';
import Toetus from './views/Toetus.vue';
import Varjupaigast from './views/Varjupaigast.vue';
import Kaotatudloomad from './views/Kaotatudloomad.vue';
import Multiple from './views/Multiple.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,

    },
    {
      path: '/about',
      name: 'about',
      component: About,

    },
    {
      path: '/loomad',
      name: 'loomad',
      component: Loomad,

    },
    {
      path: '/toetus',
      name: 'toetus',
      component: Toetus,

    },
    {
      path: '/varjupaigast',
      name: 'varjupaigast',
      component: Varjupaigast,

    },
    {
      path: '/multiple',
      name: 'multiple',
      component: Multiple,

    },
    {
      path: '/kaotatudloomad',
      name: 'kaotatudloomad',
      component: Kaotatudloomad,

    },
  ],
});

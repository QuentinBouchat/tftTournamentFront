import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import TournamentPage from '../views/TournamentPage.vue';
import TournamentPlayerPage from '../views/TournamentPlayerPage.vue';
import TournamentStatsPage from '../views/TournamentStatsPage.vue';
import TournamentGamePage from '../views/TournamentGamePage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/tournaments/:id',
    name: 'Tournament',
    component: TournamentPage,
    props: true
  },
  {
    path: '/tournaments/:id/stats',
    name: 'TournamentStats',
    component: TournamentStatsPage,
    props: true
  },
  {
    path: '/tournaments/:id/players/:player',
    name: 'TournamentPlayer',
    component: TournamentPlayerPage,
    props: true
  },
  {
    path: '/tournaments/:id/games/:game',
    name: 'TournamentGame',
    component: TournamentGamePage,
    props: true
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

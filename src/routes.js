import Search from './views/Search.vue';
import About from './views/About.vue';
import TrackDetail from './views/TrackDetail.vue';
import NotFound from './views/NotFound.vue';

const BASE_RUTE = '/novel-music';

const routes = [
  { path: BASE_RUTE + '/', component: Search, name: 'search' },
  { path: BASE_RUTE + '/about', component: About, name: 'about' },
  {
    path: BASE_RUTE + '/track/:id/:slug',
    component: TrackDetail,
    name: 'track',
  },
  { path: BASE_RUTE + '/404', component: NotFound },
  { path: BASE_RUTE + '/*', redirect: BASE_RUTE + '/404' },
];

export default routes;

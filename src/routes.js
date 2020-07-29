import Search from './views/Search.vue';
import About from './views/About.vue';
import TrackDetail from './views/TrackDetail.vue';
import NotFound from './views/NotFound.vue';

// ⚠️ Cambiar la rutas dependiendo si es para desarrolo o para produccion
const BASE_ROUTE = '/novel-music';

const routes = [
  { path: BASE_ROUTE + '/', component: Search, name: 'search' },
  { path: BASE_ROUTE + '/about', component: About, name: 'about' },
  {
    path: BASE_ROUTE + '/track/:id/:slug',
    component: TrackDetail,
    name: 'track',
  },
  { path: BASE_ROUTE + '/404', component: NotFound },
  { path: BASE_ROUTE + '/*', redirect: BASE_ROUTE + '/404' },
];

export default routes;

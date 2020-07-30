import Search from './views/Search.vue';
import About from './views/About.vue';
import TrackDetail from './views/TrackDetail.vue';
import NotFound from './views/NotFound.vue';

const routes = [
  { path: '/', component: Search, name: 'search' },
  { path: '/about', component: About, name: 'about' },
  {
    path: '/track/:id/:slug',
    component: TrackDetail,
    name: 'track',
  },
  { path: '/404', component: NotFound },
  { path: '/*', redirect: '/404' },
];

export default routes;

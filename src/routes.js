import Search from '@/components/Search.vue'
import About from '@/components/About.vue'
import TrackDetail from '@/components/TrackDetail.vue'
import PageNotFound from '@/components/PageNotFound.vue'

// ⚠️ Cambiar la rutas dependiendo si es para desarrolo o para produccion
const routes = [
  { path: '/novel-music/', component: Search, name: 'search' },
  { path: '/novel-music/about', component: About, name: 'about' },
  { path: '/novel-music/track/:id/:slug', component: TrackDetail, name: 'track' },
  { path: '/novel-music/404', component: PageNotFound },
  { path: '/novel-music/*', redirect: '/novel-music/404' }
]

export default routes

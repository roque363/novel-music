import Vue from 'vue';
import App from './App.vue';
import VueMeta from 'vue-meta';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import './assets/scss/main.scss';
import routes from './routes';
// Filters
import msToMm from '@/filters/ms-to-mm';
// Directives
import blur from '@/directives/blur';
// Plugins
import EventBus from '@/plugins/event-bus';

Vue.config.productionTip = false;

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});
Vue.use(Buefy);
Vue.use(VueRouter);
Vue.use(msToMm);
Vue.use(blur);
Vue.use(EventBus);

const router = new VueRouter({ routes, mode: 'history' });

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'bulma/css/bulma.css';

import App from './App.vue';
import blur from '@/directives/blur';
import msToMm from '@/filters/ms-to-mm';
// import EventBus from '@/plugins/event-bus';
import routes from './routes';
import './assets/scss/main.scss';

const app = createApp(App);

app.use(blur);
app.use(msToMm);
// app.use(EventBus);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);

app.mount('#app');

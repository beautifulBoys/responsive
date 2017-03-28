// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import Home from './view/home.vue';
import Map from './view/map.vue';

import VueRouter from 'vue-router';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.use(VueRouter);
Vue.use(Element);
Vue.config.productionTip = false;

const routes = [
  {path: '/', redirect: '/chart'},
  {path: '/chart', component: Home},
  {path: '/map', component: Map}
];
const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});

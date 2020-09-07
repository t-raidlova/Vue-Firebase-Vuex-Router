import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import { routes } from './Routes';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history', //changing hash default
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    }
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

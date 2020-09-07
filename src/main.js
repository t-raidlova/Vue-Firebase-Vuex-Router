import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Home from './components/Home';
import Menu from './components/Menu';
import Admin from './components/Admin';
import About from './components/About';
import Contact from './components/Contact';
// import Delivery from './components/Delivery ';
import History from './components/History';
import OrderingGuide from './components/OrderingGuide';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'homeLink', component: Home },
  { path: '/menu', name: 'menuLink', component: Menu },
  { path: '/contact', name: 'contactLink', component: Contact },
  { path: '/admin', name: 'adminLink', component: Admin },
  {
    path: '/about',
    name: 'aboutLink',
    component: About,
    children: [
      { path: '/history', name: 'historyLink', component: History },
      // { path: '/delivery', name: 'deliveryLink', component: Delivery },
      {
        path: '/ordering-guide',
        name: 'OrderingGuideLink',
        component: OrderingGuide,
      },
    ],
  },
  { path: '*', redirect: '/' }, //404 redirect
];
const router = new VueRouter({
  routes,
  mode: 'history', //changing hash default
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

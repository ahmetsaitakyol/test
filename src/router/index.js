import Vue from 'vue';
import VueRouter from 'vue-router';
import i18n from '../i18n';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: i18n.t('nav.home'),
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: i18n.t('nav.contact'),
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

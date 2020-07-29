import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'listOfBooks',
    component: () => import('../views/ListOfBooks.vue')
  },
  {
    path: '/addBook',
    name: 'addBook',
    component: () => import('../views/AddBook.vue')
  },
  {
    path: '/editBook/:id',
    name: 'editBook',
    component: () => import('../views/EditBook.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router

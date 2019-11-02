import firebase from 'firebase';
import Vue from 'vue';
import Router from 'vue-router';

import Tasks from '@/views/Tasks';
import Login from '@/views/Login';
import SignUp from '@/views/SignUp';
import Land from '@/views/Land';
import Account from'@/views/Account';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      name: 'Land',
      component: Land
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
      {
          path: '/tasks',
          name: 'Tasks',
          component: Tasks,
          meta: {
            requiresAuth: true
          }
      },
    {
      path:'/account',
      name:'Account',
      component: Account,
      meta: {
        requiresAuth: true
      }
    }

  ],
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('account');
  else next();
});

export default router;

import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import Vuex from 'vuex';
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
Vue.config.productionTip = false;

let app = '';
const config = {
  apiKey: "AIzaSyAXQ3E5spLX7nCaGapfIRIpX2DnkLNA-MQ",
  authDomain: "telemoortation.firebaseapp.com",
  databaseURL: "https://telemoortation.firebaseio.com",
  projectId: "telemoortation",
  storageBucket: "telemoortation.appspot.com",
  messagingSenderId: "949803695350",
  appId: "1:949803695350:web:efabda81846db0218840d7"
};
firebase.initializeApp(config);
Vue.use(vuetify);
Vue.use(Vuex);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app');
  }
});

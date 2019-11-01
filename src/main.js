import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import Vuex from 'vuex';
import Vuetify from 'vuetify';


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

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});

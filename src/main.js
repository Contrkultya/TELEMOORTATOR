import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from "firebase";
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

const firebaseConfig = {
  apiKey: "AIzaSyAXQ3E5spLX7nCaGapfIRIpX2DnkLNA-MQ",
  authDomain: "telemoortation.firebaseapp.com",
  databaseURL: "https://telemoortation.firebaseio.com",
  projectId: "telemoortation",
  storageBucket: "telemoortation.appspot.com",
  messagingSenderId: "949803695350",
  appId: "1:949803695350:web:efabda81846db0218840d7"
};
firebase.initializeApp(firebaseConfig);

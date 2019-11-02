const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


firebase.initializeApp({
    apiKey: "AIzaSyAXQ3E5spLX7nCaGapfIRIpX2DnkLNA-MQ",
    authDomain: "telemoortation.firebaseapp.com",
    databaseURL: "https://telemoortation.firebaseio.com",
    projectId: "telemoortation",
    storageBucket: "telemoortation.appspot.com",
    messagingSenderId: "949803695350",
    appId: "1:949803695350:web:efabda81846db0218840d7"
  })

const db = firebase.firestore();

export default db

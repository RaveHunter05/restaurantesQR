import firebase from "firebase";

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDwvU0rd_ZTxISYM8q_BLd0x6Al2rRJTxk",
    authDomain: "codigo-qr-49368.firebaseapp.com",
    databaseURL: "https://codigo-qr-49368.firebaseio.com",
    projectId: "codigo-qr-49368",
    storageBucket: "codigo-qr-49368.appspot.com",
    messagingSenderId: "897315249744",
    appId: "1:897315249744:web:c2a9b90a86df8ad664bb55",
    measurementId: "G-EX9GXZX4FS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;
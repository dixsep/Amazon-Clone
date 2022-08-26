// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import * as firebase from 'firebase/app';
//import 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDC4tLVALy_oA7-bPeTNjQe4M82fw_Nvds",
    authDomain: "challenge-50096.firebaseapp.com",
    projectId: "challenge-50096",
    storageBucket: "challenge-50096.appspot.com",
    messagingSenderId: "694360773281",
    appId: "1:694360773281:web:84a26f9876a8594b95d6e0",
    measurementId: "G-JLZQDD44ZM"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};
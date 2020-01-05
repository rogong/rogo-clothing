import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {

    apiKey: "AIzaSyACfbbV0uw3a11EzC1gGNg1BrSv92hBHZs",
    authDomain: "rogo-clothing-db.firebaseapp.com",
    databaseURL: "https://rogo-clothing-db.firebaseio.com",
    projectId: "rogo-clothing-db",
    storageBucket: "rogo-clothing-db.appspot.com",
    messagingSenderId: "308861315868",
    appId: "1:308861315868:web:ef58cd1caf0ae6ac2fa8d9"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
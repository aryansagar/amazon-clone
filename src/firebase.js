import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAVInJ6Yt2qbRMfeThDeQic8wIp0QcekFU",
    authDomain: "clone-78d30.firebaseapp.com",
    projectId: "clone-78d30",
    storageBucket: "clone-78d30.appspot.com",
    messagingSenderId: "336728197552",
    appId: "1:336728197552:web:ef01e34f88b675c273ae75",
    measurementId: "G-2TTL31N484"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db , auth};
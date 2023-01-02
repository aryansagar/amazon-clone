import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSyik9ABx3PQsXRBXvslQGW4e1OR8tHFM",
  authDomain: "clone-new-f2ddc.firebaseapp.com",
  projectId: "clone-new-f2ddc",
  storageBucket: "clone-new-f2ddc.appspot.com",
  messagingSenderId: "845109684331",
  appId: "1:845109684331:web:a918eecbe699036bb2292e",
  measurementId: "G-JX62CPVN4N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();

const auth = firebase.auth();


export {db, auth };

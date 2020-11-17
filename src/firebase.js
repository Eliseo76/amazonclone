import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_apu3etd1BoDmasAStliZkisP-QERc7c",
  authDomain: "clone-b409c.firebaseapp.com",
  databaseURL: "https://clone-b409c.firebaseio.com",
  projectId: "clone-b409c",
  storageBucket: "clone-b409c.appspot.com",
  messagingSenderId: "699178506179",
  appId: "1:699178506179:web:bb192200573e1e65b3cf76",
  measurementId: "G-M2KYEKH5J8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

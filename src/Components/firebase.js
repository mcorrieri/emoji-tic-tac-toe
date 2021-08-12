import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBV66DzopAwUIGValG4AlnJwhdANHHd3QI",
  authDomain: "emoji-tic-tac-toe-ab733.firebaseapp.com",
  projectId: "emoji-tic-tac-toe-ab733",
  storageBucket: "emoji-tic-tac-toe-ab733.appspot.com",
  messagingSenderId: "186414737455",
  appId: "1:186414737455:web:3e7ab17647f5eb86b73eda",
  measurementId: "G-HR5Q0NK388",
};

const initFirebase = firebase.initializeApp(firebaseConfig);
const db = initFirebase.firestore();
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default db;

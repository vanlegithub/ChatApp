import "firebase/analytics";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB5ajBSBJbav4FgRXlUhNfMK8SdlaZbIXI",
  authDomain: "chatapp-vanle.firebaseapp.com",
  projectId: "chatapp-vanle",
  storageBucket: "chatapp-vanle.appspot.com",
  messagingSenderId: "649587423881",
  appId: "1:649587423881:web:771930b8e8172cd45aa458",
  measurementId: "G-6EY8SWH5K9",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;

// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAANiwNygzzXqQDs5Zg9dR6QAWYXoRTTq8",
  authDomain: "groovier-utnfrba.firebaseapp.com",
  projectId: "groovier-utnfrba",
  storageBucket: "groovier-utnfrba.appspot.com",
  messagingSenderId: "815326487148",
  appId: "1:815326487148:web:067fd595a94b5090c9ae49",
  measurementId: "G-VY4KC882XH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.database = firebase.firestore();
firebase.auth = firebase.auth();
export default firebase;
 
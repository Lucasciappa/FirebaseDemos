
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHt3U91XAHn0_HGElatYQHACOpEbuGmgY",
  authDomain: "sql-demos-68c2f.firebaseapp.com",
  projectId: "sql-demos-68c2f",
  storageBucket: "sql-demos-68c2f.appspot.com",
  messagingSenderId: "542480558248",
  appId: "1:542480558248:web:d82ccf4f0620dbb307fa9d",
  measurementId: "G-R8NDR3X6ED"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);


export default firebase.firestore()

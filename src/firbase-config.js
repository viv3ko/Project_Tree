// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFidb-y5V332Q5EA9AZMV9_GgQHMm8Tps",
  authDomain: "spartahack-8dd94.firebaseapp.com",
  projectId: "spartahack-8dd94",
  storageBucket: "spartahack-8dd94.appspot.com",
  messagingSenderId: "861624276911",
  appId: "1:861624276911:web:0d93feeed82dddd352015a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
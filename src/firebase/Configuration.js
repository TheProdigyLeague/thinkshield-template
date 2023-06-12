// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDq97MijmGFmY35dnWw1U3tdzolDUMOb4",
  authDomain: "luxury-mall-8aab0.firebaseapp.com",
  projectId: "luxury-mall-8aab0",
  storageBucket: "luxury-mall-8aab0.appspot.com",
  messagingSenderId: "740721406848",
  appId: "1:740721406848:web:101c6b0f38d7c0a183c765",
  measurementId: "G-14RZ370T1H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

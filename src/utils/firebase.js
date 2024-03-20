// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyAIvtPzRCEMs2aOfrvoqmSL_JaKj4_7Hl8",
  // authDomain: "netflix-gpt-firebase.firebaseapp.com",
  // projectId: "netflix-gpt-firebase",
  // storageBucket: "netflix-gpt-firebase.appspot.com",
  // messagingSenderId: "621651168863",
  // appId: "1:621651168863:web:0907f98ab4b245c82cd5ea",
  // measurementId: "G-FLQ41P729G",
  apiKey: "AIzaSyBzuTLcnJxlVCT0wAYawVJkIdKcd6wH-Cw",
  authDomain: "movieflixui-gpt-firebase.firebaseapp.com",
  projectId: "movieflixui-gpt-firebase",
  storageBucket: "movieflixui-gpt-firebase.appspot.com",
  messagingSenderId: "168194589296",
  appId: "1:168194589296:web:4fd68c99cf68708a8deab5",
  measurementId: "G-JHLY6CR1T6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

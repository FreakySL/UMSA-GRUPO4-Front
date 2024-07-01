// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4ySlBKiRnYpIUTCO-eLMWlPvliGI2jkw",
  authDomain: "umsa-front-login.firebaseapp.com",
  projectId: "umsa-front-login",
  storageBucket: "umsa-front-login.appspot.com",
  messagingSenderId: "358204610735",
  appId: "1:358204610735:web:53fdf81d1c5f324d699c5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
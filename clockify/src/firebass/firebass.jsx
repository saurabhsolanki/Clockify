// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9tQvGViHXwtSA_kQd8EULrD_iwnFRXak",
  authDomain: "react-authentication-f5392.firebaseapp.com",
  projectId: "react-authentication-f5392",
  storageBucket: "react-authentication-f5392.appspot.com",
  messagingSenderId: "727920936143",
  appId: "1:727920936143:web:8d0ab559dbdcc75ad2e3ba",
  measurementId: "G-6Y582JWD3Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

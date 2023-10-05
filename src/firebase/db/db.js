// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIoMMWeH1ZZYGK5gjM0FWWhvyPcOaUUzA",
  authDomain: "secondchance-ecommerce.firebaseapp.com",
  projectId: "secondchance-ecommerce",
  storageBucket: "secondchance-ecommerce.appspot.com",
  messagingSenderId: "449316311620",
  appId: "1:449316311620:web:3b58fc558cd4b5fb65e211"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();


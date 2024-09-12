// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgTC9yqiHGPLVZFDrnqGWyP_hay3a5oEM",
    authDomain: "learn-firebase-fd68e.firebaseapp.com",
    projectId: "learn-firebase-fd68e",
    storageBucket: "learn-firebase-fd68e.appspot.com",
    messagingSenderId: "833673673024",
    appId: "1:833673673024:web:03b694a3303ed13935a2a5",
    measurementId: "G-1YPGJ4LLEC"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };

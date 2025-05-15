// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCavJkFsWosoCUDBlO2SZ4x3YvrkKJ4YT0",
    authDomain: "saatvik-studies.firebaseapp.com",
    databaseURL: "https://saatvik-studies-default-rtdb.firebaseio.com",
    projectId: "saatvik-studies",
    storageBucket: "saatvik-studies.firebasestorage.app",
    messagingSenderId: "967921579214",
    appId: "1:967921579214:web:1d2fb8e4e0b562dd684c9f"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
 

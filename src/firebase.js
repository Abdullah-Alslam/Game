// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAsb4v4DN3IBzXrpi8fTjLcvSVrTO5D71g",
  authDomain: "gaming-37217.firebaseapp.com",
  projectId: "gaming-37217",
  storageBucket: "gaming-37217.firebasestorage.app",
  messagingSenderId: "364608649680",
  appId: "1:364608649680:web:665b2ce72e3559acd0e1d5",
  measurementId: "G-LWJZ164TQL",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

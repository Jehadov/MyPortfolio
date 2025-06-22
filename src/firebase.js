// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDWc2pb9w5d-xZ1rq8iKcz37kjOdaG3wRk",
  authDomain: "jehad-180db.firebaseapp.com",
  projectId: "jehad-180db",
  storageBucket: "jehad-180db.firebasestorage.app",
  messagingSenderId: "512699991187",
  appId: "1:512699991187:web:54e517cf5fa2d19492b966"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔥 Initialize Firestore
const db = getFirestore(app);

export { db };

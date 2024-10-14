// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3ql6V6hJ8Cl-5iyvP8PR7iHGf-6QMy7c",
  authDomain: "contactmanager-e3d34.firebaseapp.com",
  projectId: "contactmanager-e3d34",
  storageBucket: "contactmanager-e3d34.appspot.com",
  messagingSenderId: "1024327667261",
  appId: "1:1024327667261:web:f79c0f83da32ed4723e454"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
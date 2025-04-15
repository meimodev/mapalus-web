// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1-4-Q5kiaM-8LhVE10lSRnZb-WQp3IUo",
  authDomain: "mapalus-a26af.firebaseapp.com",
  projectId: "mapalus-a26af",
  storageBucket: "mapalus-a26af.appspot.com",
  messagingSenderId: "342086903599",
  appId: "1:342086903599:web:3de75bb74c2bab6dfc63da",
  measurementId: "G-CCTFVDBQHL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);


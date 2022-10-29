// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFIS0Pzxf8GkTro4hVRe8hkGKdslQiPfI",
  authDomain: "profile-view-edfb9.firebaseapp.com",
  projectId: "profile-view-edfb9",
  storageBucket: "profile-view-edfb9.appspot.com",
  messagingSenderId: "892653042594",
  appId: "1:892653042594:web:6dd760a8a2b73f82bb10fb",
  measurementId: "G-1YKTEN5YN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
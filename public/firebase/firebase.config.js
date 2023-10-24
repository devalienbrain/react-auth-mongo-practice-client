// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB21AFXTL5woZP-3HtQ2x5E7eh6vQsDaIQ",
  authDomain: "react-auth-mongo-practice.firebaseapp.com",
  projectId: "react-auth-mongo-practice",
  storageBucket: "react-auth-mongo-practice.appspot.com",
  messagingSenderId: "844289830163",
  appId: "1:844289830163:web:44b81dfb04e4df4c323ee6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

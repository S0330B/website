// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOLpQ2rgPwGmSw12SfFb95_PM3vjg4pis",
  authDomain: "portfolio-website-8e297.firebaseapp.com",
  projectId: "portfolio-website-8e297",
  storageBucket: "portfolio-website-8e297.appspot.com",
  messagingSenderId: "1021956815930",
  appId: "1:1021956815930:web:edab6ce325f2817c974903",
  measurementId: "G-LF7QR6BNQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
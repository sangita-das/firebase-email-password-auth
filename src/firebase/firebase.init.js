// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-YPTbWjj1cex-N9BHctgOLvMi4ucMlq4",
  authDomain: "email-password-auth-e8ab2.firebaseapp.com",
  projectId: "email-password-auth-e8ab2",
  storageBucket: "email-password-auth-e8ab2.appspot.com",
  messagingSenderId: "313692508877",
  appId: "1:313692508877:web:3a778a377e6c40ada64f84",
  measurementId: "G-TWK5CT7KM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
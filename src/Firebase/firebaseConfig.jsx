// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjEVTqP1nqVzd5AK5LWHgM3Icx9pXHzxE",
  authDomain: "car-client-5ead5.firebaseapp.com",
  projectId: "car-client-5ead5",
  storageBucket: "car-client-5ead5.appspot.com",
  messagingSenderId: "340213296129",
  appId: "1:340213296129:web:9e0e4b4e1b6e8bd9dae400"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
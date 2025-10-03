


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBK5SnuTDA-tlNWZSPclewqjKkZ2-JVIc",
  authDomain: "auth-moha-milon-ba652.firebaseapp.com",
  projectId: "auth-moha-milon-ba652",
  storageBucket: "auth-moha-milon-ba652.firebasestorage.app",
  messagingSenderId: "507203405715",
  appId: "1:507203405715:web:00c4bafbe407d08d7c4a66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
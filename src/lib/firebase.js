import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { register } from "./components/register";


const firebaseConfig = initializeApp({
    apiKey: "AIzaSyCrfQBnBtH9d427O3FzMLL3qbcD277Bb50",
    authDomain: "social-network-unidas.firebaseapp.com",
    projectId: "social-network-unidas",
    storageBucket: "social-network-unidas.appspot.com",
    messagingSenderId: "398336160441",
    appId: "1:398336160441:web:909a9c6ebfc15c09f72168",
    measurementId: "G-KT9KCBTH8E"
  });

const auth = getAuth(firebaseConfig);

export const register = (email, password) => createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // ..
});
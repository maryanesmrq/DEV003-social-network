import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from './firebase.js';
import { getAuth, signInWithRedirect, signInWithEmailAndPassword } from "firebase/auth";



export const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode);
      console.log(errorMessage);
    });
  };

export const registerUserGoogle = () => {
  signInWithRedirect(auth, provider);
};


export const loginUser = (email, password) => {
signInWithEmailAndPassword(auth, email, password)
}; 

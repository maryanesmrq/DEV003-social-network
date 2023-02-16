import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from './firebase.js';
import { getAuth, signInWithRedirect, signInWithEmailAndPassword } from "firebase/auth";



export const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert('Si pudiste wey');
      // ...
      onNavigate('/wall');
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/weak-password'){
        throw new Error ('Eres débil pinche contraseña, te van a hackear');
      }
      if (errorCode === 'auth/email-already-in-use'){
        errorMessage.innerHTML = 'El email ya esta en uso';
      }
      if (errorCode === 'auth/missing-email'){
        errorMessage.innerHTML = 'Debes ingresar un email';
      }
      if (errorCode === 'auth/internal-error'){
        errorMessage.innerHTML = 'Debes ingresar una contraseña';
      }
      if (errorCode === 'auth/invalid-email'){
        errorMessage.innerHTML = 'Debes ingresar una email valido';
      }

      const errorMessage = error.message;
    });
  };

export const registerUserGoogle = () => {
  signInWithRedirect(auth, provider);
};


export const loginUser = (email, password) => {
signInWithEmailAndPassword(auth, email, password)
};
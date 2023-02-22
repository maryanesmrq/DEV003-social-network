import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from './firebase.js';
import { getAuth, signInWithRedirect, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";



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
        throw new Error ('El email ya esta en uso');
      }
      if (errorCode === 'auth/missing-email'){
        throw new Error ('Debes ingresar un email');
      }
      if (errorCode === 'auth/internal-error'){
        throw new Error ('Debes ingresar una contraseña');
      }
      if (errorCode === 'auth/invalid-email'){
        throw new Error ('Debes ingresar una email valido');
      }

      const errorMessage = error.message;
    });
  };

export const registerUserGoogle = () => {
  signInWithRedirect(auth, provider);
};


export const loginUser = (email, password) => {
return signInWithEmailAndPassword(auth, email, password)
// .then((userCredential) => {
//   // Signed in 
//   const user = userCredential.user;
//   console.log('ya entraste wey');
//   return user;
//   // ...
// })
// .catch((error) => {
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   console.log(errorCode);
//   console.log(errorMessage);
// });
};

export const observador = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('existe usuario activo');
      // ...
    } else {
      // User is signed out
      // ...
      console.log('no existe usuario activo');
    }
  });
}
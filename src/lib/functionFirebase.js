import {
  // eslint-disable-next-line max-len
  createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth, provider } from './firebase.js';

// eslint-disable-next-line max-len
export const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const registerUserGoogle = () => signInWithPopup(auth, provider);
// hay que crear otra función para que solo inicie con google y no registre en ambos botones google

export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

// export const observador = () => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
// User is signed in, see docs for a list of available properties
// https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       console.log('existe usuario activo');
//       // ...
//     } else {
//       // User is signed out
//       // ...
//       console.log('no existe usuario activo');
//     }
//   });
// };

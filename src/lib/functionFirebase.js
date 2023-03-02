import {
  // eslint-disable-next-line max-len
  createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword,
} from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { auth, provider, db } from './firebase.js';

// eslint-disable-next-line max-len
export const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const registerUserGoogle = () => signInWithPopup(auth, provider);
// hay que crear otra función para que solo inicie con google y no registre en ambos botones google

export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

/*
export function loginUser(email, password){
  const result = signInWithEmailAndPassword(auth, email,password);
  console.log(result) <--- Promise<pending>
  return result;
}
*/

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
export function postPublication() {
// console.log(auth);
  const docRef = addDoc(collection(db, 'publicaciones'), {
    autor: auth.uid,
    contenido: '',
    likes: [],
  });
  return docRef;
}

// export const postPublication = () => addDoc(collection(db, 'publicaciones'), {
//   autor: auth.uid,
//   contenido: '',
//   likes: [],
// });

/*

export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

export function loginUser(email, password){
  const result = signInWithEmailAndPassword(auth, email,password);
  console.log(result) <--- Promise<pending>
  return result;
}
*/

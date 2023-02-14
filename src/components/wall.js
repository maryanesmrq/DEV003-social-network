import { home } from "./home.js";

export const wall = (onNavigate) => {
const wallDiv = document.createElement('div');
const logo = document.createElement('img');
const logOut = document.createElement('button');
const profilePic = document.createElement('img');
const newPost = document.createElement('input');
let like = document.createElement('button');
let editPost = document.createElement('button');
let deletePost = document.createElement('button');

logo.src = './logoUnidas.jpg';
logOut.textContent = 'Cerrar sesión';
// profilePic PENDIENTE 
newPost.textContent = 'Crear publicación';
like.textContent = '👍';
editPost.textContent = '✏️';
deletePost.textContent = '❌';

logOut.addEventListener('click', ()=> {
    onNavigate('/');
  });
//like pendiente
// editPost pendiente
// deletePost pendiente

wallDiv.appendChild(logo);
wallDiv.appendChild(logOut);
// wallDiv.appendChild(profilePic);
wallDiv.appendChild(newPost);
wallDiv.appendChild(like);
wallDiv.appendChild(editPost);
wallDiv.appendChild(deletePost);

return wallDiv;
};
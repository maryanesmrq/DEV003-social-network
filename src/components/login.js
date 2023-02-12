import { onNavigate } from "../main.js";

export const login = () => {
  const homeDiv = document.createElement('div');
  const title = document.createElement('h2');
  const buttonBack = document.createElement('button');
  const button = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');

  buttonBack.textContent = 'Cerrar sesión';
  button.textContent = 'Entrar';
  title.textContent = 'Iniciar sesión';
  button.addEventListener('click', ()=> {
    onNavigate('/');
    console.log(inputEmail.value);
  });
  buttonBack.addEventListener('click', ()=> {
    onNavigate('/');
  });

  homeDiv.appendChild(title);
  homeDiv.appendChild(buttonBack);
  homeDiv.appendChild(button);
  homeDiv.appendChild(inputEmail);
  homeDiv.appendChild(inputPassword);

  return homeDiv;
};
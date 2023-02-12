// aquí van todas las funcionalidades de la pantalla de inicio (iniciar sesión y registrarse)
import { onNavigate } from "../main.js";

export const home = () => {
  const homeDiv = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const textRegister = document.createElement('h4');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  
  inputEmail.placeholder = 'Correo electrónico';
  inputPassword.placeholder = 'Contraseña';
  buttonLogin.textContent = 'Iniciar sesión';
  buttonGoogle.textContent = 'Iniciar sesión con Google';
  textRegister.textContent = '¿No tienes cuenta?';
  buttonRegister.textContent = 'Registrate dando click aquí';
  title.textContent = 'unidas';
  buttonLogin.addEventListener('click', ()=> {
    onNavigate('/login');
  });
  buttonRegister.addEventListener('click', ()=> {
    onNavigate('/register');
  });
  homeDiv.appendChild(title);
  homeDiv.appendChild(inputEmail);
  homeDiv.appendChild(inputPassword);
  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonGoogle);
  homeDiv.appendChild(textRegister);
  homeDiv.appendChild(buttonRegister);
  

  return homeDiv;
};

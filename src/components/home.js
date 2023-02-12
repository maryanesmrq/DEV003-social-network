// aquí van todas las funcionalidades de la pantalla de inicio (iniciar sesión y registrarse)
import { onNavigate } from "../main.js";

export const home = () => {
  const homeDiv = document.createElement('div');
  const title = document.createElement('h2');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'Registrarse ahora';
  buttonLogin.textContent = 'Iniciar sesión';
  title.textContent = 'Bienvenida a Unidas. Inicia sesión o Registrate';
  buttonLogin.addEventListener('click', ()=> {
    onNavigate('/login');
  });
  buttonRegister.addEventListener('click', ()=> {
    onNavigate('/register');
  });
  homeDiv.appendChild(title);
  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(buttonLogin);

  return homeDiv;
};

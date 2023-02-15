import { registerUserGoogle } from "../lib/functionFirebase.js";

export const login = (onNavigate) => {
  const loginDiv = document.createElement('div');
  const logo = document.createElement('img');
  const title = document.createElement('img');
  const buttonLogin = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const textRegister = document.createElement('h4');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  
  logo.src = './logoUnidasHome.png';
  title.src ='./unidasLetras.png';
  inputEmail.placeholder = 'Correo electrónico';
  inputPassword.placeholder = 'Contraseña';
  buttonLogin.textContent = 'Iniciar sesión';
  buttonGoogle.textContent = 'Iniciar sesión con Google';
  textRegister.textContent = '¿No tienes cuenta?';
  buttonRegister.textContent = 'Registrate dando click aquí';

  buttonRegister.addEventListener('click', ()=> {
    onNavigate('/register');
  });
  buttonGoogle.addEventListener('click', ()=> {
    registerUserGoogle();
    onNavigate('/wall');
  });
  buttonLogin.addEventListener('click', () => {
    onNavigate('/wall');
  });

  loginDiv.appendChild(logo);
  loginDiv.appendChild(title);
  loginDiv.appendChild(inputEmail);
  loginDiv.appendChild(inputPassword);
  loginDiv.appendChild(buttonLogin);
  loginDiv.appendChild(buttonGoogle);
  loginDiv.appendChild(textRegister);
  loginDiv.appendChild(buttonRegister);
  

  return loginDiv;
};
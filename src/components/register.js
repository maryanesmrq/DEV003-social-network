import { onNavigate } from "../main.js";

export const register = () => {
  const homeDiv = document.createElement('div');
  const title = document.createElement('h2');
  
  const logoUnidas = document.createElement ('img') ;
  const buttonBack = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const buttonGoogle= document.createElement('button');

  const labelFullName = document.createElement ('label');
  const inputFullName = document.createElement('input');
  const labelEmail = document.createElement ('label');
  const inputEmail = document.createElement('input');
  const labelPassword = document.createElement ('label');
  const inputPassword = document.createElement('input');

  labelFullName.textContent = 'Nombre y Apellido';
  labelEmail.textContent = 'Correo electrónico';
  labelPassword.textContent = 'Contraseña';
  buttonBack.textContent = '¿Ya eres miembro de Unidas? Iniciar sesión';
  buttonRegister.textContent = 'Registrarse';
  buttonGoogle.textContent = 'Continuar con Google';
  title.textContent = '¡Ingresa tus datos y sé parte de nuestra comunidad!';
  buttonRegister.addEventListener('click', ()=> {
    onNavigate('/');
  });
  buttonBack.addEventListener('click', ()=> {
    onNavigate('/');
  });

  homeDiv.appendChild(title);
  homeDiv.appendChild(labelFullName);
  homeDiv.appendChild(inputFullName);
  homeDiv.appendChild(labelEmail);
  homeDiv.appendChild(inputEmail);
  homeDiv.appendChild(labelPassword);
  homeDiv.appendChild(inputPassword);
  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(buttonGoogle);
  homeDiv.appendChild(buttonBack);

  return homeDiv;
};

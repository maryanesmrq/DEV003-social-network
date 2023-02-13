import { home } from "./home.js";
//import { register } from "../lib/firebase.js";

// Ingresar logo Unidas Preguntar a JC
export const register = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const title = document.createElement('h2');
  const buttonBack = document.createElement('button');
  const buttonRegister2 = document.createElement('button');
  const buttonGoogle= document.createElement('button');
  const labelFullName = document.createElement ('label');
  const inputFullName = document.createElement('input');
  const labelEmail = document.createElement ('label');
  const inputEmail = document.createElement('input');
  const labelPassword = document.createElement ('label');
  const inputPassword = document.createElement('input');
  const logo = document.createElement('img');

  labelFullName.textContent = 'Nombre y Apellido';
  inputFullName.id = 'fullName';
  labelEmail.textContent = 'Correo electrónico';
  inputEmail.id = 'email';
  labelPassword.textContent = 'Contraseña';
  inputPassword.id = 'password';
  buttonBack.textContent = '¿Ya eres miembro de Unidas? Iniciar sesión';
  buttonRegister2.textContent = 'Registrarse';
  buttonRegister2.onclick = registrar();
  buttonGoogle.textContent = 'Continuar con Google';
  title.textContent = '¡Ingresa tus datos y sé parte de nuestra comunidad!';
  logo.src = './logoUnidas.jpg';

  buttonRegister2.addEventListener('click', ()=> {
    onNavigate('/register');
  });
  buttonBack.addEventListener('click', ()=> {
    onNavigate('/');
  });
  
  homeDiv.appendChild(logo);
  homeDiv.appendChild(title);
  homeDiv.appendChild(labelFullName);
  homeDiv.appendChild(inputFullName);
  homeDiv.appendChild(labelEmail);
  homeDiv.appendChild(inputEmail);
  homeDiv.appendChild(labelPassword);
  homeDiv.appendChild(inputPassword);
  homeDiv.appendChild(buttonRegister2);
  homeDiv.appendChild(buttonGoogle);
  homeDiv.appendChild(buttonBack);

  return homeDiv;
};

function registrar(){
  //let email = document.getElementById('email').value;
  //let password = document.getElementById('password').value; 

  //console.log(email);
  //console.log(password);

};

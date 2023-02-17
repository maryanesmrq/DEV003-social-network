import { auth } from "../lib/firebase.js";
import { registerUserGoogle, loginUser } from "../lib/functionFirebase.js";

export const login = (onNavigate) => {
  const loginDiv = document.createElement('div');
  const cuadroBlanco = document.createElement("div");
  const logoUnidasHome = document.createElement('img');
  const unidasLetras = document.createElement('img');
  const buttonLogin = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const textRegister = document.createElement('h4');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const logoUnidas = document.createElement('img');
  
  cuadroBlanco.classList = "cuadroBlanco";
  loginDiv.classList = "loginDiv";
  logoUnidasHome.classList = "logoUnidasHome";
  unidasLetras.classList = "unidasLetras";
  buttonLogin.classList = "buttonLogin";
  buttonGoogle.classList = "buttonGoogle";
  buttonRegister.classList = "buttonRegister";
  textRegister.classList = "textRegister";
  inputEmail.classList = "inputEmail";
  inputPassword.classList = "inputPassword"
  logoUnidasHome.src = './logoUnidasHome.png';
  unidasLetras.src ='./unidasLetras.png';
  inputEmail.placeholder = 'Correo electrónico';
  inputPassword.placeholder = 'Contraseña';
  buttonLogin.textContent = 'Iniciar sesión';
  buttonGoogle.textContent = 'Iniciar sesión con Google';
  textRegister.textContent = '¿No tienes cuenta?';
  buttonRegister.textContent = 'Registrate dando click aquí';
  logoUnidas.src ='./logoUnidas.jpg';
  logoUnidas.classList = "logoUnidas";

  buttonRegister.addEventListener('click', ()=> {
    onNavigate('/register');
  });
  buttonGoogle.addEventListener('click', ()=> {
    registerUserGoogle();
    onNavigate('/wall');
  });
  buttonLogin.addEventListener('click', () => {
    loginUser(inputEmail.value, inputPassword.value); //Pendiente: ver que funcione la validación de correo y password 
   
    onNavigate('/wall');
  });

  loginDiv.appendChild(logoUnidasHome);
  cuadroBlanco.insertAdjacentElement("beforeend", unidasLetras);
  cuadroBlanco.insertAdjacentElement("beforeend", logoUnidas);
  loginDiv.appendChild(cuadroBlanco);
  cuadroBlanco.insertAdjacentElement("beforeend", inputEmail);
  cuadroBlanco.insertAdjacentElement("beforeend", inputPassword);
  cuadroBlanco.insertAdjacentElement("beforeend", buttonLogin);
  cuadroBlanco.insertAdjacentElement("beforeend", buttonGoogle);
  cuadroBlanco.insertAdjacentElement("beforeend", textRegister);
  cuadroBlanco.insertAdjacentElement("beforeend", buttonRegister);
  

  return loginDiv;
};
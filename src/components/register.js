import { async } from "regenerator-runtime";
import { registerUser } from "../lib/functionFirebase.js";
import { registerUserGoogle } from "../lib/functionFirebase.js";

export const register = (onNavigate) => {
  const registerDiv = document.createElement('div');
  const cuadroBlancoRegister = document.createElement("div");
  const logoUnidasHome = document.createElement('img');
  const unidasLetrasRegister = document.createElement('img');
  const welcomeText = document.createElement('h4');
  const buttonBack = document.createElement('button');
  const buttonRegister2 = document.createElement('button');
  const buttonGoogle2= document.createElement('button');
  const labelFullname = document.createElement ('label');
  const inputFullname = document.createElement('input');
  const labelEmail = document.createElement ('label');
  const inputEmail = document.createElement('input');
  const labelPassword = document.createElement ('label');
  const inputPassword = document.createElement('input');
  const logoUnidas = document.createElement('img');
  const alreadyMember = document.createElement('h4');

  cuadroBlancoRegister.classList = 'cuadroBlancoRegister';
  registerDiv.classList = 'registerDiv';
  logoUnidasHome.classList = 'logoUnidasHome';
  unidasLetrasRegister.classList = 'unidasLetrasRegister';
  welcomeText.classList = 'welcomeText';
  buttonBack.classList = 'buttonBack';
  buttonRegister2.classList = 'buttonRegister2';
  buttonGoogle2.classList = 'buttonGoogle2';
  labelFullname.classList = 'labelFullname';
  inputFullname.classList = 'inputFullname';
  labelEmail.classList = 'labelEmail';
  inputEmail.classList = 'inputEmail';
  labelPassword.classList = 'labelPassword';
  inputPassword.classList = 'inputPassword';
  alreadyMember.classList = "alreadyMember";
  logoUnidasHome.src = './logoUnidasHome.png';
  unidasLetrasRegister.src ='./unidasLetras.png';
  labelFullname.textContent = 'Nombre y Apellido';
  inputFullname.id = 'fullName';
  labelEmail.textContent = 'Correo electrónico';
  labelPassword.textContent = 'Contraseña';
  alreadyMember.textContent = '¿Ya eres miembro de Unidas?';
  buttonBack.textContent =  'Iniciar sesión';
  buttonRegister2.textContent = 'Registrarse';
  buttonGoogle2.textContent = 'Continuar con Google';
  welcomeText.textContent = '¡Ingresa tus datos y sé parte de nuestra comunidad!';

  buttonRegister2.addEventListener('click', async ()=> {
      console.log(typeof registerUser);
      try { await registerUser(inputEmail.value, inputPassword.value);
        
      } catch (error) {
        console.log('hola');
        console.log(error);
      } 
  });
  buttonGoogle2.addEventListener('click', ()=> {
    registerUserGoogle();
    onNavigate('/wall'); 
  });
  buttonBack.addEventListener('click', ()=> {
    onNavigate('/');
  });
  
  registerDiv.appendChild(logoUnidasHome);
  cuadroBlancoRegister.insertAdjacentElement("beforeend", unidasLetrasRegister);
  cuadroBlancoRegister.insertAdjacentElement("beforeend", logoUnidas);
  registerDiv.appendChild(cuadroBlancoRegister);
  cuadroBlancoRegister.insertAdjacentElement("beforeend", welcomeText);
  cuadroBlancoRegister.insertAdjacentElement("beforeend", labelFullname);
  cuadroBlancoRegister.insertAdjacentElement("beforeend", inputFullname);
  cuadroBlancoRegister.insertAdjacentElement("beforeend", labelEmail);
  cuadroBlancoRegister.insertAdjacentElement("beforeend", inputEmail);
  cuadroBlancoRegister.insertAdjacentElement("beforeend", labelPassword);
  cuadroBlancoRegister.insertAdjacentElement("beforeend", inputPassword);
  cuadroBlancoRegister.insertAdjacentElement("beforeend", buttonRegister2);
  cuadroBlancoRegister.insertAdjacentElement("beforeend", buttonGoogle2);
  cuadroBlancoRegister.insertAdjacentElement("beforeend", alreadyMember);
  cuadroBlancoRegister.insertAdjacentElement("beforeend", buttonBack);

  return registerDiv;
};

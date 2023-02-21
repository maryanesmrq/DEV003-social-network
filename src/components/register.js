import { async } from "regenerator-runtime";
import { registerUser } from "../lib/functionFirebase.js";
import { registerUserGoogle } from "../lib/functionFirebase.js";

export const register = (onNavigate) => {
  const registerDiv = document.createElement('div');
  const cuadroBlancoRegister = document.createElement("div");
  const logoUnidasHome = document.createElement('img');
  const unidasLetrasRegister = document.createElement('img');
  const welcomeText = document.createElement('h2'); /*Maryan lo tiene como welcomeText*/ 
  const buttonBack = document.createElement('button');
  const buttonRegister2 = document.createElement('button');
  const buttonGoogle2= document.createElement('button');
  const labelFullname = document.createElement ('label');
  const inputFullname = document.createElement('input');
  const labelEmail = document.createElement ('label');
  const inputEmail = document.createElement('input');
  const labelPassword = document.createElement ('label');
  const inputPassword = document.createElement('input');
  const logoUnidas2 = document.createElement('img'); /*Maryan lo tiene como logoUnidas */
  const alreadyMember = document.createElement('h4'); /* Maryan lo tiene como alreadyMember */
  const divSinLogo = document.createElement('div');

  registerDiv.classList = 'registerDiv';
  cuadroBlancoRegister.classList = "cuadroBlancoRegister";
  labelFullName.textContent = 'Nombre y Apellido';
  labelFullName.classList = 'labelFullName';
  inputFullName.id = 'fullName';
  labelEmail.textContent = 'Correo electrónico';
  labelEmail.classList = 'labelEmail';
  labelPassword.textContent = 'Contraseña';
  labelPassword.classList = 'labelPassword';
  buttonBack.textContent = 'Iniciar sesión';
  buttonBack.classList = 'buttonBack';
  alreadyMember.textContent = '¿Ya eres miembro de Unidas?';
  alreadyMember.classList = 'alreadyMember';
  buttonRegister2.textContent = 'Registrarse';
  buttonRegister2.classList = 'buttonRegister2';
  buttonGoogle2.textContent = 'Continuar con Google';
  buttonGoogle2.classList = 'buttonGoogle2';
  welcomeText.textContent = '¡Ingresa tus datos y sé parte de nuestra comunidad!';
  welcomeText.classList = 'welcomeText';
  logoUnidas2.src = './logoUnidas.jpg';
  logoUnidas2.classList = 'logoUnidas2';
  divSinLogo.classList = 'divSinLogo';
  logoUnidasHome.src = './logoUnidasHome.png';
  logoUnidasHome.classList = 'logoUnidasHome';
  unidasLetrasRegister.src = './unidasLetras.png';
  unidasLetrasRegister.classList = 'unidasLetrasRegister';


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
  
  registerDiv.appendChild(cuadroBlancoRegister);
  registerDiv.insertAdjacentElement("beforeend", logoUnidasHome);
  cuadroBlancoRegister.insertAdjacentElement("beforeend", unidasLetrasRegister);
  cuadroBlancoRegister.insertAdjacentElement("beforeend", logoUnidas2);
  cuadroBlancoRegister.insertAdjacentElement("beforeend", divSinLogo);
  divSinLogo.insertAdjacentElement("beforeend", welcomeText);
  divSinLogo.insertAdjacentElement("beforeend", labelFullName);
  divSinLogo.insertAdjacentElement("beforeend", inputFullName);
  divSinLogo.insertAdjacentElement("beforeend", labelEmail);
  divSinLogo.insertAdjacentElement("beforeend", inputEmail);
  divSinLogo.insertAdjacentElement("beforeend", labelPassword);
  divSinLogo.insertAdjacentElement("beforeend", inputPassword);
  divSinLogo.insertAdjacentElement("beforeend", buttonRegister2);
  divSinLogo.insertAdjacentElement("beforeend", buttonGoogle2);
  divSinLogo.insertAdjacentElement("beforeend", alreadyMember);
  divSinLogo.insertAdjacentElement("beforeend", buttonBack);

  return registerDiv;
};

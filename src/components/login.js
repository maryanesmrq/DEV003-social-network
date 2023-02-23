import { auth } from "../lib/firebase.js";
import { registerUserGoogle, loginUser, observador } from "../lib/functionFirebase.js";

export const login = (onNavigate) => {
  const loginDiv = document.createElement('div');
  const cuadroBlanco = document.createElement('div');
  const logoUnidasHome = document.createElement('img');
  const unidasLetras = document.createElement('img');
  const buttonLogin = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const textRegister = document.createElement('h4');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const logoUnidas = document.createElement('img');
  const userNoRegister = document.createElement('div'); 
  
  userNoRegister.id = 'userNoRegister';
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
  inputPassword.type = 'password';

  buttonRegister.addEventListener('click', ()=> {
    onNavigate('/register');
  });
  buttonGoogle.addEventListener('click', ()=> {
    registerUserGoogle();
    onNavigate('/wall');
  });

 
  buttonLogin.addEventListener('click', () => {
    // observador();
    loginUser(inputEmail.value, inputPassword.value).then(() => {
      onNavigate('/wall');
   
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/weak-password'){
        errorMessage.innerHTML = 'Eres débil pinche contraseña, te van a hackear';
      }
      if (errorCode === 'auth/email-already-in-use'){
        errorMessage.innerHTML ='El email ya esta en uso';
      }
      if (errorCode === 'auth/missing-email'){
        errorMessage.innerHTML ='Debes ingresar un email';
      }
      if (errorCode === 'auth/internal-error'){
        errorMessage.innerHTML ='Debes ingresar una contraseña';
      }
      if (errorCode === 'auth/invalid-email'){
        errorMessage.innerHTML ='Debes ingresar una email valido';
      }

      const errorMessage = error.message;
    })
});
      
    //   console.log('succes');
    // } catch (error) {
    //   console.log(error);
    // }
    // console.log(loginUser);
    // let contenido = document.getElementById('userNoRegister');
    
    // if (observador(inputEmail.value, inputPassword.value) === user){
    //   return onNavigate('/wall');
    // } else {
    //   return contenido.innerHTML = 'Usuario no registrado';    
    // };
    
  // });
   
    
  
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
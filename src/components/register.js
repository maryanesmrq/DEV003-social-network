import { registerUser } from "../lib/functionFirebase.js";
import { registerUserGoogle } from "../lib/functionFirebase.js";

export const register = (onNavigate) => {
  const registerDiv = document.createElement('div');
  const title = document.createElement('h2');
  const buttonBack = document.createElement('button');
  const buttonRegister2 = document.createElement('button');
  const buttonGoogle2= document.createElement('button');
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
  labelPassword.textContent = 'Contraseña';
  buttonBack.textContent = '¿Ya eres miembro de Unidas? Iniciar sesión';
  buttonRegister2.textContent = 'Registrarse';
  buttonGoogle2.textContent = 'Continuar con Google';
  title.textContent = '¡Ingresa tus datos y sé parte de nuestra comunidad!';
  logo.src = './logoUnidas.jpg';

  buttonRegister2.addEventListener('click', ()=> {
    registerUser(inputEmail.value, inputPassword.value);
    registerUser.then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert('Si pudiste wey');
      // ...
      onNavigate('/wall');
    })
    registerUser.catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/weak-password'){
        errorMessage.innerHTML = 'Eres débil pinche contraseña, te van a hackear';
      }
      if (errorCode === 'auth/email-already-in-use'){
        errorMessage.innerHTML = 'El email ya esta en uso';
      }
      if (errorCode === 'auth/missing-email'){
        errorMessage.innerHTML = 'Debes ingresar un email';
      }
      if (errorCode === 'auth/internal-error'){
        errorMessage.innerHTML = 'Debes ingresar una contraseña';
      }
      if (errorCode === 'auth/invalid-email'){
        errorMessage.innerHTML = 'Debes ingresar una email valido';
      }

      const errorMessage = error.message;
    });
    
  });
  buttonGoogle2.addEventListener('click', ()=> {
    registerUserGoogle();
    onNavigate('/wall'); 
  });
  buttonBack.addEventListener('click', ()=> {
    onNavigate('/');
  });
  
  registerDiv.appendChild(logo);
  registerDiv.appendChild(title);
  registerDiv.appendChild(labelFullName);
  registerDiv.appendChild(inputFullName);
  registerDiv.appendChild(labelEmail);
  registerDiv.appendChild(inputEmail);
  registerDiv.appendChild(labelPassword);
  registerDiv.appendChild(inputPassword);
  registerDiv.appendChild(buttonRegister2);
  registerDiv.appendChild(buttonGoogle2);
  registerDiv.appendChild(buttonBack);

  return registerDiv;
};


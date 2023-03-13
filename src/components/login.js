// import { auth } from "../lib/firebase.js";
import { registerUserGoogle, loginUser } from '../lib/functionFirebase.js';

export const login = (onNavigate) => {
  const loginDiv = document.createElement('div');
  loginDiv.classList = 'loginDiv';

  const cuadroBlanco = document.createElement('div');
  cuadroBlanco.id = 'cuadroBlanco';
  cuadroBlanco.classList = 'cuadroBlanco';

  const logoUnidasHome = document.createElement('img');
  logoUnidasHome.classList = 'logoUnidasHome';
  logoUnidasHome.src = './logoUnidasHome.png';

  const unidasLetras = document.createElement('img');
  unidasLetras.classList = 'unidasLetras';
  unidasLetras.src = './unidasLetras.png';

  const buttonLogin = document.createElement('button');
  buttonLogin.classList = 'buttonLogin';
  buttonLogin.textContent = 'Iniciar sesión';

  const buttonGoogle = document.createElement('button');
  buttonGoogle.classList = 'buttonGoogle';
  buttonGoogle.textContent = 'Iniciar sesión con Google';

  const buttonRegister = document.createElement('button');
  buttonRegister.classList = 'buttonRegister';
  buttonRegister.textContent = 'Registrate dando click aquí';

  const textRegister = document.createElement('h4');
  textRegister.classList = 'textRegister';
  textRegister.textContent = '¿No tienes cuenta?';

  const inputEmail = document.createElement('input');
  inputEmail.classList = 'inputEmail';
  inputEmail.placeholder = 'Correo electrónico';

  const inputPassword = document.createElement('input');
  inputPassword.classList = 'inputPassword';
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Contraseña';

  const logoUnidas = document.createElement('img');
  logoUnidas.src = './logoUnidas.png';
  logoUnidas.classList = 'logoUnidas';

  const userNoRegister = document.createElement('div');
  userNoRegister.id = 'userNoRegister';

  const alertCorreo = document.createElement('p');
  const alertContrasena = document.createElement('p');
  const alertEmpty = document.createElement('p');

  // inputEmail.id = '';

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });
  buttonGoogle.addEventListener('click', () => {
    registerUserGoogle().then(() => {
      onNavigate('/wall');
    })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/user-not-found') {
          alertCorreo.innerHTML = 'Usuario no registrado';
        }
        if (errorCode === 'auth/wrong-password') {
          alertContrasena.innerHTML = 'Contraseña no coincide con la registrada';
        }
      });
  });

  buttonLogin.addEventListener('click', () => {
    alertContrasena.innerHTML = '';
    alertCorreo.innerHTML = '';
    alertEmpty.innerHTML = '';
    loginUser(inputEmail.value, inputPassword.value).then(() => {
      // window.localStorage();
      // console.log("login -->", result); para que esto funciona el then debe pasar el result
      onNavigate('/wall');
    })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/user-not-found') {
          alertCorreo.innerHTML = 'Usuario no registrado';
        }
        if (errorCode === 'auth/wrong-password') {
          alertContrasena.innerHTML = 'Contraseña no coincide con la registrada';
        } else {
          alertEmpty.innerHTML = 'Ningun campo debe quedar vacío';
        }
      });
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
  loginDiv.appendChild(cuadroBlanco);
  cuadroBlanco.insertAdjacentElement('beforeend', unidasLetras);
  cuadroBlanco.insertAdjacentElement('beforeend', logoUnidas);
  cuadroBlanco.insertAdjacentElement('beforeend', inputEmail);
  cuadroBlanco.insertAdjacentElement('beforeend', alertCorreo);
  cuadroBlanco.insertAdjacentElement('beforeend', inputPassword);
  cuadroBlanco.insertAdjacentElement('beforeend', alertContrasena);
  cuadroBlanco.insertAdjacentElement('beforeend', alertEmpty);
  cuadroBlanco.insertAdjacentElement('beforeend', buttonLogin);
  cuadroBlanco.insertAdjacentElement('beforeend', buttonGoogle);
  cuadroBlanco.insertAdjacentElement('beforeend', textRegister);
  cuadroBlanco.insertAdjacentElement('beforeend', buttonRegister);

  return loginDiv;
};

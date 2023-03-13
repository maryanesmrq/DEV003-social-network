import { registerUser, registerUserGoogle } from '../lib/functionFirebase.js';

export const register = (onNavigate) => {
  const registerDiv = document.createElement('div');
  registerDiv.classList = 'registerDiv';

  const cuadroBlancoRegister = document.createElement('div');
  cuadroBlancoRegister.classList = 'cuadroBlancoRegister';

  const logoUnidasHome = document.createElement('img');
  logoUnidasHome.src = './logoUnidasHome.png';
  logoUnidasHome.classList = 'logoUnidasHome';

  const unidasLetrasRegister = document.createElement('img');
  unidasLetrasRegister.src = './unidasLetras.png';
  unidasLetrasRegister.classList = 'unidasLetrasRegister';

  const welcomeText = document.createElement('h2');
  welcomeText.textContent = '¡Ingresa tus datos y sé parte de nuestra comunidad!';
  welcomeText.classList = 'welcomeText';

  const buttonBack = document.createElement('button');
  buttonBack.textContent = 'Iniciar sesión';
  buttonBack.classList = 'buttonBack';

  const buttonRegister2 = document.createElement('button');
  buttonRegister2.textContent = 'Registrarse';
  buttonRegister2.classList = 'buttonRegister2';

  const buttonGoogle2 = document.createElement('button');
  buttonGoogle2.textContent = 'Continuar con Google';
  buttonGoogle2.classList = 'buttonGoogle2';

  const labelFullName = document.createElement('label');
  labelFullName.textContent = 'Nombre y Apellido';
  labelFullName.classList = 'labelFullName';

  const inputFullName = document.createElement('input');
  inputFullName.id = 'fullName';

  const labelEmail = document.createElement('label');
  labelEmail.textContent = 'Correo electrónico';
  labelEmail.classList = 'labelEmail';

  const inputEmail = document.createElement('input');

  const labelPassword = document.createElement('label');
  labelPassword.textContent = 'Contraseña';
  labelPassword.classList = 'labelPassword';

  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';

  const logoUnidas2 = document.createElement('img');
  logoUnidas2.src = './logoUnidas.png';
  logoUnidas2.classList = 'logoUnidas2';

  const alreadyMember = document.createElement('h4');
  alreadyMember.textContent = '¿Ya eres miembro de Unidas?';
  alreadyMember.classList = 'alreadyMember';

  const divSinLogo = document.createElement('div');
  divSinLogo.classList = 'divSinLogo';

  const alertEmail = document.createElement('p');
  const alertPassword = document.createElement('p');
  const alertEmpty = document.createElement('p');

  buttonRegister2.addEventListener('click', () => {
    alertEmail.innerHTML = '';
    alertPassword.innerHTML = '';
    alertEmpty.innerHTML = '';
    if (inputEmail.value !== '' && inputPassword.value !== '') {
      registerUser(inputEmail.value, inputPassword.value).then(() => {
        onNavigate('/wall');
      })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === 'auth/weak-password') {
            alertPassword.innerHTML = 'La contraseña debe tener más de 6 caracteres';
          }
          if (errorCode === 'auth/email-already-in-use') {
            alertEmail.innerHTML = 'El email ya esta en uso';
          }
          if (errorCode === 'auth/missing-email') {
            alertEmail.innerHTML = 'Debes ingresar un email';
          }
          if (errorCode === 'auth/internal-error') {
            alertPassword.innerHTML = 'Debes ingresar una contraseña';
          }
          if (errorCode === 'auth/invalid-email') {
            alertEmail.innerHTML = 'Debes ingresar un email valido';
          }
        });
    } else {
      alertEmpty.innerHTML = 'Ningun campo debe quedar vacío';
    }
  });
  buttonGoogle2.addEventListener('click', () => {
    registerUserGoogle().then(() => {
      onNavigate('/wall');
    });
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  registerDiv.appendChild(cuadroBlancoRegister);
  registerDiv.insertAdjacentElement('beforeend', logoUnidasHome);
  cuadroBlancoRegister.insertAdjacentElement('beforeend', unidasLetrasRegister);
  cuadroBlancoRegister.insertAdjacentElement('beforeend', logoUnidas2);
  cuadroBlancoRegister.insertAdjacentElement('beforeend', divSinLogo);
  divSinLogo.insertAdjacentElement('beforeend', welcomeText);
  divSinLogo.insertAdjacentElement('beforeend', labelFullName);
  divSinLogo.insertAdjacentElement('beforeend', inputFullName);
  divSinLogo.insertAdjacentElement('beforeend', labelEmail);
  divSinLogo.insertAdjacentElement('beforeend', inputEmail);
  divSinLogo.insertAdjacentElement('beforeend', alertEmail);
  divSinLogo.insertAdjacentElement('beforeend', labelPassword);
  divSinLogo.insertAdjacentElement('beforeend', inputPassword);
  divSinLogo.insertAdjacentElement('beforeend', alertPassword);
  divSinLogo.insertAdjacentElement('beforeend', alertEmpty);
  divSinLogo.insertAdjacentElement('beforeend', buttonRegister2);
  divSinLogo.insertAdjacentElement('beforeend', buttonGoogle2);
  divSinLogo.insertAdjacentElement('beforeend', alreadyMember);
  divSinLogo.insertAdjacentElement('beforeend', buttonBack);

  return registerDiv;
};

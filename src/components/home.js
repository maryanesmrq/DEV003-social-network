// aquí van todas las funcionalidades de la pantalla de inicio (iniciar sesión y registrarse)


export const home = (onNavigate) => {
  const homeDiv = document.createElement('div');
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
  buttonLogin.addEventListener('click', () => {
    onNavigate('/wall');
  });

  homeDiv.appendChild(logo);
  homeDiv.appendChild(title);
  homeDiv.appendChild(inputEmail);
  homeDiv.appendChild(inputPassword);
  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonGoogle);
  homeDiv.appendChild(textRegister);
  homeDiv.appendChild(buttonRegister);
  

  return homeDiv;
};

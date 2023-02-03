// aquí van todas las funcionalidades de la pantalla de inicio (iniciar sesión y registrarse)
export const home = () => {
  const homeDiv = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'Unirse ahora';
  buttonLogin.textContent = 'Iniciar sesión';

  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(buttonLogin);

  return homeDiv;
};

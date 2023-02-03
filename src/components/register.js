const register = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Bienvenida a Unidas. Regístrate ahora';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Regresar al home';

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};

export const login = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Bienvenida a Login';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Regresar al home';

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};

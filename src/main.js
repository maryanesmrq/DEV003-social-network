// Este es el punto de entrada de tu aplicacion
import { home } from './components/home.js';
import { register } from './components/register.js';
import { login } from './components/login.js';
// import { myFunction } from './lib/index.js';

// acceder al nodo
const rootDiv = document.getElementById('root');

// funcion para las rutas
const routes = {
  '/': home,
  '/register': register,
  '/login': login,
};

const component = routes[window.location.pathname];
// insertando appendChild
rootDiv.appendChild = (component);
// myFunction();

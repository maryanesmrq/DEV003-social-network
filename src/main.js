// eslint-disable-next-line max-len
// Este es el punto de entrada de tu aplicacion, aquí vamos a conectar toda la lógica con lo que se imprime
import { home } from './components/home.js';
import { register } from './components/register.js';


// acceder al nodo
const rootDiv = document.getElementById('root');

// funcion para las rutas y lo que debe renderizar
const routes = {
  '/': home,
  '/register': register,
};
// función que permite navegar entre distintos layouts
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  // para que al dar click en iniciar sesión, se elimine la primera carga de Bienvenida
  rootDiv.removeChild(rootDiv.firstChild);
  // insertando appendChild
  rootDiv.appendChild(routes[pathname](onNavigate));
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.removeChild(rootDiv.firstChild);
  rootDiv.append(component(onNavigate));
}
rootDiv.appendChild(component(onNavigate));



// importamos la funcion que vamos a testear
import {
  // eslint-disable-next-line import/named
  login, loginUser, inputEmail, inputPassword, alertEmpty,
} from '../src/components/login.js';

jest.mock('../src/lib/firebase', () => ({ loginUser: () => Promise.reject() }));

// Corroborar que sea una función
describe('login', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
});

// Corroborar que la alerta aparezca en pantalla y sea la correcta
describe('Error', () => {
  it('debería dar error por campos vacíos', () => {
    expect(alertEmpty.innerHTML).toEqual('Ningun campo debe quedar vacío');
  });
});

// Corroborar que al dar clic redireccione a la pantalla correcta
describe('buttonLogin', () => {
  it('debería poder ingresar a wall si el usuario existe', () => {
    expect(loginUser(inputEmail.value, inputPassword.value)).toBeCalled('/wall');
  });
});

// Testear la creación de un div o p de forma correcta llamando al ID o Class
describe('div', () => {
  it('debería corroborar que se cree el div de forma correcta', () => {
    expect(document.getElementById('userNoRegister')).toBe('div');
  });
});

// al dar clic en un boton los eventlistener hagan lo que deba hacer

// que exista y que se hagan los llamados correspondientes

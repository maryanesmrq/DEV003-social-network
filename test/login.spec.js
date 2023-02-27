// importamos la funcion que vamos a testear
import { login } from '../src/components/login.js';
import { loginUser } from '../src/lib/functionFirebase.js';
// import { createdElements } from '../test-data.js';

jest.mock('../src/lib/functionFirebase');

// Corroborar que sea una función
describe('login', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
  it('debería dar error por campos vacíos', () => {
    expect(alertEmpty.innerHTML).toEqual('Ningun campo debe quedar vacío');
  });
  it('debería poder ingresar a wall si el usuario existe', () => {
    expect(loginUser(inputEmail.value, inputPassword.value)).toBeCalled('/wall');
  });
  it('debería corroborar que se cree el div de forma correcta', () => {
    expect(document.getElementById('userNoRegister')).toBe('div');
  });

  // aquí deben ir los testeos de las funciones en login
});

// Corroborar que la alerta aparezca en pantalla y sea la correcta
// describe('Error', () => {

// });

// Corroborar que al dar clic redireccione a la pantalla correcta
// describe('buttonLogin', () => {

// });

// Testear la creación de un div o p de forma correcta llamando al ID o Class
// describe('div', () => {

// });

// al dar clic en un boton los eventlistener hagan lo que deba hacer

// que exista y que se hagan los llamados correspondientes

// comenzar testeando si se crean inputs, botones, informacion

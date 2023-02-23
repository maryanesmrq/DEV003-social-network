// importamos la funcion que vamos a testear
import { login } from '../src/components/login.js';

describe('login', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});

// se puede testear si se creo un div o un p, etc, de forma correcta llamando al ID o Class 

// al dar clic en un boton los eventlistener hagan lo que deba hacer 

// que exista y que se hagan los llamados correspondientes 
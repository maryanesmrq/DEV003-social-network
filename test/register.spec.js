import { register } from '../src/components/register.js';

describe('register', () => {
  it('debería ser una función', () => {
    expect(typeof register).toBe('function');
  });
});

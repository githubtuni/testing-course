import { expect } from 'chai';
import add from '../src/add.js';

describe('add()', () => {
  it('should add two numbers', () => {
    expect(add(2, 3)).to.equal(5);
  });
});

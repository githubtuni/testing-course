import { expect } from 'chai';
import compact from '../src/compact.js';

describe('compact()', () => {
    it('should remove all falsey values from a mixed array', () => {
        const arr = [1, "", 0, false, 5, null, undefined, NaN, 'hello', true];
        expect(compact(arr)).to.deep.equal([1, 5, 'hello', true]);
    });
    
    it('should return an empty array when all values are falsey', () => {
        const input = [0, false, '', null, undefined, NaN];
        expect(compact(input)).to.deep.equal([]);
    });

    it('should return the same array if no falsey values', () => {
        const input = [1, 'a', true];
        expect(compact(input)).to.deep.equal([1, 'a', true]);
    });

    it('should return an empty array when input is empty', () => {
        expect(compact([])).to.deep.equal([]);
    });
});

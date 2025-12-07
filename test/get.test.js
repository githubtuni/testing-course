import { expect } from 'chai';
import get from '../src/get.js';

describe ('get()', () => {
    const object1 = { 'x': [{ 'y': { 'z': 15 } }] }
    const object2 = { 'x': 12}
    const object3 = { 'x': undefined }

    it('should get a valid object with string as path', () => {
        const result = get(object1, 'x[0].y.z')
        expect(result).to.equal(15)
    });

    it('should get a valid object with array as path', () => {
        const result = get(object1, ['x', '0', 'y', 'z'])
        expect(result).to.equal(15)
    });

    it('should get a valid object with no value in path', () => {
        const result = get(object1, 'x.y.z', 'default')
        expect(result).to.equal('default')
    });

    it('should get a valid object with no nesting', () => {
        const result = get(object2, 'x',)
        expect(result).to.equal(12)
    });

    it('should get a valid object with a nonexisting array index', () => {
        const result = get(object1, 'x[1].y.z', 'default')
        expect(result).to.equal('default')
    });

    it('should get a valid object with an undefined value', () => {
        const result = get(object3, 'x', 'default')
        expect(result).to.equal('default')
    });

    it('should get a valid object with an empty path', () => {
        const result = get(object1, '', 'default')
        expect(result).to.equal('default')
    });

    it('should return default value when object is null', () => {
        const result = get(null, 'path', 'default')
        expect(result).to.equal('default')
    });
});
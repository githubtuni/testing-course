import { expect } from 'chai';
import reduce from '../src/reduce.js';

describe('reduce()', () => {

    it("should reduce an array of integers with a provided accumulator", () => {
        const result = reduce([1, 2, 3], (sum, n) => sum + n, 1);
        expect(result).to.equal(7);
    });

    it("should handle floating point summation accurately", () => {
        const result = reduce([0.1, 0.2, 0.3], (sum, n) => sum + n, 0);
        expect(result).to.be.closeTo(0.6, 0.0001);
    });

    it("should reduce an array with zero and negative numbers without accumulator", () => {
        const result = reduce([0, -1, -2], (sum, n) => sum + n);
        expect(result).to.equal(-3); 
    });

    it("should use first element as accumulator when none is provided", () => {
        const result = reduce([1, 2, 3], (sum, n) => sum + n);
        expect(result).to.equal(6);
    });

    it("should work with substraction", () => {
        const result = reduce([10, 1, 1], (acc, n) => acc - n);
        expect(result).to.equal(8);
    });

    it('should reduce an object using its values', () => {
        const obj = {a: 1.80, b: 2.64, c: 3.72};
        const result = reduce(obj, (sum, val) => sum + val, 0);
        expect(result).to.equal(8.16);
    });

    it('should allow accumulator to be an object', () => {
        const obj = {a: 1, b: 2, c: 1};
        const result = reduce(obj, (res, val, key) => {
            (res[val] || (res[val] = [])).push(key);
            return res;
        }, {});

        expect(result).to.deep.equal({
            1: ['a', 'c'],
            2: ['b']
        });
    });

    it("should handle an empty object with accumulator", () => {
        const result = reduce({}, (sum, val) => sum + val, 10);
        expect(result).to.equal(10);
    });

    it("should return undefined for an empty object with no accumulator", () => {
        const result = reduce({}, (sum, val) => sum + val);
        expect(result).to.equal(undefined);
    });

    it("should handle summing up an array with string and integer without an accumulator", () => {
        const result = reduce(["hello", 9], (sum, n) => sum + n);
        expect(result).to.equal("hello9");
    });

    it("should reduce an array with strings with an accumulator", () => {
        const result = reduce(["hello", "hi"], (sum, n) => sum + n, 1);
        expect(result).to.equal("1hellohi");
    });

    it('should return undefined for an empty array with no accumulator', () => {
        const result = reduce([], x => x);
        expect(result).to.equal(undefined);
    });

    it('should return accumulator for an empty when accumulator is provided', () => {
        const result = reduce([], x => x, 100);
        expect(result).to.equal(100);
    });

    it('should handle null collection', () => {
        const result = reduce(null, x => x, 3);
        expect(result).to.equal(3);
    });

    it('should handle undefined collection', () => {
        const result = reduce(undefined, x => x, 3);
        expect(result).to.equal(3);
    });

    it("should reduce strings as iterable collections", () => {
        const result = reduce("abc", (acc, ch) => acc + ch, "");
        expect(result).to.equal("abc");
    });
})
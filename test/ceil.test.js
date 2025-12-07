import { expect } from 'chai';
import ceil from '../src/ceil.js';

describe('ceil()', () => {

    it("should return a positive integer when no precision", () => {
        expect(ceil(5)).to.equal(5);
    });

    it("should return a negative integer when no precision", () => {
        expect(ceil(-5)).to.equal(-5);
    });

    it("should round up a positive number to 0 decimals", () => {
        expect(ceil(2.5, 0)).to.equal(3);
    });

    it("should round up a negative number to 0 decimals", () => {
        expect(ceil(-2.5, 0)).to.equal(-2);
    });

    it("should return 0 for any precision when number is 0", () => {
        expect(ceil(0, 2)).to.equal(0);
    });

    it("should round up a positive decimal number to the next integer when no precision", () => {
        expect(ceil(2.0009)).to.equal(3);
    });

    it("should round up a negative decimal number to the next integer", () => {
        expect(ceil(-2.0009)).to.equal(-2);
    });

    it("should round up a positive decimal number to given number of decimals", () => {
        expect(ceil(2.1234, 2)).to.equal(2.13);
    });

    it("should round up a negative decimal number to given number of decimals", () => {
        expect(ceil(-2.1234, 2)).to.equal(-2.12);
    });

    it("should round up a positive number to the next hundred when precision is negative", () => {
        expect(ceil(6040, -2)).to.equal(6100);
    });

    it("should return 0 when no precision is provided for zero", () => {
        expect(ceil(0)).to.equal(0);
    });

    it("should handle precision larger than number of decimals in a positive number", () => {
        expect(ceil(2.1, 10)).to.equal(2.1);
    });

    it("should handle precision larger than number of decimals in a negative number", () => {
        expect(ceil(-2.1, 10)).to.equal(-2.1);
    });






   

})
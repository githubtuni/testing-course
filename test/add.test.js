import { expect } from 'chai';
import add from '../src/add.js';

describe("add()", () => {

  it("should add two positive numbers", () => {
    expect(add(5, 10)).to.equal(15);
  });
  
  it("should add a negative and a positive number", () => {
    expect(add(4, -3)).to.equal(1);
  });

  it("should correctly add two negative numbers", () => {
    expect(add(-4, -3)).to.equal(-7);
  });

  it("should handle number and string by concatenation when one parameter is a string", () => {
    expect(add(5, "5")).to.equal("55");
  });

  it("should correctly add floating point numbers", () => {
    expect(add(0.1, 0.2)).to.be.closeTo(0.3, 0.0001);
  });

  it("should return the number when adding zero", () => {
    expect(add(6, 0)).to.equal(6);
  });

  it("should concatenate two strings if both arguments are strings", () => {
    expect(add("First", "Second")).to.equal("FirstSecond");
  });

  it("should treat null as 0 when adding", () => {
    expect(add(null, 5)).to.equal(5);
  });

  it("should return default value 0 when both arguments are undefined", () => {
    expect(add(undefined, undefined)).to.equal(0);
  });

  it("should return the number when only one argument is provided (undefined treated as default)", () => {
    expect(add(4, undefined)).to.equal(4);
  });

});

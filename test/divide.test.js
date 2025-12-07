import {expect} from "chai";
import divide from "../src/divide.js";

describe("divide()", () => {

  it("should correctly divide two positive numbers", () => {
    expect(divide(10, 2)).to.equal(5);
  });

  it("should correctly divide two negative numbers", () => {
    expect(divide(-10, -2)).to.equal(5);
  });

  it("should correctly divide a positive number by a negative number", () => {
    expect(divide(10, -2)).to.equal(-5);
  });

  it("should correctly divide a negative number by a positive number", () => {
    expect(divide(-10, 2)).to.equal(-5);
  });

  it("should return 0 when 0 is divided by any non-zero number", () => {
    expect(divide(0, 5)).to.equal(0);
  });

  it("should handle division with floating point numbers", () => {
    expect(divide(0.3, 0.1)).to.be.closeTo(3, 0.0001);
  });

  it("should treat null as 0 when dividing", () => {
    expect(divide(null, 5)).to.equal(0);
  });

  it("should return default value 1 when both arguments are undefined", () => {
    expect(divide(undefined, undefined)).to.equal(1);
  });

  it("should return the number when numerator is provided and denominator is undefined", () => {
    expect(divide(4, undefined)).to.equal(4);
  });

  it("should return infinity when divided by 0)", () => {
    expect(divide(5, 0)).to.equal(Infinity);
  });

});

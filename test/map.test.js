import {expect} from "chai";
import divide from "../src/divide.js";
import add from "../src/add.js";
import map from "../src/map.js";

describe("map()", () => {

  it("should correctly apply a function to all numbers in an array", () => {
    const arr = [1, 2, 3];
    const result = map(arr, (x) => add(x, 2));
    expect(result).to.deep.equal([3, 4, 5]);
  });

  it("should correctly apply division function to all numbers", () => {
    const arr = [10, 20, 30];
    const result = map(arr, (x) => divide(x, 2));
    expect(result).to.deep.equal([5, 10, 15]);
  });

  it("should return an empty array when input is an empty array", () => {
    const arr = [];
    const result = map(arr, (x) => add(x, 1));
    expect(result).to.deep.equal([]);
  });

  it("should return empty array when input is null", () => {
    const result = map(null, (x) => add(x, 1));
    expect(result).to.deep.equal([]);
  });

  it("should return empty array when input is undefined", () => {
    const result = map(undefined, (x) => add(x, 1));
    expect(result).to.deep.equal([]);
  });

  it("should handle arrays of size 1 correctly", () => {
    const arr = [5];
    const result = map(arr, (x) => x * 2);
    expect(result).to.deep.equal([10]);
  });

  it("should handle arrays of size n correctly", () => {
    const arr = [0, 1, 2, 3, 4, 5];
    const result = map(arr, (x) => add(x, 1));
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6]);
  });

  it("should handle array with null or undefined elements", () => {
    const arr = [1, null, undefined, 4];
    const result = map(arr, (x) => x ?? 0);
    expect(result).to.deep.equal([1, 0, 0, 4]);
  });

});

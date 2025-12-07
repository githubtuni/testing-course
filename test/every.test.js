import {expect} from "chai";
import every from "../src/every.js";

function isEven(x) {
    return x % 2 === 0;
}

describe("every()", () => {

  it("should return true if all values satisfy the predicate", () => {
    const arr = [2, 4, 6, 8];
    expect(every(arr, isEven)).to.equal(true);
  });

  it("should return false if only some values satisfy the predicate", () => {
    const arr = [2, 3, 4];
    expect(every(arr, isEven)).to.equal(false);
  });

  it("should return false if none of the values satisfy the predicate", () => {
    const arr = [1, 3, 5];
    expect(every(arr, isEven)).to.equal(false);
  });

  it("should return true for an empty array", () => {
    const arr = [];
    expect(every(arr, isEven)).to.equal(true);
  });

  it("should return true if all values are inferred as true", () => {
    const arr = [1, "yes", true];
    expect(every(arr, Boolean)).to.equal(true);
  });

  it("should return false if some values are false", () => {
    const arr = [1, 0, "yes", null];
    expect(every(arr, Boolean)).to.equal(false);
  });

  it("should return true for null", () => {
    expect(every(null, Boolean)).to.equal(true);
  });

  it("should return true for undefined input", () => {
    expect(every(undefined, Boolean)).to.equal(true);
  });

});

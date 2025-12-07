import { expect } from "chai"
import isEmpty from "../src/isEmpty.js"

describe("isEmpty() basic cases", () => {
  it("returns true for null", () => {
    expect(isEmpty(null)).to.equal(true)
  })

  it("returns true for boolean", () => {
    expect(isEmpty(Boolean)).to.equal(true)
  })

  it("returns true for number", () => {
    expect(isEmpty(Number)).to.equal(true)
  })

  it("returns false for non-empty array [1, 2, 3]", () => {
    expect(isEmpty([1, 2, 3])).to.equal(false)
  })

  it("returns false for non-empty string abc", () => {
    expect(isEmpty("abc")).to.equal(false)
  })

  it("returns false for non-empty object { a: 1 }", () => {
    expect(isEmpty({ a: 1 })).to.equal(false)
  })

  it("returns true for undefined", () => {
    expect(isEmpty(undefined)).to.equal(true)
  })

  it("returns true for plain object", () => {
    expect(isEmpty({})).to.equal(true)
  })

  it("returns true for empty array", () => {
    expect(isEmpty([])).to.equal(true)
  })

  it("returns true for empty map", () => {
    expect(isEmpty(new Map())).to.equal(true)
  })

  it("returns false for a populated map", () => {
    expect(isEmpty(new Map([["key", "value"]]))).to.equal(false)
  })

  it("returns true for empty Buffer", () => {
    expect(isEmpty(Buffer.from(""))).to.equal(true)
  })

  it("returns false for non-empty Buffer", () => {
    expect(isEmpty(Buffer.from("buffer"))).to.equal(false)
  })

  it("returns true for empty set", () => {
    expect(isEmpty(new Set())).to.equal(true)
  })

  it("returns false for non-empty set", () => {
    expect(isEmpty(new Set(["a", "b", "c"]))).to.equal(false)
  })

})

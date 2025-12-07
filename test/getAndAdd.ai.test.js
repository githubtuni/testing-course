import { expect } from 'chai'
import add from '../src/add.js'
import get from '../src/get.js'


describe('add()', () => {

  it('adds two numbers correctly', () => {
    expect(add(6, 4)).to.equal(10)
  })

  it('returns default (0) when both values are undefined', () => {
    expect(add()).to.equal(0)
  })

  it('returns value when only "other" is undefined', () => {
    expect(add(5)).to.equal(5)
  })

  it('returns other when only "value" is undefined', () => {
    expect(add(undefined, 7)).to.equal(7)
  })

  it('converts string inputs to string concatenation', () => {
    expect(add('5', '5')).to.equal('55')
  })

  it('converts number + string to string concatenation', () => {
    expect(add(5, '5')).to.equal('55')
  })

  it('converts string + number to string concatenation', () => {
    expect(add('5', 5)).to.equal('55')
  })

  it('handles decimal addition with tolerance', () => {
    expect(add(0.1, 0.2)).to.be.closeTo(0.3, 0.0001)
  })

  it('returns NaN if non-numeric values are used without strings', () => {
    expect(add(true, {})).to.be.NaN
  })

  it('converts booleans to numbers when no strings involved', () => {
    expect(add(true, 3)).to.equal(4) // true → 1
  })

  it('propagates NaN correctly', () => {
    expect(add(NaN, 5)).to.be.NaN
  })

  it('handles zero values properly', () => {
    expect(add(0, 5)).to.equal(5)
    expect(add(0, 0)).to.equal(0)
  })

  it('handles null values via baseToNumber (null → 0)', () => {
    expect(add(null, 5)).to.equal(5)
  })

})


describe('get()', () => {
  const obj = {
    a: [
      {
        b: {
          c: 3,
          arr: [10, 20]
        }
      }
    ],
    d: undefined
  }

  it('retrieves nested values via string path', () => {
    expect(get(obj, 'a[0].b.c')).to.equal(3)
  })

  it('retrieves nested values via array path', () => {
    expect(get(obj, ['a', '0', 'b', 'c'])).to.equal(3)
  })

  it('returns undefined when path does not exist (no default fallback)', () => {
    expect(get(obj, 'a.b.c')).to.equal(undefined)
  })

  it('returns default value when provided and result is undefined', () => {
    expect(get(obj, 'a.b.c', 'fallback')).to.equal('fallback')
  })

  it('returns default value when property exists but contains undefined', () => {
    expect(get(obj, 'd', 'default')).to.equal('default')
  })

  it('correctly reads array indices', () => {
    expect(get(obj, 'a[0].b.arr[1]')).to.equal(20)
  })

  it('handles root-level access', () => {
    expect(get(obj, 'a')).to.deep.equal(obj.a)
  })

  it('returns undefined when object is nullish & no default provided', () => {
    expect(get(null, 'a.b')).to.equal(undefined)
    expect(get(undefined, 'a.b')).to.equal(undefined)
  })

  it('returns default when object is nullish', () => {
    expect(get(null, 'a.b', 'missing')).to.equal('missing')
  })

  it('coerces numeric string keys properly via toKey()', () => {
    const example = { 1: 'value' }
    expect(get(example, '1')).to.equal('value')
  })

  it('returns nested arrays correctly using a string key path', () => {
    const example = { arr: ['x', { y: 'z' }] }
    expect(get(example, 'arr[1].y')).to.equal('z')
  })

  it('returns undefined when accessing index out of range', () => {
    expect(get(obj, 'a[3].b')).to.equal(undefined)
  })
})

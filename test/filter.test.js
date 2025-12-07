import { expect } from 'chai';
import filter from '../src/filter.js';

describe('filter()', () => {

    it('should return all values matching predicate', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': true }
        ]

        const result = filter(users, ({ active }) => active)
        expect(result).to.deep.equal([{ user: 'barney', active: true }, 
                                      { user: 'fred', active: true }])
    })

    it('should return only the values matching predicate', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false }
        ]

        const result = filter(users, ({ active }) => active)
        expect(result).to.deep.equal([{ user: 'barney', active: true }])
    })

    it('should return an empty array if no predicate is a match', () => {
        const users = [
            { 'user': 'barney', 'active': false },
            { 'user': 'fred',   'active': false }
        ] 

        const result = filter(users, ({ active }) => active)
        expect(result).to.deep.equal([])
    })

    it('should return an empty array if array is empty', () => {
        const users = [] 
        
        const result = filter(users, ({ active }) => active)
        expect(result).to.deep.equal([])
    })

    it('should return an empty array if array is null', () => {
        const users = null 
        
        const result = filter(users, ({ active }) => active)
        expect(result).to.deep.equal([])
    })

    it('should filter based on index', () => {
        const users = ['a', 'b', 'c', 'd']        

        const result = filter(users, (val, idx) => idx % 2 === 0)
        expect(result).to.deep.equal(['a', 'c'])
    })
});

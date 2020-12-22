import { expect } from 'chai'
import { converter } from './converter'

describe('Converter Test', () => {
    it('returns "invalid value", if input value is null', ()=>{
        const expected = "Invalid value!";
        const actual = converter();
        expect(expected).to.equal(actual);
    })

    it('returns "invalid value", if input is bigger than 10 000', ()=>{
        const expected = "Invalid value!";
        const actual = converter(10001);
        expect(expected).to.equal(actual);
    })

    it('returns "invalid value", if input is smaller than 0', ()=>{
        const expected = "Invalid value!";
        const actual = converter(-20);
        expect(expected).to.equal(actual);
    })

    it('returns "invalid value", if input is not a number', ()=>{
        const expected = "Invalid value!";
        const actual = converter('10');
        expect(expected).to.equal(actual);
    })

    it('returns "invalid value", if input is not a number', ()=>{
        const expected = "Invalid value!";
        const actual = converter('abc');
        expect(expected).to.equal(actual);
    })

    it('returns a known calculated value for a given input', ()=>{
        const expected = "MCMLXXXVII";
        const actual = converter(1987);
        expect(expected).to.equal(actual);
    })
})
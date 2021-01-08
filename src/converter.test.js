import { expect } from 'chai'
import { converter } from './converter'

describe('Converter Test', () => {
    it('returns "invalid tpye error", if input value is null', ()=>{
        const expected = "Invalid type undefined, only number supported";
        const actual = converter();
        expect(expected).to.equal(actual);
    })

    it('returns "invalid value", if input is bigger than 10 000 (above upper treshold)', ()=>{
        const expected = "Invalid value, the number can be between 1-10.000";
        const actual = converter(10001);
        expect(expected).to.equal(actual);
    })

    it('returns "invalid value", if input is smaller than 1 (below lower treshold)', ()=>{
        const expected = "Invalid value, the number can be between 1-10.000";
        const actual = converter(0);
        expect(expected).to.equal(actual);
    })

    it('returns Invalid type string, only number supported', ()=>{
        const expected = "Invalid type string, only number supported";
        const actual = converter('10');
        expect(expected).to.equal(actual);
    })

    it('returns a known calculated value for a given input', ()=>{
        const expected = "MCMLXXXVII";
        const actual = converter(1987);
        expect(expected).to.equal(actual);
    })

    it('returns the upper treshold', ()=>{
        const expected = "MMMMMMMMMM";
        const actual = converter(10000);
        expect(expected).to.equal(actual);
    })

    it('returns the lower treshold', ()=>{
        const expected = "I";
        const actual = converter(1);
        expect(expected).to.equal(actual);
    })

    it('testing Switch statement 1st case LowerTreshold', ()=>{
        const expected = "V";
        const actual = converter(5);
        expect(expected).to.equal(actual);
    })

    it('testing Switch statement 1st case ValueBetween', ()=>{
        const expected = "VI";
        const actual = converter(6);
        expect(expected).to.equal(actual);
    })


    it('testing Switch statement 1st case UpperTreshold', ()=>{
        const expected = "VIII";
        const actual = converter(8);
        expect(expected).to.equal(actual);
    })

    it('testing Switch statement 2nd case LT', ()=>{
        const expected = "I";
        const actual = converter(1);
        expect(expected).to.equal(actual);
    })

    it('testing Switch statement 2nd case VB', ()=>{
        const expected = "II";
        const actual = converter(2);
        expect(expected).to.equal(actual);
    })

    it('testing Switch statement 2nd case UT', ()=>{
        const expected = "III";
        const actual = converter(3);
        expect(expected).to.equal(actual);
    })
})
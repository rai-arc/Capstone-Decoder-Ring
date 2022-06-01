// Write your tests here!

const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() submission tests written by student", () => {
    describe('improper shift values', () => {
        it('should return false if shift value === 0', () => {
            const actual = caesar("message", 0);
            expect(actual).to.be.false;
        });
        it('should return false if shift value < -25', () => {
            const actual = caesar("message", -26);
            expect(actual).to.be.false;
        });
        it('should return false if shift value > 25', () => {
            const actual = caesar("message", 26);
            expect(actual).to.be.false;
        });
        it('should return false if no shift value is present', () => {
            const actual = caesar("message");
            expect(actual).to.be.false;
        });
    });
    
    describe('special characters', () => {
        it('should return lowercase letters/ignores capital letters ', () => {
            const actual = caesar("MESSAGE", 3);
            const expected = "phvvdjh";
            expect(actual).to.equal(expected);
        });
        it('should shift letters through the alphabet when encoding', () => {
            const actual = caesar("message", 4);
            const expected = "qiwweki";
            expect(actual).to.equal(expected);
        });
        it('should shift letters through the alphabet when decoding', () => {
            const actual = caesar("qiwweki", 4, false);
            const expected = "message";
            expect(actual).to.equal(expected);
        });
        it('should maintain spaces and other non-alphabet symbols when encoding', () => {
            const actual = caesar("my 1 message!!", 4);
            const expected = "qc 1 qiwweki!!";
            expect(actual).to.equal(expected);
        });
        it('should maintain spaces and other non-alphabet symbols when decoding', () => {
            const actual = caesar("qc 1 qiwweki!!", 4, false);
            const expected = "my 1 message!!";
            expect(actual).to.equal(expected);
        });
    })
});
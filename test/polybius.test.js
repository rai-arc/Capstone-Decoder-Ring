// Write your tests here!

const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() submission tests written by student", () => {
    describe('dealing with i and j', () => {
        it('should translate letters i and j to 42', () => {
            const actual = polybius("i joke");
            const expected = "42 42435251"
            expect(actual).to.equal(expected);
        });
        it('should translate letters 42 to i/j', () => {
            const actual = polybius("42 42435251", false);
            const expected = "i/j i/joke"
            expect(actual).to.equal(expected);
        });
    });
    describe('special characters', () => {
        it('should ignore capital letters', () => {
            const actual = polybius("HELLO hello");
            const expected = "3251131343 3251131343"
            expect(actual).to.equal(expected);
        });
        it('should maintain spaces before and after encoding', () => {
            const actual = polybius("encode me");
            const expected = "513331434151 2351"
            expect(actual).to.equal(expected);
        });
        it('should maintain spaces before and after decoding', () => {
            const actual = polybius("415131434151 2351", false);
            const expected = "decode me"
            expect(actual).to.equal(expected);
        });
    });
});

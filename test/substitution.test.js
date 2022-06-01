// Write your tests here!

const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() submission tests written by student", () => {
    describe('alphabet related tests', () => {
        it('returns false if the alphabet is not exactly 26 characters long', () => {
            const actual = substitution("message", "asdlkeqw");
            expect(actual).to.be.false;
        });
        it('returns false if the alphabet has dulplicate characters', () => {
            const actual = substitution("message", "asdfghjklqwertyuiopzxcvbna");
            expect(actual).to.be.false;
        });
        it('should correctly encode a given phrase with the alphabet', () => {
            const actual = substitution("message", "qwertyuiopasdfghjklzxcvbnm");
            const expected = "dtllqut";
            expect(actual).to.equal(expected);
        });
        it('should correctly decode a given phrase with the alphabet', () => {
            const actual = substitution("dtllqut", "qwertyuiopasdfghjklzxcvbnm", false);
            const expected = "message";
            expect(actual).to.equal(expected);
        });
    });
    describe('special characters', () => {
        it('should maintain spaces before and after encoding', () => {
            const actual = substitution("hello world", "qwertyuiopasdfghjklzxcvbnm");
            const expected = "itssg vgksr";
            expect(actual).to.equal(expected)
        });
        it('should maintain spaces before and after decoding', () => {
            const actual = substitution("itssg vgksr", "qwertyuiopasdfghjklzxcvbnm", false);
            const expected = "hello world";
            expect(actual).to.equal(expected)
        });
        it('should ignore capitals before and after encoding', () => {
            const actual = substitution("HELLO hello", "qwertyuiopasdfghjklzxcvbnm");
            const expected = "itssg itssg";
            expect(actual).to.equal(expected)
        });
        it('should ignore capitals before and after decoding', () => {
            const actual = substitution("ITSSG itssg", "qwertyuiopasdfghjklzxcvbnm", false);
            const expected = "hello hello";
            expect(actual).to.equal(expected)
        });
    });
});
import { expect } from 'chai';

describe('Test Framework', () => {
    it('is configured correctly', () => {
        expect(1).to.equal(1);
    });
});

describe('Is Palindrome', ()=> {
    it('exists', () => {
        expect(isPalindrome).to.exist;
    });

    it('a single letter is a palindrome', () => {
        // arrange
        const value = 'a';
       
        // act
        const result = isPalindrome(value);
       
        // assert
        expect(result).to.be.true;
      });
});

function isPalindrome() {
    return true;
}

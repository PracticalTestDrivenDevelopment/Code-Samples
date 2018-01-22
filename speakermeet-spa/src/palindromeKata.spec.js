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
});

function isPalindrome() {
    
}

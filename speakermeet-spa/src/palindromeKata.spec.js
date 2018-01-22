import { expect } from 'chai';

describe('Test Framework', () => {
  it('is configured correctly', () => {
    expect(1).to.equal(1);
  });
});

describe('Is Palindrome', () => {
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

  it('two non-matching letters is not a palindrome', () => {
    // arrange
    const value = 'at';

    // act
    const result = isPalindrome(value);

    // assert
    expect(result).to.be.false;
  });
});

function isPalindrome(value) {
  if (value.length === 1) {
    return true;
  }

  return false;
}

const { isOddOrEven } = require('../02.isOddOrEven');
const { expect } = require('chai');

describe("isOddOrEven test", () => {
  it('Test for string', () => {
    expect(isOddOrEven(5)).to.be.undefined;
  });
  it('string to be even', () => {
    expect(isOddOrEven('string')).to.be.equal('even');
  });
  it('string to be odd', () => {
    expect(isOddOrEven('nechetn')).to.be.equal('odd');
  });

});

const { lookupChar } = require('../03.charLookUp');
const { expect } = require('chai');

describe('charLookUp', () => {
  it('index is not floating point', () => {
    expect(lookupChar('four', 2.5)).to.be.undefined;
  });
  it('first parameter is not a string', () => {
    expect(lookupChar(5, 2)).to.be.undefined;
  });
  it('second argument is not a number', () => {
    expect(lookupChar('alex', '1')).to.be.undefined;
  });
  it('index is not greater that str.length', () => {
    expect(lookupChar('four', 4)).to.be.equal('Incorrect index')
  });
  it('index is not greater that str.length', () => {
    expect(lookupChar('four', -4)).to.be.equal('Incorrect index')
  });
  it('test and 2 should return s', () => {
    expect(lookupChar('test',2)).to.be.equal('s');
  });
});

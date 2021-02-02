const { expect } = require('chai');
const { mathEnforcer } = require('../04.mathEnforcer');

describe('mathEnforcer', () => {
  describe('addFive', () => {
    it('should return correct result with a non-number parameter', () => {
      expect(mathEnforcer.addFive('5')).to.be.undefined;
    });
    it('should return correct result with a number parameter', () => {
      expect(mathEnforcer.addFive(5)).to.equal(10);
    });
    it('should return correct result with a floating point number parameter', () => {
      expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
    });
    it('should return correct result with a negative number parameter', () => {
      expect(mathEnforcer.addFive(-10)).to.equal(-5);
    });
    it('should return correct result with a zero number parameter', () => {
      expect(mathEnforcer.addFive(0)).to.equal(5);
    });

  });
  describe('substractTen', () => {
    it('should return correct result with a non-number parameter', () => {
      expect(mathEnforcer.subtractTen('5')).to.be.undefined;
    });
    it('should return correct negative result with a smaller number parameter', () => {
      expect(mathEnforcer.subtractTen(5)).to.equal(-5);
    });
    it('should return correct result with a number parameter', () => {
      expect(mathEnforcer.subtractTen(15)).to.equal(5);
    });
    it('should return correct result with a floating point number parameter', () => {
      expect(mathEnforcer.subtractTen(15.5)).to.equal(5.5);
    });
    it('should return correct result with a negative number parameter', () => {
      expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
    });
  });
  describe('sum', () => {
    it('should return correct result with a non-number parameter', () => {
      expect(mathEnforcer.sum('5', 5)).to.be.undefined;
    });
    it('should return correct result with a non-number parameter', () => {
      expect(mathEnforcer.sum(5, '5')).to.be.undefined;
    });
    it('should return correct result with a number parameter', () => {
      expect(mathEnforcer.sum(5, 5)).to.equal(10);
    });
    it('should return correct result with one negative number parameter', () => {
      expect(mathEnforcer.sum(5, -5)).to.equal(0);
    });
    it('should return correct result with one floating point number parameter', () => {
      expect(mathEnforcer.sum(5, 5.5)).to.equal(10.5);
    });
    it('should return correct result with two floating point numbers parameter', () => {
      expect(mathEnforcer.sum(1.005,1.005)).to.equal(2.01);
    });
  });
});
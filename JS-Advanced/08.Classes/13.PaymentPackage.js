// const { describe } = require('mocha');
const { expect } = require('chai');

class PaymentPackage {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.VAT = 20;      // Default value    
    this.active = true; // Default value
  }

  get name() {
    return this._name;
  }

  set name(newValue) {
    if (typeof newValue !== 'string') {
      throw new Error('Name must be a non-empty string');
    }
    if (newValue.length === 0) {
      throw new Error('Name must be a non-empty string');
    }
    this._name = newValue;
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    if (typeof newValue !== 'number') {
      throw new Error('Value must be a non-negative number');
    }
    if (newValue < 0) {
      throw new Error('Value must be a non-negative number');
    }
    this._value = newValue;
  }

  get VAT() {
    return this._VAT;
  }

  set VAT(newValue) {
    if (typeof newValue !== 'number') {
      throw new Error('VAT must be a non-negative number');
    }
    if (newValue < 0) {
      throw new Error('VAT must be a non-negative number');
    }
    this._VAT = newValue;
  }

  get active() {
    return this._active;
  }

  set active(newValue) {
    if (typeof newValue !== 'boolean') {
      throw new Error('Active status must be a boolean');
    }
    this._active = newValue;
  }

  toString() {
    const output = [
      `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
      `- Value (excl. VAT): ${this.value}`,
      `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
    ];
    return output.join('\n');
  }
}

describe("PaymentPackage", () => {
  let instance = undefined;

  beforeEach(() => {
    // runs before each test in this block
    instance = new PaymentPackage('Name', 100);
  });

  it("Constructor", () => {
    expect(instance.name).to.be.equal('Name');
    expect(instance.value).to.be.equal(100);
    expect(instance.VAT).to.be.equal(20);
    expect(instance.active).to.be.true;
  });

  it("Name", () => {
    instance.name = 'Testo';
    expect(instance.name).to.be.equal('Testo');
    expect(() => { instance.name = 5 }).to.throw(Error, 'Name must be a non-empty string');
    expect(() => { instance.name = '' }).to.throw(Error, 'Name must be a non-empty string')
  });
  it("Value", () => {
    instance.value = 20;
    expect(instance.value).to.equal(20);
    expect(() => { instance.value = '5' }).to.throw(Error, 'Value must be a non-negative number');
    expect(() => { instance.value = -2 }).to.throw(Error, 'Value must be a non-negative number');
    expect(() => { instance.value = 0 }).to.not.throw(Error);
  });
  it("VAT", () => {
    instance.VAT = 30;
    expect(instance.VAT).to.equal(30);
    expect(() => { instance.VAT = '5' }).to.throw(Error, 'VAT must be a non-negative number');
    expect(() => { instance.VAT = -2 }).to.throw(Error, 'VAT must be a non-negative number');
    expect(() => { instance.VAT = 0 }).to.not.throw(Error);
  });
  it("Active", () => {
    instance.active = false;
    expect(() => { instance.active = '5' }).to.throw(Error, 'Active status must be a boolean');
    expect(() => { instance.active = 0 }).to.throw(Error, 'Active status must be a boolean');
    expect(() => { instance.active = -5 }).to.throw(Error, 'Active status must be a boolean');
    expect(() => { instance.active = [] }).to.throw(Error, 'Active status must be a boolean');
  });
  it("toString", () => {
    function result(name, value, VAT = 20, active = true) {
      return [
        `Package: ${name}` + (active === false ? ' (inactive)' : ''),
        `- Value (excl. VAT): ${value}`,
        `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`
      ].join('\n');
    }
    expect(instance.toString()).to.equal(result('Name',100));
    instance.VAT = 25;
    expect(instance.toString()).to.equal(result('Name',100,25,true));
  });

});




const { expect } = require('chai');

let pizzUni = {
  makeAnOrder: function (obj) {

    if (!obj.orderedPizza) {
      throw new Error('You must order at least 1 Pizza to finish the order.');
    } else {
      let result = `You just ordered ${obj.orderedPizza}`
      if (obj.orderedDrink) {
        result += ` and ${obj.orderedDrink}.`
      }
      return result;
    }
  },

  getRemainingWork: function (statusArr) {

    const remainingArr = statusArr.filter(s => s.status != 'ready');

    if (remainingArr.length > 0) {

      let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
      let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

      return pizzasLeft;
    } else {
      return 'All orders are complete!'
    }

  },

  orderType: function (totalSum, typeOfOrder) {
    if (typeOfOrder === 'Carry Out') {
      totalSum -= totalSum * 0.1;

      return totalSum;
    } else if (typeOfOrder === 'Delivery') {

      return totalSum;
    }
  }
}

describe('PizzaUni', () => {
  describe('makeAnOrder', () => {
    let obj = {
      orderedPizza: 'Chorizo',
      orderedDrink: 'Pepsi',
    }
    it('Throw Error without object', () => {
      expect(() => pizzUni.makeAnOrder()).to.throw(Error);
    });
    it('Throw Error without Pizza', () => {
      obj.orderedPizza = '';
      expect(() => pizzUni.makeAnOrder(obj)).to.throw('You must order at least 1 Pizza to finish the order.');
    });
    it('Not Throw Error without Drink', () => {
      obj.orderedPizza = 'Chorizo';
      obj.orderedDrink = '';
      let result = `You just ordered ${obj.orderedPizza}`;
      expect(pizzUni.makeAnOrder(obj)).to.equal(result);
    });
    it('to Show Correct result with corect input', () => {
      obj.orderedPizza = 'Chorizo';
      obj.orderedDrink = 'Pepsi';
      let result = `You just ordered ${obj.orderedPizza} and ${obj.orderedDrink}.`;
      expect(pizzUni.makeAnOrder(obj)).to.equal(result);
    });
    it('Not throw eror with [] as input', () => {
      obj.orderedDrink = [];
      obj.orderedPizza = [];
      let result = `You just ordered ${obj.orderedPizza} and ${obj.orderedDrink}.`;
      expect(pizzUni.makeAnOrder(obj)).to.equal(result);
    });
    it('Not throw eror with -42 as input', () => {
      obj.orderedDrink = -42;
      obj.orderedPizza = -42;
      let result = `You just ordered ${obj.orderedPizza} and ${obj.orderedDrink}.`;
      expect(pizzUni.makeAnOrder(obj)).to.equal(result);
    });

  });
  describe('getRemainingWork', () => {
    let arr = [
      { pizzaName: 'Peperoni', status: 'ready' },
      { pizzaName: 'Chorizo', status: 'preparing' },
      { pizzaName: 'Margaritha', status: 'ready' },
      { pizzaName: 'WolfyPiz', status: 'preparing' },
    ];

    it('If two pizzas are prep and two ready should be ok', () => {
      let pizzaNames = arr.filter(s => s.status != 'ready').map(p => p.pizzaName).join(', ');
      let result = `The following pizzas are still preparing: ${pizzaNames}.`;
      expect(pizzUni.getRemainingWork(arr)).to.equal(result);
    });
    it('All pizas must be ready', () => {
      arr[1].status = 'ready';
      arr[3].status = 'ready';
      let result = 'All orders are complete!';
      expect(pizzUni.getRemainingWork(arr)).to.equal(result);
    });
    it('if Status = Problem with the pizza', () => {
      arr[1].status = 'Problem';
      let pizzaNames = arr.filter(s => s.status != 'ready').map(p => p.pizzaName).join(', ');
      let result = `The following pizzas are still preparing: ${pizzaNames}.`;
      expect(pizzUni.getRemainingWork(arr)).to.equal(result);
    });
    it('Test with no input should throe TypeError', () => {
      expect(() => pizzUni.getRemainingWork()).to.throw(TypeError);
    });
  });
  describe('orderType', () => {

    it('should return correct result With Carry Out', () => {
      expect(pizzUni.orderType(20, 'Carry Out')).to.equal(18);
    });
    it('should return correct result Delivery', () => {
      expect(pizzUni.orderType(20, 'Delivery')).to.equal(20);
    });
    it('test with no input shold return undefiend', () => {
      expect(pizzUni.orderType()).to.be.undefined;
    });
    it('test with no input shold return undefiend', () => {
      expect(pizzUni.orderType()).to.be.undefined;
    });
  });
});

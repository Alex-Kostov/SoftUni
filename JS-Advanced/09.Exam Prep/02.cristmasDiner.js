class ChristmasDinner {
  constructor(budget) {
    if (budget < 0) {
      throw new Error("The budget cannot be a negative number");
    }
    this.budget = Number(budget);
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }
  shopping(productsArr) {
    let product = productsArr[0];
    let price = Number(productsArr[1]);

    if (this.budget < price) {
      throw new Error("Not enough money to buy this product")
    }

    this.products.push(product);
    this.budget -= price;

    return `You have successfully bought ${product}!`
  }
  recipes(recipe) {
    let hasProducts = true;

    for (const product of recipe.productsList) {
      if (!this.products.includes(product)) {
        hasProducts = false;
      }
    }
    if (hasProducts) {
      this.dishes.push({ recipeName: recipe.recipeName, productsList: recipe.productsList });
      return `${recipe.recipeName} has been successfully cooked!`
    } else {
      throw new Error("We do not have this product");
    }
  }
  inviteGuests(name, dish) {
    let hasDish = false;

    for (const dishObj of this.dishes) {
      if (dish == dishObj.recipeName) {
        hasDish = true;
      }
    }

    if (!hasDish) {
      throw new Error("We do not have this dish");
    }
    if (this.guests.hasOwnProperty(name)) {
      throw new Error("This guest has already been invited");
    } else {
      this.guests[name] = dish;
      return `You have successfully invited ${name}!`;
    }

  }
  showAttendance() {
    let result = '';
    for (const guest in this.guests) {
      let dish = this.guests[guest];
      let products = undefined;
      for (const disha of this.dishes) {
        if (disha.recipeName == dish) {
          products = disha.productsList.join(', ');
        }
      }
      result += `${guest} will eat ${dish}, which consists of ${products}\n`;
    }
    return result;
  }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
  recipeName: 'Oshav',
  productsList: ['Fruits', 'Honey']
});
dinner.recipes({
  recipeName: 'Folded cabbage leaves filled with rice',
  productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
  recipeName: 'Peppers filled with beans',
  productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

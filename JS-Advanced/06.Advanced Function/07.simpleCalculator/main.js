function solve() {
  let num1;
  let num2;
  let result;

  return {
    init: (selector1, selector2, resultSelector) => {
      num1 = document.querySelector(selector1);
      num2 = document.querySelector(selector2);
      result = document.querySelector(resultSelector);

    },
    add: () => {
      result.value = Number(num1.value) + Number(num2.value);

    },
    subtract: () => {
      result.value = Number(num1.value) - Number(num2.value);
    }
  }
}
let obj = solve();
obj.init('#num1', '#num2', '#result');
let add = obj.add;
let subtract = obj.subtract;

// Create a function which returns an object that can modify the DOM. The returned object should support the following functionality:
// •	init(selector1, selector2, resultSelector) - initializes the object to work with the elements corresponding to the supplied selectors.
// •	add() - adds the numerical value of the element corresponding to selector1 to the numerical value of the element corresponding to selector2 and then writes the result in the element corresponding to resultSelector
// •	subtract() - subtracts the numerical value of the element corresponding to selector2 from the numerical value of the element corresponding to selector1 and then writes the result in the element corresponding to resultSelector

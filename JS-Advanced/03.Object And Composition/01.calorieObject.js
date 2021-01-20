function composeObj(arrOfStr) {
  let obj = {};
  for (let i = 0; i < arrOfStr.length; i++) {
    if (i % 2 === 0) {
      obj[arrOfStr[i]] = Number(arrOfStr[i + 1]);
    }
  }

  return obj;
}
composeObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);

// Write a function that composes an object by given properties. The input comes as an array of strings. Every even index of the array represents the name of the food. Every odd index is a number that is equal to the calories in 100 grams of the given product. Assign each value to its corresponding property and print it on the console.
// The input comes as an array of string elements.
// The output should be printed on the console.

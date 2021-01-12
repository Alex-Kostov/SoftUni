function solve(intNum) {
  let arrOfStrNums = intNum.toString().split('');
  let sameNumbers = true;
  let sumOfNums = arrOfStrNums.map(Number).reduce((a, b) => a + b, 0);

  for (let i = 0; i < arrOfStrNums.length - 1; i++) {
    if (arrOfStrNums[i] !== arrOfStrNums[i + 1]) {
      sameNumbers = false;
    }
  }

  console.log(sameNumbers);
  console.log(sumOfNums);

}

solve(2222222);


// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
// Print on the console true if all numbers are same and false if not. On the next line print the sum of all digits.
// The input comes as an integer number.
// The output should be printed on the console.

function solve(a,b) {
  let biggest = a > b ? a : b;
  let greatest = 0;
  
  for (let i = 0; i < biggest; i++) {
    let isItDivByBoth = false;
    if(a % i === 0 && b % i === 0) {
      isItDivByBoth = true;
    }
    if(isItDivByBoth === true) {
      greatest = i;
    }
  }
  console.log(greatest);
}

solve(2154,458);

// Write a function that takes two positive numbers as input and compute the greatest common divisor.	
// The input comes as two positive integer numbers.
// The output should be printed on the console.

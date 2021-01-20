function solve(inputArr) {
  let result = 0;
  let numbers = inputArr.filter(el => typeof el === 'number').reverse();
  let operands = inputArr.filter(el => typeof el !== 'number');
  let theResultIsCorrect = false;

  for (let i = 0; i < numbers.length - 1; i += 2) {

    if (numbers.length < 2) {
      console.log('Error: not enough operands!');
      theResultIsCorrect = false;
      break;
    }
    if (operands.length === 0) {
      console.log('Error: too many operands!');
      theResultIsCorrect = false;
      break;
    }

    let operand = operands.shift();

    switch (operand) {
      case '+':
        result = numbers[i] + numbers[i + 1];
        break;
      case '-':
        result = numbers[i] - numbers[i + 1];
        break;
      case '*':
        result = numbers[i] * numbers[i + 1];
        break;
      case '/':
        result = numbers[i] / numbers[i + 1];
        break;
    }
    theResultIsCorrect = true;
    numbers.push(result);
  }
  if (theResultIsCorrect) {
    console.log(result);
  } else if (numbers.length < 2 ) {
    console.log('Error: not enough operands!');
  }
}
solve([7,33,8,'-']
);

//•	The strings (operators) will always be one of +-*/
function solve(inputArr) {

  let newArr = [];
  const len = inputArr.length;

  for (let i = 0; i < Math.ceil(len / 2); i++) {

    let smallestNum = Math.min.apply(null, inputArr);
    let indexOfsmallest = inputArr.indexOf(smallestNum);
    newArr.push(smallestNum);
    inputArr.splice(indexOfsmallest, 1);

    let biggest = Math.max.apply(null, inputArr);
    let index = inputArr.indexOf(biggest);
    newArr.push(biggest);
    inputArr.splice(index, 1);
  }

  if (newArr.includes(-Infinity) || newArr.includes(Infinity)) {
    let rem = newArr.pop();
  }
  return newArr;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
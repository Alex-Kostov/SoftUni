function solve(arr) {
  let biggesteSeq = [];
  let currentBiggest = Number.MIN_SAFE_INTEGER;

  for (const num of arr) {
    if (num > currentBiggest) {
      currentBiggest = num;
      biggesteSeq.push(currentBiggest);
    }
  }
  return biggesteSeq;
}

// function reducer(arr) {
//   let max = Number.MAX_SAFE_INTEGER;
//   let output = arr.reduce((acc, curr) => {
//       if (curr > max) {
//           max = curr;
//           acc.push(max);
//       }
//       return acc;
//   }, [])

//   console.log(output);
// }
solve([1,
  3,
  8,
  4,
  10,
  12,
  3,
  2,
  24]
);
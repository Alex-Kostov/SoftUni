function solve(inputMatrice) {

  let results = [];
  //SUM OF ROWS
  for (let i = 0; i < inputMatrice.length; i++) {
    results.push(inputMatrice[i].reduce((acc, curr) => acc + curr));
  }

  //SUM OF COLS
  for (let i = 0; i < inputMatrice.length; i++) {
    let tempArr = [];
    for (let y = 0; y < inputMatrice.length; y++) {
      tempArr.push(inputMatrice[y][i]);
    }
    results.push(tempArr.reduce((acc, curr) => acc + curr));
  }
  console.log(results.every((x) => x === results[0]));
}
solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]);
function solve(inputArr) {

  let sortedArr = inputArr.sort((a,b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else if (a.length == b.length) {
      return a.localeCompare(b);
    }
  }).map(x => console.log(x));
}
solve(['Isacc',
  'Theodor',
  'Jack',
  'Heorge',
  'Harrison',
  'George']
);
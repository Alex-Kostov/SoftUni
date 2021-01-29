function sort(arr, sortBy) {
  switch (sortBy) {
    case 'asc':
      return arr.sort((a, b) => a - b);
    case 'desc':
      return arr.sort((a, b) => b - a);
  }

}
console.log(sort([14, 7, 17, 6, 8], 'desc'));


// Write a function that sorts an array with numeric values in ascending or descending order, depending on an argument that is passed to it. 
// You will receive a numeric array and a string as arguments to the first function in your code. 
// •	If the second argument is asc, the array should be sorted in ascending order (smallest values first).
// •	If it is desc, the array should be sorted in descending order (largest first).

function removeDuplicates(arr) {
    let uniqueArr = [...new Set(arr)];
    console.log(uniqueArr.join(' '));
}
removeDuplicates([20, 8, 12, 13, 4, 4, 8, 5]);

// You will be given an array of integer numbers on the first line of the input (space-separated). 
// Remove all repeating elements from the array. 
// Print the result elements separated by single space.



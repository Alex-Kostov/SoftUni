function search(arr = [], params) {

    let repeated = 0;

    let count = params.shift();
    let deleteCount = params.shift();
    let searchedNum = params.shift();

    let newArr = arr.splice(0, count);
    let deletedNums = newArr.splice(0, deleteCount);

    for (const num of newArr) {
        if (num === searchedNum) {
            repeated ++;
        }
    }
    console.log(`Number ${searchedNum} occurs ${repeated} times.`);
}
search([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);







// You will receive two arrays of integers. The second array is contains exactly three numbers. 
// First number represents the number of elements you have to take from the first array (starting from the first one).
// Second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
// Third number is the number we search in our collection after the manipulations. 
// As output print how many times that number occurs in our array in the following format: 
// "Number {number} occurs {count} times."

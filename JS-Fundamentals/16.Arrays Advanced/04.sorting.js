function sort(input) {
    let inputCopy = input.slice();

    let smallBig = input.sort((a, b) => a - b);
    let bigSmall = inputCopy.sort((b, a) => a - b);

    let result = [];

    for (let i = 0; i < input.length / 2; i++) {
        result.push(bigSmall[i]);
        result.push(smallBig[i]);
    }
    console.log(result.join(' '));
}
sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);


// Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, the third is the second biggest one, the fourth is the second smallest one and so on. 
// Print the elements on one row, separated by single space.

function bombing(field, bombNumbers) {

    let sum = 0;
    let specialNum = bombNumbers.shift();
    let power = bombNumbers.shift();
    let startIndex = 0;
    let endIndex = 0;
    
    while (field.includes(specialNum)) {
        let index = field.indexOf(specialNum);

        if (index - power >= 0) {
            startIndex = index - power;
        }
        if (index - power < 0) {
            startIndex = 0;
        }
        if (index + power <= field.length) {
            endIndex = index + power;
        }
        if (index + power > field.length) {
            endIndex = field.length;
        }
        let count = (endIndex - startIndex) + 1;
        let killedNums = field.splice(startIndex, count);
    }

    for (const num of field) {
        sum += num;
    }
    console.log(sum);
}
bombing([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
);


// Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power. 
// Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right. Detonations are performed from left to right and all detonated numbers disappear. 
// The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and it's power.
// The output is the sum of the remaining elements in the sequence.

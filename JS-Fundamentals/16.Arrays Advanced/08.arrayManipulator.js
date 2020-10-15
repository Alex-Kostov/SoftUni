function changeArray(arr, params) {

    for (let i = 0; i < params.length; i++) {

        if (params[i].includes("add") && !params[i].includes("Many")) {
            add(arr, params[i]);
        }
        if (params[i].includes("Many")) {
            addMany(arr, params[i]);
        }
        if (params[i].includes("contains")) {
            contains(arr, params[i]);
        }
        if (params[i].includes("remove")) {
            removeElement(arr, params[i]);
        }
        if (params[i].includes("shift")) {
            rotate(arr, params[i]);
        }
        if (params[i].includes("sum")) {
            sum(arr);
        }

    }



    function add(arr, param) {
        let [command, index, element] = param.split(' ');
        return arr.splice(index, 0, Number(element));
    }

    function addMany(arr, param) {
        let splited = param.split(' ');
        let command = splited.shift();
        let index = splited.shift();
        let elements = splited.map(Number);
        for (let i = 0; i < elements.length; i++) {
            arr.splice(index, 0, elements[i]);
            index++;
        }
        return arr;
    }

    function contains(arr, param) {
        let [command, element] = param.split(' ');
        if (arr.includes(Number(element))) {
            console.log(arr.indexOf(Number(element)));
        }
        else {
            console.log(-1);
        }
    }

    function removeElement(arr, param) {
        let [command, index] = param.split(' ');
        return arr.splice(index, 1);
    }

    function rotate(arr, param) {
        let [command, position] = param.split(' ');
        for (let i = 0; i < position; i++) {
            let first = arr.shift();
            arr.push(first);
        }
        return arr;
    }

    function sum(input) {
        let newArr = input.slice(0);
        //arr.splice(0);
        let first = 0;
        let second = 0;
        let sumArr = [];
        let sum = 0;
        if (newArr.length % 2 == 0) {
            for (let i = 0; i < newArr.length; i += 2) {
                first = newArr[i];
                second = newArr[i + 1];
                sum = first + second;
                sumArr.push(sum);
                sum = 0;
                first = 0;
                second = 0;
            }
            return arr = sumArr;

        }
        else {
            for (let i = 0; i < newArr.length; i += 2) {
                first = newArr[i];
                second = newArr[i + 1];
                sum = first + second;
                sumArr.push(sum);
                sum = 0;
                first = 0;
                second = 0;
            }
            sumArr.splice(sumArr.length - 1, 1);
            sumArr.push(newArr[newArr.length - 1]);
            return arr = sumArr;
        }

    }

    console.log(`[ ${arr.join(", ")} ]`);
}
changeArray([1, 2, 4, 5, 6, 7],
    ["add 1 8", "contains 1", "contains -3", "print"]);




// Write a function that receives an array of integers and array of string commands and executes them over the array. The commands are as follows:
// •	add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).
// •	addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
// •	contains <element> – prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.
// •	remove <index> – removes the element at the specified index.
// •	shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
// o	For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
// •	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
// o	For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
// •	print – stop receiving more commands and print the last state of the array.

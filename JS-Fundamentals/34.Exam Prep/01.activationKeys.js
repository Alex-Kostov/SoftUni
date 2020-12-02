//Problem 1. Activation Keys

function solve(arr) {
    let key = arr.shift();
    let endCommand = arr.pop();

    for (const line of arr) {
        if (line.includes('Contains')) {
            contains(line);
        } else if(line.includes('Flip')){
            flip(line);
        } else if(line.includes('Slice')) {
            slice(line);
        }
    }
    console.log(`Your activation key is: ${key}`);

    function slice(line) {
        let [command,startIndex,endIndex] = line.split('>>>');
        let arrStr = key.split('');
        arrStr.splice(startIndex,endIndex-startIndex);
        key = arrStr.join('');
        console.log(key);
    }
    function flip(line) {
        let [command,caser,startIndex,endIndex] = line.split('>>>');
        let untouchedWord = key.slice(startIndex,endIndex);
        let word = key.slice(startIndex,endIndex);
        if(caser === 'Upper'){
            word = word.toUpperCase();
        }else{
            word = word.toLowerCase();
        }
        key = key.replace(untouchedWord,word);
        console.log(key);
    }
    function contains(line) {
        let [command, substring] = line.split('>>>');
        if (key.includes(substring)) {
            console.log(`${key} contains ${substring}`);
        } else {
            console.log('Substring not found!');
        }
    }
}
solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
]);




// The first line of the input will be your raw activation key. It will consist of letters and numbers only. 
// After that, until the "Generate" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the raw activation key.
// There are several types of instructions, split by ">>>":
// •	Contains>>>{substring} – checks if the raw activation key contains the given substring.
// o	If it does prints: "{raw activation key} contains {substring}".
// o	If not, prints: "Substring not found!"
// •	Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}
// o	Changes the substring between the given indices (the end index is exclusive) to upper or lower case. 
// o	All given indexes will be valid.
// o	Prints the activation key.
// •	Slice>>>{startIndex}>>>{endIndex}
// o	Deletes the characters between the start and end indices (end index is exclusive).
// o	Both indices will be valid.
// o	Prints the activation key.

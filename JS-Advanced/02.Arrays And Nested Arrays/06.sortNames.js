function solve(inputArr) {

  inputArr.sort((a, b) => a.localeCompare(b)).map((x, i) => {
    return console.log(`${i+1}.${x}`)
  });
  
}
solve(["John", "Bob", "Christina", "Ema"]);

// You will receive an array of names. 
// Sort them alphabetically in ascending order and print
//  a numbered list of all the names, each on a new line.
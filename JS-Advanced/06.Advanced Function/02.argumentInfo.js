function solve(...params) {

  let tally = {}; // name came from the task description which i copied at the End.

  params.forEach((el) => {
    let type = typeof el;
    console.log(`${type}: ${el}`);
    switch (type) {
      case 'string':
        if (tally.hasOwnProperty(type)) {
          tally[type]++;
        } else {
          tally[type] = 1;
        }
        break;
      case 'number':
        if (tally.hasOwnProperty(type)) {
          tally[type]++;
        } else {
          tally[type] = 1;
        }
        break;
      case 'function':
        if (tally.hasOwnProperty(type)) {
          tally[type]++;
        } else {
          tally[type] = 1;
        }
        break;
      default:
        if (tally.hasOwnProperty(type)) {
          tally[type]++;
        } else {
          tally[type] = 1;
        }
        break;
    }
  });

  //sorting the object 
  let keysSorted = Object.keys(tally).sort((a, b) => tally[b] - tally[a]);

  for (const key of keysSorted) {
    console.log(`${key} = ${tally[key]}`);
  }

}
solve('cat', 42, function () { console.log('Hello world!'); });


// Write a function that displays information about the arguments which are passed to it (type and value) and a summary about the number of each type in the following format: 
// "{argument type}: {argument value}"
// Print each argument description on a new line. At the end print a tally with counts for each type in descending order, each on a new line in the following format:
// "{type} = {count}"
// If two types have the same count, use order of appearance. 
// Do NOT print anything for types that do not appear in the list of arguments.

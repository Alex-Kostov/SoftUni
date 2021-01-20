function solve(arrOfStrings) {
  let uselesLine = arrOfStrings.shift();
  let result = [];

  for (let line of arrOfStrings) {
    let tokens = line.split(' | ');
    let townName = tokens[0].slice(2);
    let townLatitude = Number(tokens[1]).toFixed(2);
    let townLongitude = Number(tokens[2].slice(0,tokens[2].length -2)).toFixed(2);

    result.push({
      Town: townName,
      Latitude: Number(townLatitude),
      Longitude: Number(townLongitude)
    })
  }
  return JSON.stringify(result);
}
console.log(solve(['| Town | Latitude | Longitude |',
  '| Veliko Turnovo | 43.0757 | 25.6172 |',
  '| Monatevideo | 34.50 | 56.11 |']
));

// You're tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each string represents a row of a table, with values on the row encompassed by pipes "|" and optionally spaces. The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
// Input
// The input comes as an array of strings – the first string contains the table’s headings, each next string is a row from the table.
// Output
// •	The output should be an array of objects wrapped in JSON.stringify(). 
// •	Latitude and longitude must be parsed to numbers, and represented till the second digit after the decimal point!

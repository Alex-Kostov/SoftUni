function solve(str) {
  let arr = str.split(/[\s,?"!.]+/)
    .filter(el => el)
    .map((el)=> el.toUpperCase())
    .join(', ');
  console.log(arr);
}
solve('Hi, how are you?');

// Write a program that extracts all words from a passed in string and converts them to upper case. The extracted words in upper case must be printed on a single line separated by ", ".
// The input comes as a single string argument - the text to extract and convert words from.
// The output should be a single line containing the converted string.

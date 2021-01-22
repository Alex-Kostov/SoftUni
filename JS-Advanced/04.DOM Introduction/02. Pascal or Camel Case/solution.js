function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  switch (namingConvention) {
    case 'Camel Case':
      text = text.toLowerCase().split(' ').map((x, i) => {
        if (i === 0) {
          return x;
        } else if (i !== 0) {
          return x = x.charAt(0).toUpperCase() + x.substring(1);
        }
      }).join('');
      break;

    case 'Pascal Case':
      text = text.toLowerCase().split(' ').map((x, i) => {
        return x = x.charAt(0).toUpperCase() + x.substring(1);
      }).join('');
      break;

    default:
      text = 'Error!';
      break;
  }
  result.textContent = text;
}


///An html file is given and your task is to write a function that takes two string parameters as an input and transform the first parameter to the type required by the second parameter.
// •	The first parameter will be the text that you need to modify depending on the second parameter. The words in it will always be separated by space.
// •	The second parameter will be either "Camel Case" or "Pascal Case". In case of a different input, you your output should be "Error!"
// When the button is clicked the function should convert the first string to either of the cases. The output should consist of only one word - the string you have modified. Once your output is done, you should set it as a HTML to the <span> element. For more information, see the examples below:

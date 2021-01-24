function solve() {
  let btn = document.getElementsByTagName('button')[0].addEventListener('click', onClick);
  let input = document.getElementById('input');
  let output = document.getElementById('result');
  let toMenu = document.getElementById('selectMenuTo');

  //creating options
  let binary = document.createElement('option');
  binary.value = 'binary';
  binary.textContent = 'Binary'

  let hex = document.createElement('option');
  hex.value = 'hexadecimal';
  hex.textContent = 'Hexadecimal';

  toMenu.appendChild(binary);
  toMenu.appendChild(hex);


  function onClick() {
    let num = Number(input.value);
    let result = undefined;
    let option = toMenu.options[toMenu.selectedIndex].textContent;

    switch (option) {
      case 'Binary':
        result = num.toString(2);
        break;
      case 'Hexadecimal':
        result = num.toString(16).toUpperCase();
        break;
    }
    output.value = result;
  }

}

//Write a function that converts a decimal number to binary and hexadecimal.
// The given number will always be in decimal format. The "From" select menu will only have a
// Decimal option, but the "To" select menu will have two options: Binary and Hexadeicmal. 
// This means that our program should have the functionality to convert decimal to binary and
// decimal to hexadecimal.
// Note that "To" select menu by default is empty. You have to insert the two options ('Binary' and 'Hexadecimal') inside before continue. Also they should have values ('binary' and 'hexadecimal').
// •	When the [Convert it] button is clicked, the expected result should appear in the [Result] input field.

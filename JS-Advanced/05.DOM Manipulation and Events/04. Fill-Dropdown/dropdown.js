function addItem() {
  let select = document.getElementById('menu');
  let inputText = document.getElementById('newItemText');
  let inputValue = document.getElementById('newItemValue');

  let option = document.createElement('option');
  option.textContent = inputText.value;
  option.value = inputValue.value;
  select.appendChild(option);


  inputText.value = '';
  inputValue.value = '';
}

// Your task is to take values from input fields with ids "newItemText" and "newItemValue".
//  Then you should create and append an <option> to the <select> with id "menu".
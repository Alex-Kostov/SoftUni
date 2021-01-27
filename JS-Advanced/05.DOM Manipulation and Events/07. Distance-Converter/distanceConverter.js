function attachEventsListeners() {
  let body = document.getElementsByTagName('body')[0];
  let selectInputUnits = document.getElementById('inputUnits');
  let selectOutputUnits = document.getElementById('outputUnits');
  let result = document.getElementById('outputDistance');

  body.addEventListener('click', onClick);
  let from = undefined;
  let to = undefined;
  let initialValue = undefined;
  function onClick(ev) {

    if (ev.target.type === 'button') {
      initialValue = document.getElementById('inputDistance').value;
      //Adding From Unit
      Array.from(selectInputUnits.children).forEach((opt) => {
        if (opt.selected == true) {
          from = opt.value;
        }
      });
      //Adding To Unit
      Array.from(selectOutputUnits.children).forEach((opt) => {
        if (opt.selected == true) {
          to = opt.value;
        }
      });

      //calculating the result
      result.value = convert(from, to, initialValue);
    }
  }
  function convert(from, to, initialValue) {
    let meters = undefined;
    let result = undefined;
    switch (from) {
      case 'km':
        meters = initialValue * 1000;
        break;
      case 'm':
        meters = meters;
        break;
      case 'cm':
        meters = initialValue * 0.01;
        break;
      case 'mm':
        meters = initialValue * 0.001;
        break;
      case 'mi':
        meters = initialValue * 1609.34;
        break;
      case 'yrd':
        meters = initialValue * 0.9144;
        break;
      case 'ft':
        meters = initialValue * 0.3048;
        break;
      case 'in':
        meters = initialValue * 0.0254;
        break;
    }
    switch (to) {
      case 'km':
        result = meters / 1000;
        break;
      case 'm':
        result = meters;
        break;
      case 'cm':
        result = meters / 0.01;
        break;
      case 'mm':
        result = meters / 0.001;
        break;
      case 'mi':
        result = meters / 1609.34;
        break;
      case 'yrd':
        result = meters / 0.9144;
        break;
      case 'ft':
        result = meters / 0.3048;
        break;
      case 'in':
        result = meters / 0.0254;
        break;
    }
    return result;
  }
}
// Your task is to convert from one distance unit to another by adding a click event listener to a button.
//  When it is clicked, read the value from the input field and get the selected option from the input and output units drop downs.
//   Then calculate and display the converted value in the disabled output field.
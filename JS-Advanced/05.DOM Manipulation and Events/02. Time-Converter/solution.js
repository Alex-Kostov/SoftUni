function attachEventsListeners() {

  let inputDays = document.getElementById('days');
  let inputHours = document.getElementById('hours');
  let inputMinutes = document.getElementById('minutes');
  let inputSeconds = document.getElementById('seconds');
  let days = undefined;

  document.getElementsByTagName('main')[0].addEventListener('click', onClick);

  function onClick(ev) {
    switch (ev.target.id) {
      case 'daysBtn':
        days = Number(inputDays.value);
        break;
      case 'hoursBtn':
        days = Number(inputHours.value / 24);
        break;
      case 'minutesBtn':
        days = Number(inputMinutes.value / 1440);
        break;
      case 'secondsBtn':
        days = Number(inputSeconds.value / 86400);
        break;
    }
    if (days !== undefined) {
      inputDays.value = days;
      inputHours.value = days * 24;
      inputMinutes.value = days * 1440;
      inputSeconds.value = days * 86400;
    }
  }
}

// Create a program that converts different time units.
//  Your task is to add a click event listener to all [CONVERT] buttons.
//   When a button is clicked, read the corresponding input field,
//    convert the value to the three other time units and display it in the input fields.
// // Example
 
// // One day is equal to 24 hours/1440 minutes/86400 seconds. Whichever button we click,
//  the input fields should change depending on the added value on the left.
//   (For example, if we write 48 hours and click convert the days,
//      the field value should change to 2).

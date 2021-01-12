function solve(steps, ftrintLenMeters, speed) {
  let distance = steps * ftrintLenMeters;
  let speedForMeterInSec = speed / 3.6;

  let breaks = Math.floor(distance / 500);
  let time = distance / speedForMeterInSec + breaks * 60;

  let timeInHours = Math.floor(time / 3600);
  let timeInMin = Math.floor(time / 60);
  let timeInSec = Math.round(time % 60);

  if (timeInHours < 10) {
    console.log(`0${timeInHours}:${timeInMin}:${Math.round(timeInSec)}`);
  }
  else {
    console.log(`${timeInHours}:${timeInMin}:${timeInSec}`);
  }
}

solve(2564, 0.70, 5.5);

// Write a function that calculates how long it takes a student to get to university. 
// The function takes three numbers:
// •	The first is the number of steps the student takes from their home to the university
// •	Тhe second number is the length of the student's footprint in meters
// •	Тhe third number is the student speed in km/h
// Every 500 meters the student rests and takes a 1 minute break.
// Calculate how long the student walks from home to university and print on the console the result in the following format: 'hours:minutes:seconds'.
// The input comes as three numbers.
// The output should be printed on the console.

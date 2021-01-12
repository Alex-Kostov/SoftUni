function solve(speed, area) {

  if (area === 'residential') {
    if (speed <= 20) {
      console.log(`Driving ${speed} km/h in a ${20} zone`);
    } else if (speed > 20 && speed <= 40) {
      console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of ${20} - speeding`);
    } else if (speed > 40 && speed <= 60) {
      console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of ${20} - excessive speeding`);
    } else {
      console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of ${20} - reckless driving`);
    }
  } else if (area === 'city') {
    if (speed <= 50) {
      console.log(`Driving ${speed} km/h in a ${50} zone`);
    } else if (speed > 50 && speed <= 70) {
      console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of ${50} - speeding`);
    } else if (speed > 70 && speed <= 90) {
      console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of ${50} - excessive speeding`);
    } else {
      console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of ${50} - reckless driving`);
    }
  } else if (area === 'interstate') {
    if (speed <= 90) {
      console.log(`Driving ${speed} km/h in a ${90} zone`);
    } else if (speed > 90 && speed <= 110) {
      console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of ${90} - speeding`);
    } else if (speed > 110 && speed <= 130) {
      console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of ${90} - excessive speeding`);
    } else {
      console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of ${90} - reckless driving`);
    }
  }  else if (area === 'motorway') {
    if (speed <= 130) {
      console.log(`Driving ${speed} km/h in a ${130} zone`);
    } else if (speed > 130 && speed <= 150) {
      console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of ${130} - speeding`);
    } else if (speed > 150 && speed <= 170) {
      console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of ${130} - excessive speeding`);
    } else {
      console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of ${130} - reckless driving`);
    }
  }
}

solve(21, 'residential');


// Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit: 
// •	On the motorway the limit is 130 km/h
// •	On the interstate the limit is 90 km/h
// •	In the city the limit is 50 km/h 
// •	Within a residential area the limit is 20 km/h
// If the driver is within the limits, there should be printed speed and the speed limit. 
// `Driving {speed} km/h in a {speed limit} zone`
// If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds. 
// `The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
// For speeding up to 20 km/h over the limit, speeding should be printed 
// For speeding up to 40 km/h over the limit, excessive speeding should be printed
// For anything else, reckless driving should be printed
// The input comes as 2 string parameters. The first element is the current speed (number), the second element is the area.
// The output should be printed on the console.

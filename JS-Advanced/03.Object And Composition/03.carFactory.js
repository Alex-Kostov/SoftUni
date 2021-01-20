function solve(inputObj) {

  let power;
  let volume;
  let wheelSize = inputObj.wheelsize % 2 === 0 ? inputObj.wheelsize - 1 : inputObj.wheelsize;
  let wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

  if (inputObj.power <= 105) {
    power = 90;
    volume = 1800;
  } else if (inputObj.power > 105 && inputObj.power <= 160) {
    power = 120;
    volume = 2400;
  } else if (inputObj.power > 160) {
    power = 200;
    volume = 3500;
  }

  let carObj = {
    model: inputObj.model,
    engine: {
      power,
      volume
    },
    carriage: {
      type: inputObj.carriage,
      color: inputObj.color
    },
    wheels,
  }

  return carObj;
}

console.log(solve({
  model: 'VW Golf II',
  power: 00,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14
}));

// Write a program that assembles a car by given requirements out of existing components. The client will place an order in the form of an object describing the car. You need to determine which parts to use to fulfil the client’s order. You have the following parts in storage:
// An engine has power (given in horsepower) and volume (given in cubic centimeters). Both of these values are numbers. When selecting an engine, pick the smallest possible that still meets the requirements.
// Small engine: { power: 90, volume: 1800 }
// Normal engine: { power: 120, volume: 2400 }
// Monster engine: { power: 200, volume: 3500 }
// A carriage has a type and color. Both of these values are strings. You have two types of carriages in storage and can paint it any color.
// Hatchback: { type: 'hatchback', color: <as required> }
// Coupe: { type: 'coupe', color: <as required> }
// The wheels will be represented by an array of 4 numbers, each number represents the diameter of the wheel in inches. The size can only be an odd number. Round down any requirements you receive to the nearest odd number. 

class Parking {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
    this.cars = {};
  }
  addCar(carModel, carNumber) {
    if (this.capacity <= 0) {
      throw new Error('Not enough parking space.');
    }
    this.cars[carNumber] = ['Not payed', `${carModel}`];
    this.vehicles.push(carNumber);
    this.capacity--;
    return (`The ${carModel}, with a registration number ${carNumber}, parked.`);
  }
  removeCar(carNumber) {
    if (!this.vehicles.includes(carNumber)) {
      throw new Error("The car, you're looking for, is not found.")
    }
    if (this.cars[carNumber][0] == 'Not Payed') {
      throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
    }

    let index = this.vehicles.indexOf(carNumber);
    this.vehicles.splice(index, 1);
    delete this.cars[carNumber];
    this.capacity++;
    return `${carNumber} left the parking lot.`
  }
  pay(carNumber) {
    if (!this.vehicles.includes(carNumber)) {
      throw new Error(`${carNumber} is not in the parking lot.`)
    }
    if (this.cars[carNumber][0] == 'Has Payed') {
      throw new Error(`${carNumber}'s driver has already payed his ticket.`);
    }
    this.cars[carNumber][0] = 'Has payed';
    return `${carNumber}'s driver successfully payed for his stay.`
  }
  getStatistics(carNumber) {
    if (carNumber == undefined) {
      let result = `The Parking Lot has ${this.capacity} empty spots left.`;
      let carsSorted = {};

      let sortable = Object.entries(this.cars)
        .sort(([, a], [, b]) => {
          return a[1].localeCompare(b[1]);
        });

      for (const line of sortable) {
        carsSorted[line[0]] = [line[1][0], line[1][1]];
      }
      for (const carNumber in carsSorted) {
        let line = `\n${carsSorted[carNumber][1]} == ${carNumber} - ${carsSorted[carNumber][0]}`;
        result += line;
      }

      return result;
    }
    else {
      return `${this.cars[carNumber][1]} == ${carNumber} - ${this.cars[carNumber][0]}`;
    }
  }
}


const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

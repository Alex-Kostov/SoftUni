function solve(params) {
    let n = params.shift();
    let cars = [];
    let endCommand = params.pop();
    for (let i = 0; i < n; i++) {
        let line = params.shift();
        let [makeModel,milage,fuel] = line.split('|');
        let obj = {
            makeModel:makeModel,
            milage:Number(milage),
            fuel:Number(fuel)
        }
        cars.push(obj);
    }
    
    for (const line of params) {
        let [command,car,arg1,arg2] = line.split(' : ');
        if(line.includes('Drive :')){
            drive(car,arg1,arg2)
        } else if(line.includes('Refuel :')){
            refuel(car,arg1);
        } else if(line.includes('Revert :')){
            revert(car,arg1);
        } 
    }

    
    sort();
    for (const car of cars) {
        console.log(`${car.makeModel} -> Mileage: ${car.milage} kms, Fuel in the tank: ${car.fuel} lt.`);
    }

    function drive(car,distance,fuel){
        for (const ride of cars) {
            if(ride.makeModel === car){
                if(ride.fuel > Number(fuel)){
                    ride.fuel -= Number(fuel);
                    ride.milage += Number(distance);
                    console.log(`${ride.makeModel} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                } else {
                    console.log('Not enough fuel to make that ride');
                }
                if(ride.milage >= 100000){
                    console.log(`Time to sell the ${ride.makeModel}!`);
                    let index = 0;
                    for (let i = 0; i < cars.length; i++) {
                        const car = cars[i];
                        if(car.makeModel === ride.makeModel){
                            index = i;
                        }
                    }
                    cars.splice(index,1);
                }
            }
        }
    }
    function refuel(car,fuel){
        for (const ride of cars) {
            if(ride.makeModel === car){
                if(ride.fuel + Number(fuel) > 75 ){
                    console.log(`${car} refueled with ${75 - ride.fuel} liters`);
                    ride.fuel = 75;
                }
                else {
                    ride.fuel += Number(fuel);
                    console.log(`${car} refueled with ${fuel} liters`)
                }
            }
        }
    }
    function revert(car,kilometers) {
        for (const ride of cars) {
            if(ride.makeModel === car){
                if(ride.milage - Number(kilometers) < 10000){
                    ride.milage = 10000;
                } else {
                    ride.milage -= Number(kilometers);
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                }
            }
        }
    }
    function sort() {
        
        let sorting = function(a,b) {
            let boo = b.milage - a.milage;
            if(boo === 0 ){
                return a.makeModel.localeCompare(b.makeModel);
            }
            return boo;
        }
         cars = cars.sort(sorting);

    }
}
solve(
    [
        '4',
        'Lamborghini Veneno|11111|74',
        'Bugatti Veyron|12345|67',
        'Koenigsegg CCXR|67890|12',
        'Aston Martin Valkryie|99900|50',
        'Drive : Koenigsegg CCXR : 382 : 82',
        'Drive : Aston Martin Valkryie : 99 : 23',
        'Drive : Aston Martin Valkryie : 2 : 1',
        'Refuel : Lamborghini Veneno : 40',
        'Revert : Bugatti Veyron : 2000',
        'Stop'
      ]
);

// Problem 3. Need for Speed III
// On the first line of the standard input you will receive an integer n – the number of cars that you can obtain. On the next n lines the cars themselves will follow with their mileage and fuel available, separated by "|" in the following format:
// {car}|{mileage}|{fuel}
// Then, you will be receiving different commands, each on a new line, separated by " : ", until the "Stop" command is given:
// •	Drive : {car} : {distance} : {fuel} 
// o	You need to drive the given distance and you will need the given fuel to do that. If the car doesn`t have enough fuel print:
// "Not enough fuel to make that ride"
// o	If the car has the required fuel available in the tank, increase its mileage with the given distance, decrease its fuel with the given fuel and print: 
// "{car} driven for {distance} kilometers. {fuel} liters of fuel consumed."
// o	You like driving new cars only, so if the mileage of a car reaches 100 000 km, remove it from the collection(s). Print:
// "Time to sell the {car}!"
// •	Refuel : {car} : {fuel}
// o	Refill the tank of your car. 
// o	Each tank can hold a maximum of 75 liters of fuel, so if the given amount of fuel is more than you can fit in the tank, take only what is required to fill it up. 
// o	Print a message in the following format:
// "{car} refueled with {fuel} liters"
// •	Revert : {car} : {kilometers}
// o	Decrease the mileage of the given car with the given kilometers and print the kilometers you have decreased it with in the following format:
// "{car} mileage decreased by {amount reverted} kilometers"
// o	If the mileage becomes less than 10 000km after it is decreased, just set it to 10 000km and 
// DO NOT print anything.
// Upon receiving the "Stop" command you need to print all cars in your possession, sorted by their mileage in decscending order, then by their name in ascending order, in the following format:
// "{car} -> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt."
// Input/Constraints
// •	The mileage and fuel of the cars will be valid, 32-bit integers and will never be negative.
// •	The fuel and distance amounts in the commands will never be negative.
// •	The car names in the commands will always be valid cars in your possession.
// Output
// •	All the output messages with the appropriate formats are described in the problem description.

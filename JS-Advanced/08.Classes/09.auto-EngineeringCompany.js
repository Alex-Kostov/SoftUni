function solve(arr) {
  let cars = {};

  for (const line of arr) {
    let [make, model, quantity] = line.split(' | ');
    quantity = Number(quantity);

    if (cars.hasOwnProperty(make)) {
      if (cars[make].hasOwnProperty(model)) {
        cars[make][model] += quantity;
      } else {
        cars[make][model] = quantity;
      }
    } else {
      cars[make] = { [model]: quantity };
    }

  }
  for (const make in cars) {
    console.log(make);
    for (const model in cars[make]) {
     console.log(`###${model} -> ${cars[make][model]}`);
    }
  }
}
solve(

  ['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']


);
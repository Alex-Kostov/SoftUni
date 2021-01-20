function storeCatalogue(inputArr) {

  //make the catalogue
  let catalogue = {};
  for (const line of inputArr) {
    [product, price] = line.split(' : ');
    price = Number(price);
    catalogue[product] = price;
  }
  //sorting associative  Array
  let sortedCatalogue = Object.entries(catalogue)
    .sort((a, b) => a[0]
      .localeCompare(b[0]));

  let letters = [];

  for (const line of sortedCatalogue) {
    [product, price] = line;
    let firstLetter = product[0];
    if (!letters.includes(firstLetter)) {
      letters.push(firstLetter);
    }
  }

  for (const letter of letters) {
    console.log(letter);
    for (const line of sortedCatalogue) {
      [product, price] = line;
      if(product[0] === letter) {
        console.log(`  ${product}: ${price}`);
      }
    }
  }
}
console.log(storeCatalogue(['Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10']
));

// You have to create a sorted catalogue of store products. You will be given the products’ names and prices. You need to order them by alphabetical order. 
// Input
// The input comes as array of strings. Each element holds info about a product in the following format:
// “{productName} : {productPrice}”
// The product’s name will be a string, which will always start with a capital letter, and the price will be a number. There will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
// Output
// As output you must print all the products in a specified format. They must be ordered exactly as specified above. The products must be divided into groups, by the initial of their name. The group’s initial should be printed, and after that the products should be printed with 2 spaces before their names. For more info check the examples.

function solve(inputArr) {

  let result = [];

  for (const line of inputArr) {
    let [name, level, items] = line.split(' / ');
    level = Number(level);
    items = items ? items.split(', ') : [];
  
    result.push({name, level, items});
  }

  return JSON.stringify(result);
}
console.log(solve(['Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara']
));

// In the era of heroes, every hero has his own items which make him unique. Create a function which creates a register for the heroes, with their names, level, and items, if they have such. The register should accept data in a specified format, and return it presented in a specified format. 
// Input

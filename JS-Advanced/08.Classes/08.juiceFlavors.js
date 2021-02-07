function solve(arr) {
  let bottles = {};
  let juicesQuantity = {};
  for (const line of arr) {
    let [juiceName, juiceQuantity] = line.split(' => ');
    juiceQuantity = Number(juiceQuantity);

    if (juiceQuantity >= 1000) {

      let bottle = Math.floor(juiceQuantity / 1000);
      let leftOver = juiceQuantity % 1000;

      if (bottles.hasOwnProperty(juiceName)) {
        bottles[juiceName] += bottle;
      } else {
        bottles[juiceName] = bottle;
      }

      juiceQuantity = leftOver;
    }

    if (juicesQuantity.hasOwnProperty(juiceName)) {
      juicesQuantity[juiceName] += juiceQuantity;

      if (juicesQuantity[juiceName] >= 1000) {
        let bottle = Math.floor(juicesQuantity[juiceName] / 1000);
        let leftOver = juicesQuantity[juiceName] % 1000;
        juicesQuantity[juiceName] = leftOver;

        if (bottles.hasOwnProperty(juiceName)) {
          bottles[juiceName] += bottle;
        } else {
          bottles[juiceName] = bottle;
        }

      }
    } else {
      juicesQuantity[juiceName] = juiceQuantity;
    }


  }

  for (const key in bottles) {
    console.log(`${key} => ${bottles[key]}`);
  }
}
solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']


);
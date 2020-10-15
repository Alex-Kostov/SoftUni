function invetory(params) {

    let invetory = params.shift().split(' ');

    for (let i = 0; i < params.length; i++) {

        if (params[i].includes("Buy")) {
            buy(invetory, params[i]);
        }
        if (params[i].includes("Trash")) {
            trash(invetory, params[i]);
        }
        if (params[i].includes("Repair")) {
            repair(invetory, params[i]);
        }
        if (params[i].includes("Upgrade")) {
            upgrade(invetory, params[i]);
        }
    }

    console.log(invetory.join(' '));

    function buy(invetory, params) {
        let [command, item] = params.split(' ');
        if (!invetory.includes(item)) {
            invetory.push(item);
        }
    }

    function trash(invetory, params) {
        let [command, item] = params.split(' ');
        if (invetory.includes(item)) {
            let index = invetory.indexOf(item);
            invetory.splice(index, 1);
        }
    }

    function repair(invetory, params) {
        let [command, item] = params.split(' ');
        if (invetory.includes(item)) {
            let index = invetory.indexOf(item);
            let repairedItem = invetory.splice(index, 1).toString();
            invetory.push(repairedItem);
        }
    }

    function upgrade(invetory, params) {
        let [command, upgrades] = params.split(' ');
        let [item, upgrade] = upgrades.split('-');
        if (invetory.includes(item)) {
            let index = invetory.indexOf(item);
            let upgradedItem = item + ":" + upgrade;
            invetory.splice(index + 1, 0, upgradedItem);
        }

    }
}
invetory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
);

// As a gladiator, Peter has cool Inventory. He loves to buy new equipment. You are given Peter’s inventory with all of his equipment -> strings, separated by whitespace. 
// You may receive the following commands:
// •	Buy {equipment}
// •	Trash {equipment}
// •	Repair {equipment}
// •	Upgrade {equipment}-{upgrade}
// If you receive Buy command, you should add the equipment at last position in the inventory, but only if it isn't bought already.
// If you receive Trash command, delete the equipment if it exists.
// If you receive Repair command, you should repair the equipment if it exists and place it on last position.
// If you receive Upgrade command, you should check if the equipment exists and insert after it the upgrade in the following format: "{equipment}:{upgrade}";

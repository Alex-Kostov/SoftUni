//Problem 3. P!rates
function solve(arr) {

    let villages = []
    for (const line of arr) {
        if (line.includes('||')) {
            addTargets(line);
        } else if (line.includes('Plunder=>')) {
            plunder(line);
        } else if (line.includes('Prosper=>')) {
            prosper(line);
        } else if(line === "End"){
            sort();
            let townsLeft = 0;
            for (const village of villages) {
                    if(village.disbanded === false){
                        townsLeft++;
                    }
            }
            if(townsLeft> 0){
                console.log(`Ahoy, Captain! There are ${townsLeft} wealthy settlements to go to:`);
            }
            else{
                console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
            }
            for (const village of villages) {
                if(village.disbanded === false){
                    console.log(`${village.name} -> Population: ${village.population} citizens, Gold: ${village.gold} kg`);
                }
            }
        }
    }

    function addTargets(line) {
        let [townName, population, gold] = line.split('||');
        let village = {
            name: townName,
            population: Number(population),
            gold: Number(gold),
            disbanded: false,
        }
        villages.push(village);
    }
    function plunder(line) {
        let [command, townName, killPopulation, grabGold] = line.split('=>');
        for (const village of villages) {
            if (townName == village.name) {
                village.gold -= Number(grabGold);
                village.population -= Number(killPopulation);

                if(village.disbanded === false){
                    console.log(`${townName} plundered! ${grabGold} gold stolen, ${killPopulation} citizens killed.`);
                }

                if (village.gold <= 0 || village.population <= 0) {
                    village.disbanded = true;
                    console.log(`${village.name} has been wiped off the map!`);
                }
            }
        }
    }
    function prosper(line) {
        let [command, townName,giveGold] = line.split('=>');
        for (const village of villages) {
            if(Number(giveGold) < 0){
                console.log('Gold added cannot be a negative number!');
                break;
            }
            if(village.name == townName){
                village.gold += Number(giveGold);
                console.log(`${giveGold} gold added to the city treasury. ${townName} now has ${village.gold} gold.`);
            }
        }
    }
    function sort(){

        let sorting = function(a,b) {
            let boo = b.gold - a.gold;
            if(boo === 0) {
                return a.name.localeCompare(b.name);
            }
            return boo;
        }
        villages = villages.sort(sorting);
    }
}
solve([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Hevana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
]);

// Description
// Until the "Sail" command is given you will be receiving:
// •	Cities that you and your crew have targeted, with their population and gold, separated by "||".
// •	If you receive a city which has been already received, you have to increase the population and gold with the given values.
// After the "Sail" command, you will start receiving lines of text representing events until the "End" command is given. 
// Events will be in the following format:
// •	"Plunder=>{town}=>{people}=>{gold}"
// o	You have successfully attacked and plundered the town, killing the given number of people and stealing the respective amount of gold. 
// o	For every town you attack print this message: "{town} plundered! {gold} gold stolen, {people} citizens killed."
// o	If any of those two values (population or gold) reaches zero, the town is disbanded.
// 	You need to remove it from your collection of targeted cities and print the following message: "{town} has been wiped off the map!"
// o	There will be no case of receiving more people or gold than there is in the city.
// •	"Prosper=>{town}=>{gold}"
// o	There has been a dramatic economic growth in the given city, increasing its treasury by the given amount of gold.
// o	The gold amount can be a negative number, so be careful. If a negative amount of gold is given print: "Gold added cannot be a negative number!" and ignore the command.
// o	If the given gold is a valid amount, increase the town's gold reserves by the respective amount and print the following message: "{gold added} gold added to the city treasury. {town} now has {total gold} gold."
// Input
// •	On the first lines, until the "Sail" command, you will be receiving strings representing the cities with their gold and population, separated by "||"
// •	On the next lines, until the "End" command, you will be receiving strings representing the actions described above, separated by "=>"
// Output
// •	After receiving the "End" command if there are any existing settlements on your list of targets, you need to print all of them, sorted by their gold in descending order, then by their name in ascending order, in the following format:
// Ahoy, Captain! There are {count} wealthy settlements to go to:
// {town1} -> Population: {people} citizens, Gold: {gold} kg
//    …
// {town…n} -> Population: {people} citizens, Gold: {gold} kg
// •	If there are no settlements left to plunder, print:
// "Ahoy, Captain! All targets have been plundered and destroyed!"
// Constraints
// •	The initial population and gold of the settlements will be valid, 32-bit integers, 
// will never be negative or exceed the respective limits.
// •	The town names in the events will always be valid towns that should be on your list.


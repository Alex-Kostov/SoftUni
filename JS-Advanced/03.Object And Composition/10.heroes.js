function solve() {
  return {
    mage(mageName) {
      return {
        name: mageName,
        mana: 100,
        health: 100,
        cast(skillName) {
          this.mana--;
          return console.log(`${this.name} cast ${skillName}`);
        }
      }
    },
    fighter(fighterName) {
      return {
        name: fighterName,
        stamina: 100,
        health: 100,
        fight() {
          this.stamina--;
          return console.log(`${this.name} slashes at the foe!`);
        }
      }
    }
  }
}

//input
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);


// Create a function returns an object with 2 methods (mage and fighter). This object should be able to create heroes (fighters and mages). Every hero has a state.
// •	Fighters have name, health = 100 and stamina = 100 and every fighter can fight.  When he fights his stamina decreases by 1 and the following message is printed on the console:
// `${fighter's name} slashes at the foe!`
// •	Mages also have state (name, health = 100 and mana = 100). Every mage can cast spells. When a spell is casted the mage's mana decreases by 1 and the following message is printed on 

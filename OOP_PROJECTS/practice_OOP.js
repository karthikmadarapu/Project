const myEmployees  = {
    frontendDev:"harry - 28",
    backendDev: "Barak - 25",
    designer: "shasha"
};


console.log(myEmployees.designer);


class Orgy{

    constructor(name, age, gender, skills){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.skills = skills;
    }
    
    pplGangbang(amountOfPpl){
        if(amountOfPpl < 5){
            console.log(`participants should be no less than 5`);
        }
        else{
            console.log(`orgy can be possible!`);
        }
    }
}


const person_1 = new Orgy("chad", 24, "male", "good in doggyStyle");

const person_2 = new Orgy("bonnie", 19, "whore-female", "spreading legs");


console.log(person_1.skills);
console.log(person_2.name);

// GAME CHARACTERISTICS FOR SUPERHEROS 

class Character{
    #health;

    constructor(name, heroClass, health){
        this.name = name;
        this.heroClass = heroClass;
        this.#health = health;
    }
    
    get health(){
        return this.#health;
    }

    set health(newHealth){

        if(newHealth > 0){
            this.#health = newHealth;
        }
        else{
            console.log(`newHealth must be greater than 0`);
        }

    }

    takeDamage(amount){
        this.#health -= amount;
        console.log(`${this.name} took ${amount}damage! Health is now ${this.#health}`);
    }

   
    attack(targetCharacter){

        console.log(`${this.name} attacks ${targetCharacter.name}!`);
        targetCharacter.takeDamage(20);

    }


}


class Mage extends Character {

    constructor(name, health, mana){

        super(name, "Mage", health);
        this.mana = mana;
    }

    castSpell(targetCharacter){

        if(this.mana >= 20){
            this.mana -= 20;
            console.log(`${this.name} casts a devastating Fireball spell at ${targetCharacter.name}! (Mana left: ${this.mana})`);
            targetCharacter.takeDamage(40); // Mages deal much higher damage with spells!
            }
            else{
                console.log(`${this.name} out of mana!`);
         }

    }
}


 class Warrior extends Character{



    constructor(name, health, stamina){
        super(name, "Warrior", health);
        this.stamina = stamina;
    }
    attack(targetCharacter){
        console.log(`${this.name} screams a battle cry! 🪓`);
        
        // Calls the original attack() logic from the Character class
        super.attack(targetCharacter); 

        this.stamina -= 10;
        console.log(`stamina left: ${this.stamina}`);
    }


 }

 const finalBoss = new Character("Thanos", "Titan", 500 );


 const party = [
    new Warrior("Thor", 150, 100),
    new Mage("Merlin", 80, 100),
    new Warrior("Achilles", 120, 80)
 ];
for(const hero of party){

    hero.attack(finalBoss);
    console.log("---------------------------------");
}



 const char_1 = new Character("thor", "ThunderGod", 100);
 const char_2 = new Character("medusa", "unknown", 65);
 const mage_1 = new Mage("Merlin", 80, 100);
 const optimusPrime = new Warrior("Optimus Prime", 150, 100);


 console.log(mage_1.name);
 console.log(mage_1.heroClass);
 console.log(mage_1.health);
 console.log(mage_1.mana);


mage_1.castSpell(char_1);
console.log(mage_1.mana);
console.log(char_1.health);

char_1.attack(mage_1);

console.log(optimusPrime.name);
console.log(optimusPrime.health);
console.log(optimusPrime.stamina);

optimusPrime.attack(char_2);

//  console.log(char_1.heroClass);

//  console.log(char_1.health);
//   char_1.takeDamage(25);
//  console.log(char_2.health);

//  char_1.attack(char_2);



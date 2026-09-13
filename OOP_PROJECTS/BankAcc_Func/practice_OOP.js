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


class Character{
     
    constructor(name, heroClass, health){
        this.name = name;
        this.heroClass = heroClass;
        this.health = health;
    }

    takeDamage(amount){
        this.health -= amount;
        console.log(`${this.name} took ${amount}damage! Health is now ${this.health}`);
    }

    


}


 const char_1 = new Character("thor", "ThunderGod", 100);
 const char_2 = new Character("medusa", "unknown", 65);




 console.log(char_1.heroClass);

 console.log(char_1.health);
  char_1.takeDamage(25);
 console.log(char_2.health);
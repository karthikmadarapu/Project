class BankAccount{

     constructor(accHolder, balance){

        this.accHolder = accHolder;
        this.balance = balance;

    }





 deposit(amount){
    console.log("Depositing....");
    this.balance += amount;

     console.log(`${this.accHolder}'s total balance after depositing is ${this.balance}`);
}


 withDraw(amount){
    console.log("Withdrawing....");
    if(amount > this.balance){

        console.log(`insuffecient funds`);

    }
    else{
        this.balance -= amount;
    }
    

     console.log(`${this.accHolder}'s total balance after withdrawing is ${this.balance}`);
}


}



const user_1 = new BankAccount("david Beckham", 5000);
const user_69 = new BankAccount("Cristiano Ronaldo", 90000);


console.log(`${user_1.accHolder} = ${user_1.balance} & ${user_69.accHolder} = ${user_69.balance} fkkk u are a brokie!!!!!`);

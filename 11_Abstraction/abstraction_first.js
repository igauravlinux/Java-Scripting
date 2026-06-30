

class BankAccount{
    #balance; //Private Property

    constructor(amount){
        this.#balance = amount; //Initial balance setup
    }

    // Public method - safety expose balance
    getBalance(){
        return `Balance: ${this.#balance}`;
    }

    // Private method - hidden logic
    #calculateInterest(){
        return this.#balance * 0.5;
    }  

    // Public method to expose calculated interest
    getInterest(){
        return `Interest: ${this.#calculateInterest()}`;
    }
}

let acc = new BankAccount(2000);


console.log(acc.getBalance()); //Balance 2000
console.log(acc.getInterest()); //Interest 1000


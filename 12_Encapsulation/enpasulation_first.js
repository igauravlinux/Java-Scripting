

class BankAccount{
    #balance; //Propety

    constructor(balance){
        this.#balance = balance;
    }

    deposit(amount){
        this.#balance += amount;
    }

    withdraw(amount){
        if(amount <= this.#balance){
            this.#balance -= amount;
        }else{
            console.log("Insufficient balance");
        }
    }

    getBalance(){
        return this.#balance;
    }
}

let account = new BankAccount(1000);

account.deposit(4000);
account.withdraw(1000);
console.log(account.getBalance());
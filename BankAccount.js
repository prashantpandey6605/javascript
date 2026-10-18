class BankAccount {
    #balance;
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    get() {
        console.log("Your Current Balance is: ",this.#balance);
        
    }

    withdraw(amount) {
        if(amount > this.#balance){
            console.log("InSufficient Balance Available !!");
            return;
            
        }

        else{
            this.#balance = this.#balance - amount;
        }
    }

    deposit(amount) {
        if(amount <= 0){
            console.log("Entered Balance cannot be Deposited !!");
            return;
            
        }

        this.#balance = this.#balance + amount;
    }

    static calculateTax(amount, rate = 10){
        if(amount<=0){
            console.log("Tax cannot be Calculated !!");
            return;
            
        }

        let tax = (amount * rate)/100;
        console.log(`Tax on Amount ${amount} and ${rate}% = ${tax}`);
        return tax;
        
    }
}


let acc1 = new BankAccount(500);
acc1.get();
acc1.withdraw(320);
acc1.get();
acc1.deposit(15000);
acc1.get();

let Tax = BankAccount.calculateTax(15000, 5);
console.log(Tax);
class bankaccount {
    constructor(digits, saldo) {
  this.accountNumber = digits;
  this.balance = saldo;
}

    deposit(amount) {
        this.balance += amount;
    }
    
    withdraw(amount) {
        this.balance -= amount;
    }
    showBalance(amount) {
        console.log(`Saldot på ${this.accountNumber} är ${this.balance}kr.`);
    }
    
}
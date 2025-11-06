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

// Skapar två nya konton med kontonummer och startsaldo
let pippi = new bankaccount("12345", 1000);
let zaida = new bankaccount("67890", 500);


zaida.deposit(1000);    // Zaida sätter in 1000 kr
zaida.withdraw(300);    // Zaida tar ut 300 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
zaida.deposit(3000);    // Zaida sätter in 1000 kr
pippi.deposit(300000);    // Pippi sätter in 1000 kr
zaida.showBalance();    // Visar saldot
pippi.showBalance();    // Visar saldot

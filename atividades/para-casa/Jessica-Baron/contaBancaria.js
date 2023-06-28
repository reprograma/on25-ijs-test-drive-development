class BankAccount {
    constructor(holder, balance, limit) {
        this.holder = holder;
        this.balance = balance;
        this.limit = limit;
    }

    checkBalance() {
        return this.balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else if (amount <= this.balance + this.limit) {
            this.limit -= (amount - this.balance);
            this.balance = 0;
        } else {
            throw new Error("Insufficient balance and limit for withdrawal.");
        }
    }

    adjustLimit(newLimit) {
        this.limit = newLimit;
    }
}

module.exports = { BankAccount }
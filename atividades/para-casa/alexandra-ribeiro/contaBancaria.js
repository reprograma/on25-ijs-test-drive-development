
class BankAccount {
    constructor(client, balance, limit, disabledLimit) {
        this.client = client,
        this.balance = balance,
        this.limit = limit
        this.disableLimit = disabledLimit
    }

    checkBalance() {
        if (this.balance > 0) {
            return true;
        } else {
            return false
        }
    }

    checkLimit() {
        if(this.limit > 0) {
            return true
        } else {
            return false
        }
    }

    withdraw(value) {
        let newBalance;
        if (value > this.balance && value < this.balance + this.limit) {
            newBalance = this.balance - value
            this.balance = newBalance;
            this.limit += newBalance
        } else if (value <= this.balance) {
            newBalance = this.balance - value
            this.balance = newBalance;
        } else {
            return 'Insufficient funds'
        }
    }

    deposit(value){
        if (value <= 0) {
            return;
        }
        this.balance += value
        return this.balance
    }

    setLimit(newLimit) {
        if (newLimit >= 0) {
            this.limit = newLimit
        } else {
            return this.limit
        }
    }

    setDisableLimit(disable) {
        this.disabledLimit = disable;
    }
}


module.exports = BankAccount

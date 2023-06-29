class bankAccount {
  constructor(name, balance, limit) {
    this.name = name;
    this.balance = balance;
    this.limit = limit;
    this.status = true;
  }

  // Define um novo limite para a conta
  setLimit(value) {
    if (value < 0) {
      return "invalid value";
    } else {
      this.limit = value;
    }
  }

  // Ativa ou desativa o limite da conta
  setStatus(condition) {
    if (condition) {
      this.status = true;
    } else if (!condition) {
      this.status = false;
    } else {
      return "invalid value";
    }
  }

  // Realiza um saque na conta
  withdraw(value) {
    let balanceAvailable = this.limit + this.balance;

    if (
      this.balance >= value ||
      (this.balance < value && balanceAvailable >= value && this.status == true)
    ) {
      this.balance -= value;
    } else {
      return "Insufficient balance or disabled limit";
    }
  }

  // Realiza um depósito na conta
  deposit(value) {
    if (value <= 0) {
      return "invalid value";
    } else {
      this.balance += value;
    }
  }
}

module.exports = bankAccount;

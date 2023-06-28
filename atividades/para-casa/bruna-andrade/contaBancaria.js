class bankAccount {
  constructor(name, balance, limit) {
    this.name = name;
    this.balance = balance;
    this.limit = limit;
    this.status = true;
  }

  newLimit(value) {
    if (value < 0) {
      return "invalid value";
    } else {
      this.limit = value;
    }
  }
  statusLimit(condition) {
    if (condition === true) {
      this.status = true;
    } else if (condition === false) {
      this.status = false;
    } else {
      return "invalid value";
    }
  }
  withdrawValue(value) {
    let balanceAvailable = this.limit + this.balance;

    if (this.balance >= value) {
      this.balance -= value;
    } else if (
      this.balance < value &&
      balanceAvailable >= value &&
      this.status == true
    ) {
      this.balance -= value;
    } else {
      return "Insufficient balance or disabled limit";
    }
  }
  putValue(value) {
    if (value <= 0) {
      return "invalid value";
    } else {
      this.balance += value;
    }
  }
}

module.exports = bankAccount;

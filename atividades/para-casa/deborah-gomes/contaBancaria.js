const bankAccount = {
  accountHolder: "Name",
  balance: 0,
  limit: 0,

  checkBalance: () => bankAccount.balance,

  makeWithdrawal: (amount) => {
    let withdrawalResult = {};

    if (bankAccount.balance >= amount) {
      bankAccount.balance -= amount;
      withdrawalResult.success = true;
    } else if (bankAccount.balance + bankAccount.limit >= amount) {
      const utilizedLimit = amount - bankAccount.balance;
      bankAccount.balance = 0;
      bankAccount.limit -= utilizedLimit;
      withdrawalResult.success = true;
    } else {
      withdrawalResult.success = false;
    }

    withdrawalResult.currentBalance = bankAccount.balance;
    return withdrawalResult;
  },

  makeDeposit: (amount) => {
    bankAccount.balance += amount;
  },

  adjustLimit: (newLimit) => {
    bankAccount.limit = newLimit;
  },

  deactivateLimit: () => {
    bankAccount.limit = 0;
  }
};

module.exports = bankAccount;
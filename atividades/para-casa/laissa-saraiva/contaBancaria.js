const bankAccount = {
  accountOwner: "Laissa",
  balance: 2000,
  accountLimit: 3000,
};

let balance = bankAccount.balance;
let accountLimit = bankAccount.accountLimit;

function withdrawMoney(withdraw) {
  if (withdraw <= balance) {
    balance -= withdraw;
    return balance;
  } else {
    if (withdraw <= accountLimit) {
      balance -= withdraw;
      accountLimit -= withdraw;
      return balance;
    } else {
      return "Unauthorized operation.";
    }
  }
}

function showAccountBalance() {
  return `Your current account balance is R$${balance}.`;
}

function depositCash(deposit) {
  return (balance += deposit);
}

function adjustAccountLimit(action, value) {
  switch (action) {
    case "increase":
      return (accountLimit += value);
      break;
    case "decrease":
      return (accountLimit -= value);
      break;
    case "cancel":
      delete bankAccount.accountLimit;
      return "Your additional limit has been disabled.";
  }
}

module.exports = {
  withdrawMoney,
  showAccountBalance,
  depositCash,
  adjustAccountLimit,
};

const bankAccount = {
  titular: "Laissa",
  balance: 2000,
  accountLimit: 3000,
};

let balance = bankAccount.balance;
let accountLimit = bankAccount.accountLimit;

function withdrawMoney(withdraw) {
  if (withdraw <= balance) {
    balance -= withdraw;
    return balance;
  } else if (withdraw > balance && withdraw <= accountLimit) {
    // =====================================================
    //  return "Vc entrou no Limite especial."
    balance -= withdraw;
    return balance;
    // =====================================================
  } else {
    return "Unauthorized operation.";
  }
}

// console.log(balance);
// console.log(withdrawMoney(500)) // "balance: 1500"
// console.log(withdrawMoney(2001)) // "Vc entrou no Limite especial."
// console.log(withdrawMoney(5000)) //"Operação negada"


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

module.exports = {withdrawMoney, showAccountBalance, depositCash, adjustAccountLimit};

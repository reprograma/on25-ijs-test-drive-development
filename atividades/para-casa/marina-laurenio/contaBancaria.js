// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

function createAccount(name, balance, limit) {
  return {
    name: name,
    balance: balance,
    limit: limit,
  };
}

function checkBalance(account) {
  return account.balance;
}

function withdraw(account, withdrawAmount) {
  if (account.balance >= withdrawAmount) {
    account.balance -= withdrawAmount;
  } else {
    if (account.balance + account.limit >= withdrawAmount) {
      account.balance -= withdrawAmount;
    }
  }
}

function deposit(account, depositAmount) {
  if (depositAmount >= 0) {
    return (account.balance += depositAmount);
  }
}

function addLimit(account, limitValue) {
  if (limitValue >= 0) {
    return (account.limit += limitValue);
  }
}
function removeLimit(account, limitValue) {
  if (limitValue >= 0) {
    return (account.limit -= limitValue);
  }
}
function limitOff(account) {
  return (account.limit = 0);
}

module.exports = {
  createAccount,
  checkBalance,
  withdraw,
  deposit,
  addLimit,
  removeLimit,
  limitOff,
};

const contaBancaria = {
    "name": "Brena",
    "balance": 1000,
    "limit": 2000
}

function isObject(account) {
    return typeof account === 'object';
}

function isAcountComplete(account) { //verifica se a conta tem as propriedades name, balance, limit
    if(account.hasOwnProperty("name") &&
        account.hasOwnProperty("balance") && 
        account.hasOwnProperty("limit")
    ) return true
    else {
        return false
    }
}

function showBalance(account) { //mostra o saldo
    return account.balance
}

function withDrawalFromBalance(account, withDrawal) { // faz o saque e mostra o novo saldo
 const balance = account.balance
 const newBalance = balance - withDrawal

 if(withDrawal > balance) { // se o saque for maior que o saldo, impede o saque
     return `O saque de ${withDrawal} não é possível, seu saldo é de apenas ${balance}`
 } else {
 return newBalance

}}

function withdrawFromLimit(account, amount) {
    const balance = account.balance;
    const limit = account.limit;
    const availableBalance = balance + limit;
  
    if (amount <= limit) {
      const remainingLimit = limit - amount;
      account.limit = remainingLimit;
      return  `Saque realizado do limite. Limite restante: ${remainingLimit}`
      
    } else {
      return `O valor do saque excede o limite disponível. Limite atual: ${limit}`
      ;
    }
  }

function makeDeposit(account, deposit) { // faz e mostra depósito
    const newBalance = account.balance + deposit
    return newBalance
}

function raiseLimit(account, newLimit) {
    const raisedLimit = account.limit += newLimit
    return raisedLimit
}

function lowerLimit(account, newLimit) {
    const loweredLimit = account.limit -= newLimit
    return loweredLimit
}

function disableLimit(account) {
    account.limit = 0;
    return "Limite desativado com sucesso!";
  }

module.exports = { contaBancaria, isObject, isAcountComplete, showBalance, withDrawalFromBalance, withdrawFromLimit, makeDeposit, raiseLimit, lowerLimit, disableLimit}


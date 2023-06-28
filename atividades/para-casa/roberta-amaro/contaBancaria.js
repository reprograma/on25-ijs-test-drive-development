// 1. Contruir Objeto conta bancaria contendo: nome, saldo e limite da conta
// 2. Criar teste para consultar saldo
// 3. Criar teste para saque
// 4. Verificar se existe saldo suficiente para retirada, caso não tenha && possua limite suficiemte === sque podera ocorre e ficara negativo
// 4. Criar teste para depósito

const bankAccount = {
  accountName: "Clara",
  balance: 1000,
  limite: 3000,
};

let balance = bankAccount.balance;
let limit = bankAccount.limite;

function checkBalance() {
  return balance;
}

function withdraw(withdraw) {
  if (withdraw <= balance) {
    balance = balance - withdraw;
    return "Saque efetuado";
  } else {
    if (withdraw <= limit) {
      balance = balance - limit;
      //return balance;
      return "Saldo negativo e limite disponível";
    } else {
      return "Operação Negada";
    }
  }
}

function makeDeposit(amount) {
  deposit = bankAccount.balance + amount;
  return deposit;
}

function increasedLimit(increase) {
  limit = limit + increase;
  return limit;
}

function decreasedLimit(increase) {
  limit = limit - increase;
  return limit;
}

function desactivatedLimit(conta) {
  conta.limite = null;
}

module.exports = {
  withdraw,
  checkBalance,
  makeDeposit,
  increasedLimit,
  decreasedLimit,
  desactivatedLimit,
};

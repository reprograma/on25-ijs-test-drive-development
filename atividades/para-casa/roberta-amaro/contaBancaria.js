// 1. Contruir Objeto conta bancaria contendo: nome, saldo e limite da conta
// 2. Criar teste para consultar saldo
// 2. Criar teste para saque
// 2. Criar teste para depósito

const bankAccount = {
  nome: "Clara",
  saldo: 1000,
  limite: 3000,
};

let balance = bankAccount.saldo;

function withdraw(withdraw) {
  balance = balance - withdraw;
  return balance;
}

function totalBalance(balance) {
  return balance;
}

let deposit = bankAccount.saldo + 500;

function makeDeposit() {
  balance = balance + deposit;
  /*  console.log(
    `Depósito de R$${value} realizado na conta de ${bankAccount.nome}. Saldo atual: R$${bankAccount.saldo}`
  ); */
  return deposit;
}

module.exports = { withdraw, totalBalance, makeDeposit };

// 1. Contruir Objeto conta bancaria contendo: nome, saldo e limite da conta
// 2. Criar teste para consultar saldo
// 3. Criar teste para saque
// 4. Criar teste para depósito

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

//saldo atualizado
let saldoAtualizado = bankAccount.saldo;

function updatedBalance(saque) {
  let novoSaldo = saldoAtualizado - saque;
  return novoSaldo;
}

let novoSaldo = 900;

function makeDeposit() {
  deposit = novoSaldo + 500;

  return deposit;
}

module.exports = { withdraw, updatedBalance, makeDeposit };

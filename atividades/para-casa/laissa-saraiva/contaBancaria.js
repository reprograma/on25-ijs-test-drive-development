const bankAccount = {
	titular: "João",
	saldo: 2000,
	accountLimit: 3000
}

let balance = bankAccount.saldo;
let accountLimit = bankAccount.accountLimit;

// saque
function withdrawMoney(withdraw) {
  if(withdraw <= balance) {
    balance = (balance - withdraw);
    return balance;
  } else if (withdraw > balance && withdraw < accountLimit) {
// =====================================================
 return "Vc entrou no Limite especial."
 // ===================================================== 
  } else {
    return "Operação negada";
  }
}

// console.log(balance);
// console.log(withdrawMoney(500)) // "saldo: 1500"
// console.log(withdrawMoney(2001)) // "Vc entrou no Limite especial."
// console.log(withdrawMoney(5000)) //"Operação negada"


 // Verificar Saldo
function accountBalance() {
  return `O saldo atual de sua conta é R$${balance}.`;
}

// console.log(accountBalance());

// Realizar Deposito 
function depositCash(deposit){
  balance = (balance + deposit)
  return balance;
}

// console.log(depositCash(10000));
// console.log(`O saldo atual é ${balance}`);
// console.log(bankAccount); // retorna oobjeto

  module.exports = {withdrawMoney, accountBalance, depositCash}
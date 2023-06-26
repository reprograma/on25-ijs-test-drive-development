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
// console.log(withdrawMoney(500)) // "saldo: 1500"
// console.log(withdrawMoney(2001)) // "Vc entrou no Limite especial."
// console.log(withdrawMoney(5000)) //"Operação negada"


 // Verificar Saldo
function accountBalance() {
  return `O saldo atual de sua conta é R$${balance}.`;
}

// console.log(accountBalance());

// Realizar Deposito 
function depositCash(deposit) {
  return (balance += deposit);
}

// console.log(`O saldo atual é ${balance}`);
// console.log(depositCash(1000));
// console.log(depositCash(300));
// console.log(`O saldo atual é ${balance}`);

// console.log(bankAccount); // retorna oobjeto


// Ajuste em limite bancário

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
      return "Seu Limite adicional foi desativado.";
  }
}

// console.log(bankAccount); // retorna oobjeto
// console.log(adjustAccountLimit("increase", 10));
// console.log(accountLimit); // retorna oobjeto
// console.log(adjustAccountLimit("decrease", 50));
// console.log(adjustAccountLimit("cancel")); 
// console.log(bankAccount); // retorna oobjeto


  module.exports = {withdrawMoney, accountBalance, depositCash, adjustAccountLimit}
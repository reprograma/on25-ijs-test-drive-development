/*1- Considere um objeto que represente uma conta bancária, 
 2- a conta possui o nome do titular, 
 3- o saldo e o limite da conta. 
 4- É possível fazer operações de consulta de saldo, 
 5- saque 
 6- e depósito.
  No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque.*/

const bankAccount = {
    client: "Laís",
    balance: 500,
    creditLimit: 600,
};

let balance = bankAccount.balance;
let creditLimit = bankAccount.creditLimit

function takeMoney(take) {
    if(take <= balance){
        balance -= take;
        return balance;
    } else {
        if(take <= creditLimit){
            balance -= take;
            creditLimit -= take;
            return balance;
        } else {
            return "It was not possible to perform this operation"
        };
    };
};

function depositMoney(deposit) {
    balance += deposit
    return balance;
};

function seeBalance() {
    return balance;
};

function ajustLimit(action, newLimit){
    switch (action) {
        case "increase":
          return (creditLimit += newLimit);
          break;
        case "decrease":
          return (creditLimit -= newLimit);
          break;
        case "cancel":
          delete bankAccount.creditLimit;
          return "Seu Limite adicional foi desativado.";
      }

};


module.exports = {takeMoney, depositMoney, seeBalance, ajustLimit, deactivateLimit}


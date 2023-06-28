function checkBalance(account){
    return account.saldo;
} 

function withdrawMoney(account, value){
    if(account.saldo >= value) {
        account.saldo = account.saldo - value;
    }
    else if((account.limite + account.saldo) >= value) {
        account.limite = account.limite + (account.saldo - value);
        account.saldo = account.saldo - value;
    }
    else {
        return "Não é possível realizar a operação!"
    }
} 

function deposit(account, value){
    account.saldo = account.saldo + value;
    return (account.saldo);
} 

module.exports = {
    checkBalance,
    withdrawMoney,
    deposit,
}
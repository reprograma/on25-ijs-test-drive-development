// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta.
// É possível fazer operações de consulta de saldo, saque e depósito. 
// No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo 
// suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo
// do cliente ficará negativo após o saque. 
// Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. 
// Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

// FAZER O PR e colocar o link do PR e colocar no CARD e mover no Trello
// Entregar o link do PR no classroom

function withdraw(bankAccount, withdrawValue) {

    if (withdrawValue <= bankAccount.balance + bankAccount.limit) {
            newBalance = bankAccount.balance - withdrawValue
    } else {
        return "Operação não permitida. Sem saldo/limite suficiente."
    }

    return newBalance
}

function checkBalance(bankAccount) {
    return bankAccount.balance
}

function deposit(bankAccount, depositValue) {
    bankAccount.balance = bankAccount.balance + depositValue
    return bankAccount.balance
}

function modifyLimit(bankAccount, limitModification) {
    if ((bankAccount.limit + limitModification) > 0) {
        console.log(bankAccount.limit)
        bankAccount.limit = bankAccount.limit + limitModification
        console.log(bankAccount.limit)
    } else {
        bankAccount.limit = 0
    }

    return bankAccount.limit
}

module.exports = {withdraw, checkBalance, deposit, modifyLimit}
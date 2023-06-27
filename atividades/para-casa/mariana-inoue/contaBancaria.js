function bankAccount(amount) {
    //fazer refatoração ternario

    const accountBalance = 10000
    const overdraftsPositive = 55000

    if (accountBalance < amount) {


        if (overdraftsPositive >= amount) {
            const withdrawal = overdraftsPositive - amount
            const bankStatement = 10000 - amount
            return 'Saque realizado ' + withdrawal + 'sua conta se encontra negativa' + bankStatement
        }
    }

    if (accountBalance >= amount) {
        const withdrawal = accountBalance - amount
        return 'Saque realizado ' + withdrawal
    }


}

function adjustAccountBalanceIncrease(limit) {
    const accountBalance = 10000
    if(accountBalance <= 0){
        return 'Limite indisponivel'
    }

    if(limit > 0){
        const increaseLimit = accountBalance + limit
        return  'Operação realizada com sucesso. Limite aumentado para: ' + increaseLimit
    }
}

function adjustAccountBalanceReduce(limit) {
    const accountBalance = 10000
    if(accountBalance <= 0){
        return 'Limite indisponivel'
    }

    if(limit > 0){
        const reduceLimit = accountBalance - limit
        return  'Operação realizada com sucesso. Limite reduzido para: ' + reduceLimit
    }
}

function closeAccountBalance(confirm) {
    if(confirm == 'Não'){
        return 'Sua continua ativada. Obrigada'
    }

    if(confirm == 'Sim'){
        let accountBalance = 10000
        const withdrawal= accountBalance - accountBalance

        return 'Operação realizada com sucesso. Valor de resgate. Conta encerrada ' + withdrawal
    }


}



module.exports = { bankAccount, adjustAccountBalanceIncrease, adjustAccountBalanceReduce, closeAccountBalance }

function consultAccount (titularName, balance, limit) {
    return {
        name: titularName,
        balance: balance,
        limit: limit
    }
}

function checkBalance(account) {
    return account.balance
}

function checkLimit(account) {
    return account.limit
}

function deposit(account, value) {
    account.balance += value
    return `Depósito realizado com sucesso! Seu novo saldo é de R$ ${account.balance}`
}

function withdraw(account, value) {
    if (account.balance >= value || (account.balance <= value && account.limit >= value)){
        account.balance -= value
        return `Saque realizado com sucesso, seu novo saldo é de R$ ${account.balance}`
    } else if (account.balance < value && account.limit < value) {
        return 'Saque não autorizado! Saldo e limites insuficientes'
    }
}


function adjustLimit(account, newLimit) {
    if (newLimit != 0) {
        account.limit = newLimit
    }
}

function disableLimit(account) {
    account.limit = 0
}

module.exports = { consultAccount, checkBalance, checkLimit, deposit, withdraw, adjustLimit, disableLimit}




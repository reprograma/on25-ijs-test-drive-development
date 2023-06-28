
function newAccount (name, balance, limit) {
    return {
    name: name,
    balance: balance,
    limit: limit
    }
}

function checkBalance(account) {
    return account.balance
}
function increaseLimit (account, newLimit) {
    return account.limit = account.limit + newLimit
}
function decreaseLimit (account, newLimit) {
    return account.limit = account.limit - newLimit
}
function disableLimit (account){
    return account.limit = 0
}

function deposit(account, depositMoney){
    if (depositMoney > 0) {
        return account.balance = account.balance + depositMoney
    } 
}

function withdraw(account, withdrawAmount) {
    if (account.balance >= withdrawAmount) {
        return account.balance = account.balance - withdrawAmount
    }
    if (account.limit + account.balance >= withdrawAmount) {
        return account.balance = account.balance - withdrawAmount
    }
}

module.exports = {newAccount, checkBalance, increaseLimit, disableLimit, decreaseLimit, deposit, withdraw}
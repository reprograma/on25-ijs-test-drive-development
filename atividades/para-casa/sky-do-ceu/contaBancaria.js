const accounts = require('./contas.json')

function findAcc(name){
    const accExists = accounts.find(acc => acc.name == name)
    if (!accExists) return false
    return accExists
}

function changeBalance(name, value){
    accounts.find((acc, index) => {
        if (acc.name == name) {
            accounts[index].balance += value
            return
        }
    })
}

function checkBalance(name){
    const acc = findAcc(name)
    if (!acc) return 'Account does not exists'
    return acc.balance
}

function withdrawValue(name, value){
    const acc = findAcc(name)
    if (!acc) return 'Account does not exists'
    const maxWithdraw = acc.balance + acc.limit
    if (value > maxWithdraw) return 'Cannot withdraw value'
    changeBalance(name, (value * (-1)))
    return `Withdrew ${value}, current balance: ${acc.balance}`
}

function depositValue(name, value){
    const acc = findAcc(name)
    if (!acc) return 'Account does not exists'
    changeBalance(name, value)
    return `Deposited ${value}, current balance: ${acc.balance}`
}

function changeLimit(name, value){
    const accExists = findAcc(name)
    if (!accExists) return 'Account does not exists'
    if (value < 0) return 'Over withdraw value must be greater than or equal to 0'
    const acc = accounts.find((acc, index) => {
        if (acc.name == name) {
            accounts[index].limit = value
            return acc
        }
    })
    return `New limit set to: ${acc.limit}`
}

module.exports = {
    checkBalance,
    withdrawValue,
    depositValue,
    changeLimit,

}
function checkBalance(account) {
    const account = {
        "nameClient": "Ciane", 
        "balance": 2000, 
        "limit": 10000
    }

    if(numberAccount !== account) {
        return "Customer does not exist!"
    }else {
        return `Your balance is: ${account.balance} R$ `
    }
}

function accountWithdrawal(account, value) {
    if(account.balance || account.limit > value) {
        account.balance -= value
        return `Withdrawal made. Your balance is: ${account.balance} R$`
    }else if(account.balance && account.limit < value) {
        return `Value is above the available account. Your balance is: ${account.balance} R$`
    }
    }
    
    function accountDeposit(account, depositValue) {
        if(depositValue > 0) {
            account.balance += depositValue
            return `Deposit made successfully. Your balance is: ${account.balance} R$`
        } else {
            return `Deposit insuccessfully. Your balance is: ${account.balance} R$`
        }
    }
    
    function accountLimit(account, newLimit, limitSituation) {
        if(limitSituation == "disabled") {
            account.limitAccount = 0;
        return 'Your limit change is: Disabled'
        }
    }

module.exports = {  checkBalance, accountWithdrawal, accountDeposit, accountLimit }
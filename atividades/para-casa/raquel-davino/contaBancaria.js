const bankAccount = {
    accountHolder: 'Raquel Davino',
    balance: 1000,
    specialCredit: 500,
}

function getBankAccountBalance() {
    return bankAccount.balance;
}

function checkBankAccountBalance() {
    if(bankAccount.balance > 0) {
        return true;
    } 
}

function getSpecialCredit() {
    return bankAccount.specialCredit;
}

function withdraw(withdrawValue) {
    //to do
    
}

function deposit(depositValue) {
    bankAccount.balance += depositValue
    return bankAccount.balance;
}

function changeSpecialCredit(value, change) {
    switch(change) {
        case "increase":
            return bankAccount.specialCredit += value;
            break;
        case "decrease":
            return bankAccount.specialCredit -= value;
            break;
        case "deactivate":
            return bankAccount.specialCredit = 0;
    }
}

module.exports = {
    getBankAccountBalance, 
    checkBankAccountBalance, 
    getSpecialCredit,
    withdraw,
    changeSpecialCredit,
    deposit
};

    
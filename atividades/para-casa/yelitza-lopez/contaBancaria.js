function bankAccount(nameAccount, balance, limit){
    this.nameAccount = nameAccount;
    this.balance = balance;
    this.limit = limit;

    return `Seu nome é ${this.nameAccount}, seu saldo é ${this.balance}, seu límite é ${this.limit}`
}

function deposit(amount){
    this.deposit += amount;
    return `Seu saldo é de ${deposit}`
}

function withdraw(amount){
    if (this.balance >= amount){
        this.balance -= amount;
        return `Saque de ${amount}`
    } else if (this.limit >= amount){
        this.balance -= amount;
        return `Saque de ${amount} no cheque especial`
    }else{
        return 'Saldo insuficiente'
    }       
}

module.exports = {bankAccount, deposit, withdraw}
